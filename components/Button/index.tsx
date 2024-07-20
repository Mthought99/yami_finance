import React from "react";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]",
}as const;
const variants = {
    fill: {
        gray_50: "bg-gray-50 text-pink-900",
        white_A700: "bg-white-a700 text-pink-900",
        green_50: "bg-green-50 text-green-700",
        green_A100: "bg-green-a100 text-green-800",
        purple_50: "bg-purple-50 text-pink-900",
        gray_200: "bg-gray-200 text-gray-700_03",
        pink_900: "bg-pink-900 text-white-a700",
        pink_900_01: "bg-pink-900_01 text-white-a700",
        amber_300: "bg-amber-300 text-pink-900"
    },
    outline: {
        pink_900: "border-pink-900 border-[1.54px] border-solid text-pink-900",
    }   
} as const;
const sizes = {
    lg: "h-[46px] px-[22px] text-[25px]",
    sm: "h-[34px] px-[18px] text-[15px]",
    xl: "h-[45px] px-[18px] text-[15px]",
    "3xl": "h-[54px] px-[18px] text-xl",
    "5xl": "h-[58px] px-5 text-xl",
    xs: "h-[30px] px-2.5 text-[13px]",
    "2xl": "h-[46px] px-[34px] text-xs",
    md: "h-[38px] px-7 text-[17px]",
    "4xl": "h-[54px] px-[34px] text-[26px]",
}as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "onClick"
> &
    Partial<{
        className: string;
        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;
        onClick: () => void;
        shape: keyof typeof shapes;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        color: string;
    }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className= "",
    leftIcon,
    rightIcon,
    shape,
    variant= "fill",
    size = "4xl",
    color = "amber_300",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape])  || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
            {...restProps}
            >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

export {Button};
