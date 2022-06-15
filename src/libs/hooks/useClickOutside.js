import { useEffect, useRef } from 'react';

export const useClickOutside = (callback) => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            callback();
        }
    };

    return {
        wrapperRef,
    };
};