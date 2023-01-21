import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState("");

    useEffect(() => {
        const unsub = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(unsub);
        };
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
