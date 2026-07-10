import { ReactNode } from "react";

export interface Position {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface SelectedElement {
    isSelected: boolean;
    position: Position;
    size: Size;
}

export type ToastPlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export type ScreenshotType = "full-screenshot" | "selected-screenshot";

export type ScreenshotBlobs = Array<{
    blob: Blob;
    type: ScreenshotType;
}>;

export interface User {
    id?: string;
    name?: string;
    email: string;
    customData?: Record<string, any>;
}

export interface FormDataProps {
    email?: string;
    message: string;
    screenshotBlobs: ScreenshotBlobs;
}

export interface NotificationMessage {
    message: string; // max length 22 characters
    type: "info" | "hint" | "offer" | "reward" | "social" | "urgent";
}

export type IslandPlacement =
    | "left-center"
    | "left-bottom"
    | "right-center"
    | "right-bottom"
    | "bottom-left"
    | "bottom-right";

export type IslandMode = "default" | "icon";

export type FormSubmitHandler = (data: FormDataProps) => Promise<boolean>;

export interface RoastnestCustomizeProps {
    form?: {
        className?: string;
        errorMessage?: string;
        successMessage?: string;
        submitButton?: { label?: string; className?: string };
        cancelButton?: { label?: string; className?: string };
        messageInput?: { placeholder?: string; className?: string };
        output?: {
            excludeFullPageScreenshot?: boolean;
            excludeSelectedElementScreenshot?: boolean;
        };
    };
    island?: {
        mode?: IslandMode;
        placement?: IslandPlacement;
        className?: string;
        label?: string;
        switchButton?: {
            className?: string;
            thumb?: {
                className?: string;
            };
        };
    };
    notifications?: {
        enable?: boolean;
        repeatDelay?: number;
        displayDuration?: number;
        repeatAllowed?: boolean;
        allowDismissal?: boolean;
        allowParmanentDismissal?: boolean;
        paramanentDismissalExpiryDays?: number;
        messages?: NotificationMessage[];
    };
}

export interface RoastnestContextType {
    mode?: "local" | "remote";
    userData?: User;
    projectId?: string;
    setUser: (user: User) => void;
}

// Widget Provider

export interface BaseRoastnestProviderProps {
    children: ReactNode;
}

export interface LocalRoastnestProviderProps extends BaseRoastnestProviderProps {
    mode: "local";
    projectId?: string;
}

export interface RemoteRoastnestProviderProps extends BaseRoastnestProviderProps {
    projectId: string;
    mode?: "remote";
}

export type RoastnestProviderProps = LocalRoastnestProviderProps | RemoteRoastnestProviderProps;
export type RoastnestWidgetProviderProps = RoastnestProviderProps;
