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

export default function thriftDetailPage(){
    return (
        <div className="w-full">
            <div>
                <div className="flex flex-col gap-[76px] bg-gray-200_02 md:gap-[57px] sm:gap-[38px]">
                    <Header className="ml-[68px] mr-[116px] mt-[46px] md:mx:0 md:flex-col"/>
                    <div>
                        <div className="flex flex-col items-center bg-white-a700 py-9 sm:py-5">
                            <div className="container-xs mt-[22px] flex flex-col items-center px-14 md:p-5 md:px-5">
                                <Heading size="heading9xl" as="h1" className="!text-[49-.15px] tracking-[0.36px] !text-pink-900_01">
                                    Thrift Form
                                </Heading>
                                <div className="mr-2 mt-24 flex w-[96%] justify-center md:mr-0 md:w-full">
                                    <div className="flex w-full flex-col items-center gap-9">
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Amount
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="firstName"
                                                        placeholder={`Enter Amount`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                        <Heading as="h5" className="tracking-[1.00px]">
                                                            Start Birth
                                                        </Heading>
                                                        <SelectBox
                                                            shape="round"
                                                            indicator={
                                                                <Img
                                                                    src="Date.svg"
                                                                    width={20}
                                                                    height={20}
                                                                    alt="Gridicons"
                                                                    className="h-[15px] w-[15px]"
                                                                />
                                                            }
                                                            name="dateOfBirth"
                                                            placeholder={`28-03-1990`}
                                                            options={dropDownOptions}
                                                            className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        End Date
                                                    </Heading>
                                                    <SelectBox
                                                            shape="round"
                                                            indicator={
                                                                <Img
                                                                    src="Date.svg"
                                                                    width={20}
                                                                    height={20}
                                                                    alt="Gridicons"
                                                                    className="h-[15px] w-[15px]"
                                                                />
                                                            }
                                                            name="dateOfBirth"
                                                            placeholder={`28-03-1990`}
                                                            options={dropDownOptions}
                                                            className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                        />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Select Duration
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
                                                        placeholder={`Select Option`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Select no of contributors
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
                                                        placeholder={`Select Option`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[18px]">
                                            <a href="../personalDetails">
                                                <Button
                                                    shape="round"
                                                    className="min-w-[132px] !rounded-[12px] font-semibold tracking-[1.31px] md:text-2xl sm:px-5 sm:text-[22px]"
                                                >
                                                    Prev
                                                </Button>
                                            </a>
                                            <a href="../bankDetails">
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