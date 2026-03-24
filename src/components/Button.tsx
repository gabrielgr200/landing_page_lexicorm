"use client";
import { HTMLAttributes, useRef } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium relative overflow-hidden transition-colors duration-300",
    {
        variants: {
            variant: {
                primary: "bg-[#035bad] text-white border-[#3091e1]",
                secondary: "bg-transparent text-white border-[#4682b4]",
            },
            size: {
                sm: "h-10",
            },
        },
    },
);

type Direction =
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

function getDirection(
    e: React.MouseEvent<HTMLButtonElement>,
    el: HTMLButtonElement,
): Direction {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);

    if (angle >= -22.5 && angle < 22.5) return "right";
    if (angle >= 22.5 && angle < 67.5) return "bottom-right";
    if (angle >= 67.5 && angle < 112.5) return "bottom";
    if (angle >= 112.5 && angle < 157.5) return "bottom-left";
    if (angle >= 157.5 || angle < -157.5) return "left";
    if (angle >= -157.5 && angle < -112.5) return "top-left";
    if (angle >= -112.5 && angle < -67.5) return "top";
    return "top-right";
}

const originMap: Record<Direction, { initial: string; exit: string }> = {
    top: { initial: "translate(0,-100%)", exit: "translate(0,-100%)" },
    bottom: { initial: "translate(0,100%)", exit: "translate(0,100%)" },
    left: { initial: "translate(-100%,0)", exit: "translate(-100%,0)" },
    right: { initial: "translate(100%,0)", exit: "translate(100%,0)" },
    "top-left": {
        initial: "translate(-100%,-100%)",
        exit: "translate(-100%,-100%)",
    },
    "top-right": {
        initial: "translate(100%,-100%)",
        exit: "translate(100%,-100%)",
    },
    "bottom-left": {
        initial: "translate(-100%,100%)",
        exit: "translate(-100%,100%)",
    },
    "bottom-right": {
        initial: "translate(100%,100%)",
        exit: "translate(100%,100%)",
    },
};

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & HTMLAttributes<HTMLButtonElement>,
) {
    const { variant, className, size, children, ...otherProps } = props;
    const fillRef = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const dir = getDirection(e, e.currentTarget);
        if (!fillRef.current) return;
        fillRef.current.style.transition = "none";
        fillRef.current.style.transform = originMap[dir].initial;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (!fillRef.current) return;
                fillRef.current.style.transition =
                    "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
                fillRef.current.style.transform = "translate(0,0)";
            });
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const dir = getDirection(e, e.currentTarget);
        if (!fillRef.current) return;
        fillRef.current.style.transition =
            "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
        fillRef.current.style.transform = originMap[dir].exit;
    };

    return (
        <button
            className={classes({ variant, className, size })}
            style={
                variant === "secondary"
                    ? {
                          boxShadow: "0 0 8px #035bad, 0 0 16px #035bad",
                      }
                    : undefined
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...otherProps}
        >
            <span
                ref={fillRef}
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "#035bad",
                    transform: "translate(0,-100%)",
                    borderRadius: "inherit",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
        </button>
    );
}
