'use client';

import React from "react";
import style from "@/app/components/styles/FloatingMenu.module.css";

interface FloatingMenuProps {
    onActiveIndexChange?: (index: number, label: string) => void;
}

export default function FloatingMenu({ onActiveIndexChange }: FloatingMenuProps) {
    const [atTop, setAtTop] = React.useState(true);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [indicatorStyle, setIndicatorStyle] = React.useState({});
    const SCROLL_THRESHOLD = 80;

    const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
    const buttons = ["Journey", "About", "Creations", "Thoughts", "Connect"];

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setAtTop(scrollPosition < SCROLL_THRESHOLD);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update indicator position when activeIndex or window resizes
    React.useEffect(() => {
        const updateIndicator = () => {
            const btn = buttonRefs.current[activeIndex];
            if (btn) {
                const rect = btn.getBoundingClientRect();
                const parentRect = btn.parentElement?.getBoundingClientRect();
                setIndicatorStyle({
                    left: rect.left - (parentRect?.left || 0),
                    width: rect.width,
                    height: rect.height,
                    top: rect.top - (parentRect?.top || 0),
                });
            }
        };
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeIndex]);

    const handleButtonClick = (idx: number) => {
        setActiveIndex(idx);
        onActiveIndexChange?.(idx, buttons[idx]);
    };

    return (
        <div className={style.container}>
            <div
                className={
                    `${atTop ? `${style.floatingMenu} ${style.atTop}` : style.floatingMenu}`
                }
                style={{ position: "relative" }}
            >
                <div
                    className={style.indicator}
                    style={{
                        position: "absolute",
                        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                        pointerEvents: "none",
                        zIndex: 0,
                        backgroundColor: "gray",
                        opacity: 0.5,
                        padding: "0.5rem",
                        borderRadius: "100px",
                        // Center the indicator over the button
                        left: (indicatorStyle as any).left !== undefined && (indicatorStyle as any).width !== undefined
                            ? ((indicatorStyle as any).left + (indicatorStyle as any).width / 2)
                            : undefined,
                        top: (indicatorStyle as any).top !== undefined && (indicatorStyle as any).height !== undefined
                            ? ((indicatorStyle as any).top + (indicatorStyle as any).height / 2)
                            : undefined,
                        transform: "translate(-50%, -50%)",
                        width: (indicatorStyle as any).width,
                        height: (indicatorStyle as any).height,
                    }}
                />
                {buttons.map((label, idx) => (
                    <button
                        key={label}
                        ref={el => { buttonRefs.current[idx] = el; }}
                        className={`${style.menuButton} outfit-font`}  // TODO - Add Variable
                        style={{ position: "relative", zIndex: 1 }}
                        onClick={() => handleButtonClick(idx)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}