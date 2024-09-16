// useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const anchor = e.target;
            if (anchor.tagName === 'A' && anchor.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        };

        document.addEventListener('click', handleSmoothScroll);

        return () => {
            document.removeEventListener('click', handleSmoothScroll);
        };
    }, []);
};

export default useSmoothScroll;
