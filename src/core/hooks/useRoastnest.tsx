import { CLASS_NAMES } from '../../utils/classNames';
import useRoastnestContext from "./useRoastnestContext";
const useRoastnest = () => {
    const { setUser, mode, projectId, userData } = useRoastnestContext();

    return {
        setUser,
        mode,
        projectId,
        userData,
        avoidElementClassName: CLASS_NAMES.global.avoidElement,
    };
};

export default useRoastnest;
