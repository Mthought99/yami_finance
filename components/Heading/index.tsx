import React from "react";

const sizes = {
    headingxs: "text-[10px] font-bold",
    textxs: "text-xs font-medium",
    textlg: "text-[15px] font-medium",
    textxl: "text-base font-medium lg:text-[13px]",
    text4xl: "text-xl font-medium lg:text-[17px]",
    text5xl: "text-2xl font-medium lg:text-xl md:text-[22px]",
    text6xl: "text-[25px] font-medium lg:text-[21px] md:text-[22px] sm:text-[21px]",
    text8xl: "text-[31px] font-medium lg:text-[26px] md:text-[29px] sm:text-[27px]",
    text9xl: "text-[34px] font-medium lg:text-[28px] md:text-[32px] sm:text-3xl",
    headings: "text-sm font-semibold",
    headingmd: "text-[19px] font-semibold lg:text-base",
    headinglg: "text-xl font-semibold lg:text-[17px]",
    headingxl: "text-[22px] font-semibold lg:text-lg",
    heading2xl: "text-3xl font-bold lg:text-[25px] md:text-[28px] sm:text-[26px]",
    heading3xl: "text-[33px] font-bold lg:text-[28px] md:text-[31px] sm:text-[29px]",
    heading4xl: "text-[35px] font-bold lg:text-[29px] md:text-[33px] sm:text-[31px]",
    heading5xl: "text-4xl font-semibold lg:text-3xl md:text-[34px] sm:text-[32px]",
    heading6xl: "text-[40px] font-semibold lg:text-[34px] md:text-[38px] sm:text-4xl",
    heading7xl: "text-[45px] font-semibold lg:text-[38px] md:text-[41px] sm:text-[35px]",
    heading8xl: "text-[47px] font-semibold lg:text-[39px] md:text-[43px] sm:text-[39px]",
    heading9xl: "text-[49px] font-bold lg:text-[41px] md:text-[45px] sm:text-[37px]",
    heading10xl: "text-[50px] font-semibold lg:text-[42px] md:text-[46px] sm:text-[40px]",
    heading11xl: "text-[66px] font-bold lg:text-[66px] md:text-5xl",
    heading12xl: "text-[95px] font-bold lg:text-[95px] md:text-5xl",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "headinglg",
    as,
    ...restProps
})  => {
    const Component = as || "h6";

    return (
        <Component className={`text-gray-700_03 font-trap ${className} ${sizes[size]}`} {...restProps} >
            {children}
        </Component>
    );
};

export { Heading };