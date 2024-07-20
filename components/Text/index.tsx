import React from "react";

const sizes = {
    texts: "text-[13px] font-normal not-italic",
    textmd: "text-sm font-normal not-intalic",
    text2xl: "text-[17px] font-normal not-italic lg:text:sm",
    text3xl: "text-lg font-normal not-intalic lg:text-[15px]",
    text7xl: "text-[29px] font-normal not-italic lg:text-2xl md:text-[27px] sm:text-[25px]",
};

export type TextProps = Partial<{
    className : string;
    as: any;
    size: keyof typeof sizes; 
}> & 
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "text3xl",
    ...restProps
}) => {
    const Component = as || "p";

    return (
        <Component className={`text-gray-600_04 font-poppins ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };