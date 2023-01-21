import { useEffect } from "react";

const useOutSide = (ref, cb) => {
    useEffect(() => {
        document.addEventListener("mousedown", cb);

        return () => {
            document.removeEventListener("mousedown", cb);
        };
    }, [ref, cb]);
};

export default useOutSide;
