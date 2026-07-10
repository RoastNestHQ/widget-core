import { useContext } from "react";
import { FeedbackContext } from "../context";

export default function useFeedbackContext() {
    const context = useContext(FeedbackContext);
    if (context === undefined) {
        throw new Error("useFeedbackContext must be used within a FeedbackProvider");
    }
    return context;
}
