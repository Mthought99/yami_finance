import { Img, Heading } from "../index"
import React from "react";

interface Props {
    className?: string;
    loanPaymentText?: string;
}

export default function LoanPaymentInfo({
    loanPaymentText = "How do I make extra payments to my loan in Smart Money?",
    ...props
}: Props) {
    return (
        <div className="border-b-2 border-gray-500 !py-0">
            <div {...props} className={`${props.className} flex md:flex-col justify-between items-center flex-1`}>
                <Heading as="h5" className="!font-bold tracking-[0.61px] !text-gray-800_02">
                    {loanPaymentText}
                </Heading>
                <div className="flex flex-col items-end justify-center px-2.5 py-3.5">
                    <Img src="dropdown.svg" width={16} height={8} alt="Image" className="h-[8px]" />
                </div>
            </div>
        </div>
    );
}