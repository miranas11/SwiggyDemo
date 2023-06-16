import { useState, useEffect } from "react";

const useOnline = () => {
    const [isOnline, setIsOnlne] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnlne(true);

        const handleOffline = () => setIsOnlne(false);

        window.addEventListener("online", () => handleOnline);
        window.addEventListener("offline", () => handleOffline);
    }, []);

    return isOnline;
};

export default useOnline;
//create a unmount else new event listerners wil be created when you open some other component and then return back to this component
// return () => {
//     window.removeEventListener("onine", handleOnline);
//     window.removeEventListener("offline", handleOffline);
// };
