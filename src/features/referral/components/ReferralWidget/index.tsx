import React, { useEffect, useContext } from "react";
import { RoastnestContext } from "../../../../core/context";
import { ReferralWidgetProps } from "./types";
import { DEFAULT_WIDGET_PROPS } from "./defaults";
import { buildStyles } from "./styles";
import { useReferralWidget } from "../../hooks/useReferralWidget";
import { initializeReferralAPI } from "../../hooks/useReferral";
import ReferralButton from "../ReferralButton";
import ReferralPopup from "../ReferralPopup";
import ReferralCard from "../ReferralCard";

export const ReferralWidget: React.FC<ReferralWidgetProps> = (userProps) => {
	const context = useContext(RoastnestContext);
	const effectiveProjectId = context?.projectId;

	if (!effectiveProjectId) {
		console.error("Roastnest Referral SDK: projectId is required via RoastnestProvider");
		return null;
	}

	let finalCode = localStorage.getItem("roastnest_my_referral_code") || "";
	if (!finalCode) {
		finalCode = Math.random().toString(36).substring(2, 10).toUpperCase();
		localStorage.setItem("roastnest_my_referral_code", finalCode);
	}

	let finalLink = userProps.referralLink;
	let hasError = false;

	if (finalLink && typeof window !== "undefined") {
		try {
			const url = new URL(finalLink);
			if (!url.hostname) throw new Error("Invalid URL");

			if (url.hostname !== window.location.hostname) {
				console.error(
					`Roastnest Referral SDK: referralLink domain (${url.hostname}) must match the current website domain (${window.location.hostname}).`,
				);
				hasError = true;
			} else {
				url.searchParams.set("ref", finalCode);
				finalLink = url.toString() as `http://${string}` | `https://${string}`;
			}
		} catch (err: any) {
			console.error(
				"Roastnest Referral SDK: referralLink must be an absolute URL containing a domain (e.g., https://example.com/invite).",
			);
			hasError = true;
		}
	}

	if (hasError) {
		return null;
	}

	const props = {
		...DEFAULT_WIDGET_PROPS,
		...userProps,
		projectId: effectiveProjectId,
		referralCode: finalCode,
		referralLink: finalLink,
	} as ReferralWidgetProps & { projectId: string; referralCode: string; referralLink: string };

	// Initialize ReferralAPI here!
	initializeReferralAPI({
		projectId: effectiveProjectId,
		mode: context?.mode === "local" ? "self-hosted" : "cloud",
		enabled: true,
		onEvent: props.onEvent,
	});

	const styles = buildStyles(props.theme);
	const widgetState = useReferralWidget(props as ReferralWidgetProps & { projectId: string; referralCode: string; referralLink: string; });

	useEffect(() => {
		props.onMount?.(props.projectId);
	}, [props.projectId]);

	if (props.renderTrigger) {
		return (
			<>
				{props.customCSS && <style>{props.customCSS}</style>}
				{props.renderTrigger({
					open: widgetState.open,
					isOpen: widgetState.isOpen,
					projectId: props.projectId,
				})}
				{widgetState.isOpen && (
					<ReferralPopup
						isOpen={widgetState.isOpen}
						onClose={widgetState.close}
						backdropStyle={styles.backdrop}
						popupStyle={styles.popup}
						closeOnBackdropClick={props.closeOnBackdropClick}
					>
						{props.renderCard ? (
							props.renderCard({
								code: props.referralCode,
								link: props.referralLink,
								projectId: props.projectId,
								onCopyLink: widgetState.copyLink,
								onShare: widgetState.share,
							})
						) : (
							<ReferralCard
								{...props}
								styles={styles}
								linkCopied={widgetState.linkCopied}
								onCopyLink={widgetState.copyLink}
								onShare={widgetState.share}
							/>
						)}
					</ReferralPopup>
				)}
			</>
		);
	}

	return (
		<>
			{props.customCSS && <style>{props.customCSS}</style>}
			<ReferralButton
				position={props.buttonPosition!}
				onClick={widgetState.open}
				label={props.buttonLabel}
				icon={props.buttonIcon}
				mode={props.buttonMode}
				style={props.buttonStyle}
				themeStyles={styles}
			/>

			<ReferralPopup
				isOpen={widgetState.isOpen}
				onClose={widgetState.close}
				backdropStyle={styles.backdrop}
				popupStyle={styles.popup}
				closeOnBackdropClick={props.closeOnBackdropClick}
			>
				{props.renderCard ? (
					props.renderCard({
						code: props.referralCode,
						link: props.referralLink,
						projectId: props.projectId,
						onCopyLink: widgetState.copyLink,
						onShare: widgetState.share,
					})
				) : (
					<ReferralCard
						{...props}
						styles={styles}
						linkCopied={widgetState.linkCopied}
						onCopyLink={widgetState.copyLink}
						onShare={widgetState.share}
					/>
				)}
			</ReferralPopup>
		</>
	);
};
