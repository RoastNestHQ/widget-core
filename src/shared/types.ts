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



export interface RoastnestContextType {
    mode?: "self-hosted" | "cloud";
    userData?: User;
    projectId?: string;
    setUser: (user: User) => void;
}

// Widget Provider

export interface BaseRoastnestProviderProps {
    children: ReactNode;
}

export interface LocalRoastnestProviderProps extends BaseRoastnestProviderProps {
    mode: "self-hosted";
    projectId?: string;
}

export interface RemoteRoastnestProviderProps extends BaseRoastnestProviderProps {
    projectId: string;
    mode?: "cloud";
}

export type RoastnestProviderProps = LocalRoastnestProviderProps | RemoteRoastnestProviderProps;
export type RoastnestWidgetProviderProps = RoastnestProviderProps;
