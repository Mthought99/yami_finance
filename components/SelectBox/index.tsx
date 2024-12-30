"use client"
import React from "react";
import Select, { Props } from "react-select";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]",
}as const;
const variants = {
    fill: {
        gray_100: "bg-gray-100 text-gray-700_03",
        gray_200: "bg-gray-200 text-gray-400_02",
        white_A700: "bg-white-a700 text-blue_gray-100_02",
    },
}as const;
const sizes = {
    sm: "h-[42px] pl-3 pr-[34px] text-xs",
    xs: "h-[26px] pr-[34px] text-lg",
    md: "h-[56px] pl-[30px] pr-[34px] text-xl",
} as const;

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
    Partial<{
        className: string;
        options: selectOptionType[];
        isSearchable: boolean;
        isMulti: boolean;
        onChange: (option: any) => void;
        value: string;
        indicator: React.ReactElement;
        getOptionLabel: (e: any) => string;
        [x: string]: any;
        shape: keyof typeof shapes;
        variant: keyof typeof variants;
        size: keyof typeof sizes;
        color: keyof (typeof variants)[keyof typeof variants]
    }>;

const SelectBox = React.forwardRef<any, SelectProps>(
    (
        {
           children,
           className = "",
           options = [],
           isSearchable = false,
           isMulti = false,
           indicator,
           shape,
           variant = "fill",
           size = "md",
           color = "white_A700",
           ...restProps
        },
        ref,
    ) => {
        const [menuPortalTarget, setMenuPortalTarget] = React.useState<HTMLElement | null>(null);

        React.useEffect(() => {
            setMenuPortalTarget(document.body)
        }, []);

        return (
            <>
                <Select 
                    ref={ref}
                    options={options}
                    className={`${className} flex ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "0 !important",
                            minHeight: "auto",
                            width: "100%",
                            "$:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            color: "#000",
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({...base, zIndex: 999999 }),
                        menu: ({ width, ...css}) => ({ ...css }),
                    }}
                    menuPortalTarget={menuPortalTarget}
                    closeMenuOnScroll={(event: any) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    },
);

export { SelectBox };
