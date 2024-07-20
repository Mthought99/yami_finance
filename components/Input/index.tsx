"use client";
import { Square } from "lucide-react";
import React from "react";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]" 
} as const;

const variants = {
    fill: {
        gray_100: "bg-gray-100 text-gray-700_03",
        gray_200: "bg-gray-200 text-gray-400_02",
        white_A700: "bg-white-a700 text-blue_gray-100_02",
    },
} as const;

const sizes = {
    md: "h-[36px] pl-3.5 pr-[34px] text-xs",
    xs: "h-[16px] pr-[34px] text-xs",
    sm: "h-[22px] pr-[34px] text-xl",
    lg: "h-[40px] pl-4 pr-[34px] text-[15px]",
    xl: "h-[42px] pl-3 pr-[34px] text-xs",
    "2xl": "h-[54px] pl-[30px] pr-[34px] text-xl" 
}as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
    Partial<{
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        shape: keyof typeof shapes;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        color: string;
    }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "2xl",
            color = "white_A700",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label 
                className={`${className} flex items-center justify-center cursor-text ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}    
            </label>
        );
    },
);

export { Input };