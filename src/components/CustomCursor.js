import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

    const dotX = useSpring(0, { stiffness: 1000, damping: 100 });
    const dotY = useSpring(0, { stiffness: 1000, damping: 100 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
            dotX.set(e.clientX - 2);
            dotY.set(e.clientY - 2);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('glass-card') ||
                target.closest('.glass-card');

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, dotX, dotY]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0)',
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-[9999]"
                style={{
                    x: dotX,
                    y: dotY,
                }}
            />
        </>
    );
};

export default CustomCursor;
