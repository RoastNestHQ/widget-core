import React, { useContext } from "react";
import WidgetTriggerButton from "./components/WidgetTriggerButton";
import WidgetOverlay from "./components/WidgetOverlay";
import FeedbackPopper from "./components/FeedbackPopper";
import Notification from "../../shared/components/Notification";
import { RoastnestContext } from "../../core/context";
import { RoastnestCustomizeProps, FormSubmitHandler } from "../../shared/types";
import { FeedbackProvider } from "./FeedbackProvider";

export interface FeedbackWidgetProps {
    customize?: RoastnestCustomizeProps;
    hideIsland?: boolean;
    onFormSubmit?: FormSubmitHandler;
}

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ customize, hideIsland, onFormSubmit }) => {
    const parentContext = useContext(RoastnestContext);
    
    if (!parentContext) {
        throw new Error("FeedbackWidget must be used within a RoastnestProvider");
    }

    return (
        <FeedbackProvider customize={customize} hideIsland={hideIsland} onFormSubmit={onFormSubmit}>
            <WidgetTriggerButton />
            <WidgetOverlay />
            <FeedbackPopper />
            <Notification />
        </FeedbackProvider>
    );
};

export default FeedbackWidget;
