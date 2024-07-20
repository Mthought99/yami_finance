"use client";
import { Text, CheckBox, Button, Img, Input, Heading, SelectBox } from "../../components/index";
import metadata from "libphonenumber-js/metadata.full.json";
import Head from "next/head";
import React from "react"

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];
const countryOptions = Object.entries(metadata.countries).map(([code, data]) => {
    const callingCode= `${data[0]}${parseInt(data[10]) || ""}`;

    const display = {
        code,
        callingCode: `+${callingCode}`,
        imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
    };

    return {
        value: callingCode,
        label: <></>
    };
});

export default function SignUp(){	
    return( 
     <div className="flex w-full justify-center bg-gray-200_01 px-14 py-[90px] lg:py-8 md:py-5 sm:py-4">
          <div className="container-sm flex items-center justify-between gap-5 rounded-[20px] bg-white-a700 p-3.5 shadow-sm lg:p-5 md:flex-col md:p-5">
              <div className="flex flex-1 md:self-stretch">
                  <div className="flex w-[90%] flex-col justify-center rounded-[20px] bg-gray-200_03 px-12 py-9 md:w-full md:p-5 md:px-5 sm:p-4">
                      <Img 
                          src="yami_logo.svg"
                          width={295}
                          height={78}
                          alt="Headerlogo"
                          className="h-[78px] w-[298px] object-contain"
                      />
                      <Heading size="heading10xl" as="h1" className="mt-[124px] leading-[55px] !text-blue_gray-900_01 md:text-[34px] sm:text-[28px]">
                          <span className="text-blue_gray-900_01">Get Your Key to&nbsp;</span>
                          <span className="font-extrabold text-blue_gray-900_01">Financial Fredoom</span>
                          <span className="text-blue-gray-900_01">&nbsp;with our&nbsp;</span>
                          <span className="font-extrabold text-blue_gray-900_01">Loan Solution</span>
                      </Heading>
                      <Heading size="text5xl" as="h2" className="mt-[252px] leading-[26px] !text-black-900">
                          <>
                              Our registration process is quick and easy, taking
                              <br/>
                               no more than 10 minutes to complete
                          </>
                      </Heading>
                  </div>
              </div>
              <div className="flex w-[42%] flex-col items-start gap-[34px] md:w-full">
                <Heading 
                    size="heading4xl"
                    as="h2"
                    className="tracking-[1.75px] !text-black-900 md:text-[29px] sm:text-[27px]"
                >
                    Let's get started
                </Heading>
                <div className="flex w-[88%] flex-col gap-7 lg:w-full md:w-full">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-[34px] md:flex-col">
                            <div className="flex w-full flex-col items-start gap-1.5">
                                <Heading size="textxs" as="h3" className="tracking-[0.60px]">
                                    First name
                                </Heading>
                                <Input 
                                    size="xl"
                                    shape="round"
                                    name="firstname"
                                    placeholder={`Michael`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1.5">
                                <Heading size="textxs" as="h4" className="tracking-[0.60px]">
                                    Last name
                                </Heading>
                                <Input
                                    size="xl"
                                    shape="round" 
                                    name="lastname"
                                    placeholder={`shodiya`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1.5">
                            <Heading size="textxs" as="h6" className="tracking-[0.60px]">
                                Email
                            </Heading>
                            <Input
                                size="xl"
                                shape="round"
                                name="email"
                                placeholder={`shodiya508@gmail.com`}
                                className="self-stretch border border-solid border-gray-100_01 font-medium tracking-[0.60px] !textblack-900 sm:pr-4"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-[18px] md:flex-col">
                        <div className="flex w-full flex-col items-start gap-1">
                            <Heading size="textxs" as="h6" className="tracking-[0.60px]" >
                                Country
                            </Heading>
                            <SelectBox
                                size="sm"
                                shape="round"
                                indicator={
                                    <Img src="" width={5} height={3} alt="Vector 1" className="h-[3px] w-[5px]"/>
                                }
                                name="country"
                                placeholder={`Select Country`}
                                options={dropDownOptions}
                                className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                            />
                        </div>
                        <div className="flex w-full flex-col items-start gap-1.5">
                            <Heading size="textxs" as="p" className="tracking-[0.60px]" >
                                Town
                            </Heading>
                            <SelectBox
                                size="sm"
                                shape="round"
                                indicator={
                                    <Img src="" width={5} height={3} alt="Vector 1" className="h-[3px] w-[5px]"/>
                                }
                                name="inputtown"
                                placeholder={`Select Town`}
                                options={dropDownOptions}
                                className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                            />
                        </div>
                        <div className="flex w-full flex-col items-start gap-1.5">
                            <Heading size="textxs" as="p" className="tracking-[0.60px]" >
                                Postcode
                            </Heading>
                            <SelectBox
                                size="sm"
                                shape="round"
                                indicator={
                                    <Img src="" width={5} height={3} alt="Vector 1" className="h-[3px] w-[5px]"/>
                                }
                                name="inputtown"
                                placeholder={`Select Postcode`}
                                options={dropDownOptions}
                                className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                            />
                        </div>
                    </div>
                    <div className="flex gap-[38px] md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-1.5">
                                <Heading size="textxs" as="h3" className="tracking-[0.60px]">
                                    Phone number
                                </Heading>
                                <Input
                                    size="xl"
                                    shape="round"
                                    name="zipcode"
                                    placeholder={`+44 7909 075712`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-1.5">
                                <Heading size="textxs" as="h3" className="tracking-[0.60px]">
                                    Referral code(Optional)
                                </Heading>
                                <Input
                                    size="xl"
                                    shape="round"
                                    name="zipcode"
                                    placeholder={`123456`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                        </div>
                    </div>
                    <div className="flex gap-[38px] md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-1.5">
                                <Heading size="textxs" as="h3" className="tracking-[0.60px]">
                                    Password
                                </Heading>
                                <Input
                                    size="xl"
                                    shape="round"
                                    type="password"
                                    name="zipcode"
                                    placeholder={`................`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-1.5">
                                <Heading size="textxs" as="h3" className="tracking-[0.60px]">
                                    Confirm Password
                                </Heading>
                                <Input
                                    size="xl"
                                    shape="round"
                                    type="password"
                                    name="zipcode"
                                    placeholder={`................`}
                                    className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[26px]">
                        <a href="">
                        <Button
                            color="pink_900_01"
                            size="2xl"
                            shape="round"
                            rightIcon={
                                <Img
                                    src="arrow-right.png"
                                    width={16}
                                    height={16}
                                    alt="Arrow-right"
                                    className="h-[16px] w-[16px]"
                                />
                            }
                            className="w-full gap-2.5 border border-solid border-blue_gray-100_01 font-extrabold uppercase tracking-[0.60px] sm:px-4"
                        >
                            Get Started
                        </Button>
                        </a>
                        <div className="mx-6 flex flex-col items-center gap-[34px] lg:mx-0 md:mx-0">
                            <CheckBox
                                name="terms & Condition"
                                label="by proceeding. I agree to Yami Finance and acknowledge that I have read the privacy policy."
                                id="terms_condition"
                                className="gap-1 self-stretch text-xs font-medium tracking-[0.60px] text-gray-700_03)"
                            />
                            <a href="">
                                <Text size="textmd" as="p" className="!font-medium tracking-[0.70px] !text-black-900">
                                    <span className="text-black-900">Have an account?&nbsp;</span>
                                    <span className="font-bold text-gray-700_01">Login</span>
                                </Text>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  );
}


