import React from "react";
import WidgetPopper from "../WidgetPopper";
import FeedbackForm from "../FeedbackForm";
import useRoastnestContext from "../../../../core/hooks/useRoastnestContext";

const FeedbackPopper: React.FC = () => {
    const { active, selected } = useRoastnestContext();

    if (!active || !selected.isSelected) return null;

    return (
        <WidgetPopper>
            <FeedbackForm />
        </WidgetPopper>
    );
};

export default FeedbackPopper;
