"use client";
import React from "react";

const variants = {
    primary:
        "border-gray-500 border-[0.67px] border-solid bg-black-a700 checked:border-gray-500 checked:border-solid checked:focus:bg-black-900_1e checked:focus:bg-white-a700 checked:focus:border-gray-500",
} as const;
const sizes = {
    xs: "h-[10px] w-[10px] rounded-[5px]",
} as const;

export type RadioProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "prefix" | "type" | "onChange"
> &
    Partial<{
        className: string;
        name: string;
        label: string;
        id: string;
        variant: keyof typeof variants;
        size: keyof typeof sizes
    }>
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ 
        className = "", 
        name= "",
        label= "",
        id= "radio_id",
        variant = "primary",
        size = "xs",
        ...restProps
    },
    ref) => {
        return (
            <label className={className + " flex items-center gap-5px cursor-pointer"}>
                <input
                    className={` ${(size && sizes[size]) || "" } ${(variant && variants[variant]) || ""}`}
                    ref={ref}
                    type="radio"
                    name={name}
                    {...restProps}
                    id={id}
                />
                <span>{label}</span>
            </label>
        );
    },
);

export { Radio };