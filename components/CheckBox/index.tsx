"use client";
import React from "react";

const variants = {
    primary: 
        "border-blue_gray-100_01 border border-solid bg-white-a700 checked:border_gray-001_01 checked:border checked:border checked:border-solid checked:bg-white-a700 checked:focus:bg-black-900_1e checked:focus:border-blue_gray-100_01",
} as const;
const sizes = {
    xs: "h-[14px] w-[14px] rounded-sm",
} as const;

type CheckboxProps = Omit < 
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "prefix" | "type" | "onChange"
> &
    Partial<{
        className: string;
        name: string;
        label: string;
        id: string;
        onChange: Function;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        onClick: () => void;
    }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            className = "",
            name = "",
            children,
            label = "",
            id = "checkbox_id",
            onChange,
            variant = "primary",
            size = "xs",
            ...restProps
        },
        ref,
    ) => {
        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            if (onChange) onChange(e?.target?.checked);
        };
        return(
            <>
                <div className={className + " flex item-center gap-[5px] cursor-pointer"}>
                    <input
                        className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                        ref={ref}
                        type="checkbox"
                        name={name}
                        onChange={handleChange}
                        id={id}
                        {...restProps}
                    />
                    {!!label && <label htmlFor="{id}">{label}</label>}
                </div>
                {children}
            </>
        );
    },
);
export { CheckBox };