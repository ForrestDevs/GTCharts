// ForrestDevs
// GT_CHARTS_V1.0
// FEB 14 2024

import { useEffect, useState } from 'react';

const useOnWindowResize = (
    handler: { (): void },
    initialWindowSize?: number,
) => {
    const [windowSize, setWindowSize] = useState<undefined | number>(
        initialWindowSize,
    );
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
            handler();
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [handler, windowSize]);
};

export default useOnWindowResize;