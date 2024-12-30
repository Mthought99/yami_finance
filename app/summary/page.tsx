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

export default function PersonalDetailsPage(){
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
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
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
                                                    className="flex h-[28px] w-[28px] items-center justify-center rounded-[14px] bg-pink-900 text-center !text-[14.5px] !font-bold tracking-[0.18px] !text-gray-50_01"
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
                                        <div className="flex justify-start gap-[50px] self-stretch">
                                            <Heading size="heading2xl" as="h3" className="tracking-[0.36px] !text-pink-900_01">
                                                Personal Details
                                            </Heading>
                                        </div>
                                        <div className="flex justify-center gap-[50px] self-stretch">
                                            <Heading as="h5" className="tracking-[1.00px]">
                                                Title
                                            </Heading>
                                            <RadioGroup name="title" className="flex flex-1">
                                                <Radio 
                                                    value="Mr"
                                                    label="Mr"
                                                    className="w-[6%] gap-3 text-xl font-semibold tracking-[1.00px] text-gray-700_03"
                                                />
                                                <Radio 
                                                    value="Mrs"
                                                    label="Mrs"
                                                    className="ml-[30px] w-[6%] gap-3 text-xl font-semibold tracking-[1.00px] text-gray-700_03"
                                                />
                                                <Radio 
                                                    value="Miss"
                                                    label="Miss"
                                                    className="ml-8 w-[6%] gap-3 text-xl font-semibold tracking-[1.00px] text-gray-700_03"
                                                />
                                            </RadioGroup>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        First Name
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="firstName"
                                                        placeholder={`Michael`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Middle Name
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="firstName"
                                                        placeholder={`Oluwaseyi`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Last Name
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="lastName"
                                                        placeholder={`Shodiya`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Date of Birth
                                                    </Heading>
                                                    <SelectBox
                                                        color="gray_200"
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
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Gender
                                                    </Heading>
                                                    <SelectBox
                                                        color="gray_200"
                                                        shape="round"
                                                        readOnly
                                                        indicator={
                                                            <Img
                                                                src="dropdown Icon.svg"
                                                                width={15}
                                                                height={15}
                                                                alt="Gridicons"
                                                                className="h-[15px] w-[15px]"
                                                            />
                                                        }
                                                        name="gender"
                                                        placeholder={`Select Option`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Marital Status
                                                    </Heading>
                                                    <SelectBox
                                                        color="gray_200"
                                                        shape="round"
                                                        readOnly
                                                        indicator={
                                                            <Img
                                                                src="dropdown Icon.svg"
                                                                width={15}
                                                                height={15}
                                                                alt="Gridicons"
                                                                className="h-[15px] w-[15px]"
                                                            />
                                                        }
                                                        name="maritalStatus"
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
                                                        Home Phone
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="phone"
                                                        placeholder={`+44 (345) 567-890`}
                                                        readOnly
                                                        prefix={
                                                            <Img
                                                                src="United-kingdom_Icon.png"
                                                                width={22}
                                                                height={22}
                                                                alt="united_kingdom_flag_Icon"
                                                            />
                                                        }
                                                        className="gap-3 self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:pr-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Mobile Phone
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="phone"
                                                        placeholder={`+44 (345) 567-890`}
                                                        readOnly
                                                        prefix={
                                                            <Img
                                                                src="United-kingdom_Icon.png"
                                                                width={22}
                                                                height={22}
                                                                alt="united_kingdom_flag_Icon"
                                                            />
                                                        }
                                                        className="gap-3 self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:pr-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col mb-5">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Email Address
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="email"
                                                        placeholder={`shodiya508@gmail.com`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start gap-[50px] self-stretch">
                                            <Heading size="heading2xl" as="h3" className="tracking-[0.36px] !text-pink-900_01">
                                                Loan Details
                                            </Heading>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Loan Amount
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="firstName"
                                                        placeholder={`Enter Amount`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                        <Heading as="h5" className="tracking-[1.00px]">
                                                            Date of Birth
                                                        </Heading>
                                                        <SelectBox
                                                            color="gray_200"
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
                                                            readOnly
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
                                                        Next Pay Date
                                                    </Heading>
                                                    <SelectBox
                                                            shape="round"
                                                            color="gray_200"
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
                                                        Following Pay Date
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
                                                        readOnly
                                                        indicator={
                                                            <Img
                                                                src="Date.svg"
                                                                width={15}
                                                                height={15}
                                                                alt="Gridicons"
                                                                className="h-[15px] w-[15px]"
                                                            />
                                                        }
                                                        name="dateOfBirth"
                                                        placeholder={`28-03-1990`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                        onClick
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col mb-5">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Reason for Loan
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="email"
                                                        placeholder={`Input reason for loan`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start gap-[50px] self-stretch">
                                            <Heading size="heading2xl" as="h3" className="tracking-[0.36px] !text-pink-900_01">
                                                Employment Details
                                            </Heading>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        First Name
                                                    </Heading>
                                                    <Input
                                                        color="gray_200"
                                                        shape="round"
                                                        name="firstName"
                                                        placeholder={`Michael`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Monthly Income
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
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
                                                        Employers Name
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Employers Name`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Industry
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Industry`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Work Phone
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="phone"
                                                        color="gray_200"
                                                        placeholder={`+44 (345) 567-890`}
                                                        readOnly
                                                        prefix={
                                                            <Img
                                                                src="United-kingdom_Icon.png"
                                                                width={22}
                                                                height={22}
                                                                alt="united_kingdom_flag_Icon"
                                                            />
                                                        }
                                                        className="gap-3 self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:pr-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Job Title
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Job Title`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Income Frequency
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
                                                        indicator={
                                                            <Img
                                                                src="dropdown Icon.svg"
                                                                width={20}
                                                                height={20}
                                                                alt="Gridicons"
                                                                className="h-[15px] w-[15px]"
                                                            />
                                                        }
                                                        name="IncomeFrequency"
                                                        placeholder={`Select Option`}
                                                        options={dropDownOptions}
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm-[px-5]"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5 mb-5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Secondary Income
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
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
                                        <div className="flex justify-start gap-[50px] self-stretch">
                                            <Heading size="heading2xl" as="h3" className="tracking-[0.36px] !text-pink-900_01">
                                                Bank Details
                                            </Heading>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Bank Name
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
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
                                                        color="gray_200"
                                                        placeholder={`Input Sort Code`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
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
                                                        color="gray_200"
                                                        placeholder={`Enter Account Number`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Card Type
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Card Type`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col mb-5">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Paid by
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Name`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-start gap-[50px] self-stretch">
                                            <Heading size="heading2xl" as="h3" className="tracking-[0.36px] !text-pink-900_01">
                                                Residential Details
                                            </Heading>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Home Status
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Home Status`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Address Line 1
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Address Line 1`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Address Line 2
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Address Line 2`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Town
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
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
                                                        Country
                                                    </Heading>
                                                    <SelectBox
                                                        shape="round"
                                                        color="gray_200"
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
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Town
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Postcode`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-[50px] self-stretch md:flex-col">
                                            <div className="flex w-full flex-row gap-[26px] self-center">
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    <Heading as="h5" className="tracking-[1.00px]">
                                                        Months at Address
                                                    </Heading>
                                                    <Input
                                                        shape="round"
                                                        name="lastName"
                                                        color="gray_200"
                                                        placeholder={`Enter Month at Address`} 
                                                        className="self-stretch border border-solid border-gray-500 font-semibold tracking-[1.00px] sm:px-5"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-3.5">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[18px]">
                                            <a href="../homePage">
                                                <Button
                                                    shape="round"
                                                    className="min-w-[132px] !rounded-[12px] border border-solid border-pink-900 bg-white-a700 font-semibold tracking-[1.31px] md:text-2xl sm:px-5 sm:text-[22px]"
                                                >
                                                    Cancel
                                                </Button>
                                            </a>
                                            <a href="../loanDetails">
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