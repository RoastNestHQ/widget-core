import { createContext } from "react";
import { Size, SelectedElement, ScreenshotBlobs, RoastnestCustomizeProps, FormSubmitHandler } from "../../shared/types";

export interface FeedbackContextType {
    active: boolean;
    windowSize: Size;
    IslandHidden: boolean;
    selected: SelectedElement;
    screenshotBlobs: ScreenshotBlobs;
    customize?: RoastnestCustomizeProps;
    onFormSubmit?: FormSubmitHandler;
    toggleActive: () => void;
    unSelectElement: () => void;
    setIslandVisiblity: (visible: boolean) => void;
}

export const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);
