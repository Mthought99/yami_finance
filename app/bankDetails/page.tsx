"use client";
import { Button, DatePicker, Heading, Img, Text, Input, RadioGroup, Radio, SelectBox } from "../../components/index";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function bankDetailsPage(){
    return (
        <div className="w-full">
            <div>
                <div className="flex flex-col gap-[76px] bg-gray-200_02 md:gap-[57px] sm:gap-[38px]">
                    <Header className="ml-[68px] mr-[116px] mt-[46px] md:mx:0 md:flex-col"/>
                    <div>
                        <div className="flex flex-col items-center bg-white-a700 py-9 sm:py-5">
                            <div className="container-xs mt-[22px] flex flex-col items-center px-14 md:p-5 md:px-5">
                                <Heading size="heading9xl" as="h1" className="!text-[49-.15px] tracking-[0.36px] !text-pink-900_01">
                                    Application Form
                                </Heading>
                                <div className="ml-[116px] mr-[124px] mt-[50px] flex w-[96%] justify-center rounded-[20px] bg-gradient2 p-[22px] md:mx-0 md:w-full sm:p-5">
                                    <div className="mt-4 flex w-[90%] items-start justify-center md:w-full md:flex-col">
                                        <div className="flex flex-1 justify-between gap-5 self-center md:self-stretch sm:flex-col">
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    1
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    <>
                                                        Personal <br />
                                                        Details
                                                    </>
                                                </Heading>
                                            </div>
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    2
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    <>
                                                        Loan <br />
                                                        Details
                                                    </>
                                                </Heading>
                                            </div>
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    3
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    <>
                                                        Employment <br />
                                                        Details
                                                    </>
                                                </Heading>
                                            </div>
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    4
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    <>
                                                        Bank <br />
                                                        Details
                                                    </>
                                                </Heading>
                                            </div>
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-gray-700_03 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    5
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    <>
                                                        Residential <br />
                                                        Details
                                                    </>
                                                </Heading>
                                            </div>
                                            <div className="flex w-[12%] flex-col items-center gap-1.5 sm:w-full">
                                                <Heading
                                                    size="headings"
                                                    as="p"
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-gray-700_03 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
                                                >
                                                    6
                                                </Heading>
                                                <Heading
                                                    size="headingxs"
                                                    as="p"
                                                    className="text-center leading-[13px] tracking-[0.36px]"
                                                >
                                                    Summary{""}
                                                </Heading>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="mr-2 mt-24 flex w-[96%] justify-center md:mr-0 md:w-full">
                                    <div className="flex w-full flex-col items-center gap-9">
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Bank Name
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        indicator={
                                                            <Img
                                                                src="dropdown Icon.svg"
                                                                width={20}
                                                                height={20}
                                                                alt="Gridicons"
                                                                className="h-[15px] w-[15px]"
                                                            />
                                                        }
                                                        name="secondaryIncome"
                                                        placeholder={`Select Bank Name`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Sort Code
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        placeholder={`Input Sort Code`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Account Number
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        placeholder={`Enter Account Number`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Card Type
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        placeholder={`Enter Card Type`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Paid by
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        placeholder={`Enter Name`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[18px]">
                                            <a href="../employmentDetails">
                                                <Button
                                                    shape="round"
                                                    className="min-w-[132px] !rounded-[12px] font-semibold tracking-[1.31px] md:text-2xl sm:px-5 sm:text-[22px]"
                                                >
                                                    Prev
                                                </Button>
                                            </a>
                                            <a href="../residentialDetails">
                                                <Button
                                                    shape="round"
                                                    className="min-w-[132px] !rounded-[12px] font-semibold tracking-[1.31px] md:text-2xl sm:px-5 sm:text-[22px]"
                                                >
                                                    Next
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}