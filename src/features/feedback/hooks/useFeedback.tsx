import { avoidElementClassName } from "../../../utils/classNames";
import useFeedbackContext from "./useFeedbackContext";

export function useFeedback() {
    const { active, toggleActive, setIslandVisiblity } = useFeedbackContext();

    return {
        isWidgetActive: active,
        toggleWidget: toggleActive,
        avoidElementClassName,
        setIslandVisiblity,
    };
}
