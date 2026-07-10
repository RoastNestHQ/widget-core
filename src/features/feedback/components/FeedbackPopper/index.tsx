import React from "react";
import WidgetPopper from "../WidgetPopper";
import FeedbackForm from "../FeedbackForm";
import useFeedbackContext from "../../hooks/useFeedbackContext";

const FeedbackPopper: React.FC = () => {
    const { active, selected } = useFeedbackContext();

    if (!active || !selected.isSelected) return null;

    return (
        <WidgetPopper>
            <FeedbackForm />
        </WidgetPopper>
    );
};

export default FeedbackPopper;
