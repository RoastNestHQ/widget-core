import { avoidElementClassName, buttonElmentClassName } from "../../../../utils/classNames";
import defaultFeedbackConfig from "../../../../core/config/defaultFeedbackConfig";
import useFeedbackContext from "../../hooks/useFeedbackContext";
import clsx from "clsx";
import "./styles.css";
import SquareSolidPointerIcon from "../../../../shared/icons/SquareSolidPointer";
import SquareDashPointerIcon from "../../../../shared/icons/SquareDashPointer";

function WidgetTriggerButton() {
    const { active, customize, toggleActive, IslandHidden } = useFeedbackContext();

    if (IslandHidden) return null;

    const islandMode = customize?.island?.mode ?? defaultFeedbackConfig?.island?.mode;

    if (islandMode === "icon") {
        return (
            <div
                data-placement={customize?.island?.placement || defaultFeedbackConfig.island?.placement}
                className={clsx(buttonElmentClassName, avoidElementClassName, customize?.island?.className)}
                onClick={toggleActive}
                data-active={active}
                data-mode="icon"
            >
                {active ? <SquareSolidPointerIcon /> : <SquareDashPointerIcon />}
            </div>
        );
    }

    return (
        <div
            data-placement={customize?.island?.placement || defaultFeedbackConfig.island?.placement}
            className={clsx(buttonElmentClassName, avoidElementClassName, customize?.island?.className)}
            onClick={toggleActive}
        >
            <p>{customize?.island?.label || defaultFeedbackConfig.island?.label}</p>
            <div className={clsx("switch-btn", customize?.island?.switchButton?.className)} data-active={active}>
                <span className={clsx("circle", customize?.island?.switchButton?.thumb?.className)} />
            </div>
        </div>
    );
}

export default WidgetTriggerButton;
