"use client";
import { Button, Heading, Img, Text, Input } from "../../components/index";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoanPaymentInfo from "../../components/LoanPaymentInfo";
import React, { Suspense } from "react";

const data = [
    {LoanPaymentText: "How do I make extra payments to my loan in smart Money?", image: "dropdown.svg" },
    {LoanPaymentText: "How do I amend an existing direct debit?", image: "dropdown.svg"},
    {LoanPaymentText: "How do I appoint a third party?", image: "dropdown.svg"},
    {
        LoanPaymentText: (
            <>
                How do I ensure thay your online access is fully-secure <br/>
            </>
        ),
        image: "dropdown.svg",
    },
];

export default function HomePage(){
    return (
        <div className="flex w-full flex-col gap-[106px] bg-gray-200_02 md:gap-[79px] sm:gap-[53px]">
            <div className="mx-[90px] mt-[46px] flex flex-col gap-16 md:mx-0 sm:gap-8">
                <Header className="md:flex-col" />
                <div className="flex justify-center rounded-[56px] bg-white-a700 py-[114px] md:py-5" >
                    <div className="container-xs flex items-start justify-center gap-[18px] md:flex-col md:p-5">
                        <div className="flex flex-1 flex-col items-start gap-[22px] self-center md:self-stretch">
                            <div className="flex flex-col gap-3.5 self-stretch">
                                <Heading 
                                    size="heading11xl" 
                                    as="h1" 
                                    className="!text-[66.11px] leading-[73px] tracking-[0.49px] !text-pink-900_01">
                                    Quick and Easy Loan for Your Financial Needs.
                                </Heading>
                                <Text
                                    size="text2xl"
                                    as="p"
                                    className="!font-normal !text-[17.5px] leading-[22px] tracking-[0.49px] !text-gray-800_02"
                                >
                                   Our loan services offer a hassle-free and streamlined borrowing experience, 
                                   providing you with the funds you need in a timely manner to meet your financial requirements.
                                </Text>
                            </div>
                            <a href="" target="">
                                <Button 
                                    color="pink_900" 
                                    size="xl" 
                                    variant="outline"
                                    className="min-w-[128px] rounded-[22px] !border-[1.94px] font- tracking-[0.49px] !text-pink-900_01"
                                >
                                    Get Started
                                </Button>
                            </a>
                        </div>
                        <Img 
                            src="illustration.svg"
                            width={544}
                            height={359}
                            alt="illustration"
                            className="h-[356px] w-[48%] object-cover md:w-full" 
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex justify-center self-stretch bg-gradient py-[54px] md:py-5" id="Service">
                    <div className="container-xs mb-[30px] flex justify-center px-14 md:p-5 md:px-5">
                        <div className="flex w-[72%] flex-col items-center gap-[86px] md:w-full md:gap-16 sm:gap-[43px]">
                            <Heading size="heading6xl" as="h2" className="!font-semibold tracking-[0.50px] !text-pink-900">
                                Our Service
                            </Heading>
                            <div className="mr-1.5 flex items-center gap-7 self-stretch md:mr-0 md:flex-col">
                                <div className="flex w-full flex-col items-center justify-center gap-[26px] rounded-[30px] bg-blue-50_33 p-5 shadow-lg">
                                    <Img 
                                        src="Vector.svg"
                                        width={60}
                                        height={72}
                                        alt="Vector"
                                        className="h-[72px] w-[18%]"
                                    />
                                    <Heading size="text6xl" as="h3" className="!text-[25.4px] tracking-[0.38px] !text-gray-900">
                                        Personal loan
                                    </Heading>
                                    <Text
                                        size="texts"
                                        as="xs"
                                        className="self-stretch text-center !text-[13.68px] leading-[23px] tracking-[0.38px] !text-gray-700"
                                    >
                                        <>
                                            Personal loans provide
                                            <br /> borrowers with flexibility in how they 
                                            <br /> use the funds.
                                        </>
                                    </Text>
                                    <a href="../personalDetails" target="">
                                        <Button
                                            color="pink_900"
                                            size="xs"
                                            variant="outline"
                                            className="min-w-[94] rounded-[14px] font-medium tracking-[0.38px]"
                                        >
                                            Apply now
                                        </Button>
                                    </a>
                                </div>
                                <div className="flex w-full flex-col items-center gap-[26px] rounded-[28px] bg-blue-50_33 p-5 shadow-lg">
                                    <Img 
                                        src="Vector2.svg"
                                        width={52}
                                        height={68}
                                        alt="Vector"
                                        className="h-[72px] w-[18%]"
                                    />
                                    <Heading size="text6xl" as="h3" className="!text-[25.4px] tracking-[0.38px] !text-gray-900">
                                        Thrift Contribution
                                    </Heading>
                                    <Text
                                        size="texts"
                                        as="xs"
                                        className="self-stretch text-center !text-[13.68px] leading-[23px] tracking-[0.38px] !text-gray-700 "
                                    >
                                        <>
                                            Business Loan Service provide
                                            <br /> financial asistance to businesses.
                                            <br /> for various purposes..
                                        </>
                                    </Text>
                                    <a href="" target="">
                                        <Button
                                            color="pink_900"
                                            size="xs"
                                            variant="outline"
                                            className="min-w-[94] rounded-[14px] font-medium tracking-[0.38px]"
                                        >
                                            Apply now
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[98px] self-stretch bg-white-a700 py-[82px] md:gap-[73px] md:py-5 sm:gap-[49px]" id="How_we_work">
                    <div className="flex flex-col items-center self-stretch">
                        <div className="container-xs flex flex-col items-center gap-3.5 px-14 md:p-5 md:px-5">
                            <Heading size="heading6xl" as="h2" className="tracking-[0.50px] !text-pink-900">
                                How we work?
                            </Heading>
                            <Text as="p" className="font-medium tracking-[0.50px] !text-gray-800_02">
                                This is a process, how can you get loan for your self.
                            </Text>
                        </div>
                    </div>
                    <div className="container-xs mb-5 flex flex-col gap-[82px] px-[34px] md:gap-[61px] md:p-5 sm:gap-[41px] sm:px-5">
                        <div className="ml-[26px] mr-[50px] flex items-start md:mx-0 md:flex-col">
                            <Img
                                src="Application.svg"
                                width={332}
                                height={292}
                                alt="Application"
                                className="h-[292px] w-[32%] self-center md:w-full"
                            />
                            <div className="relative mt-2 h-[234px] flex-1 md:w-full md:flex-none md:self-stretch">
                                <Heading
                                    size="heading12xl"
                                    as="h6"
                                    className="absolute left-[10%] top-[0.00px] m-auto !text-[95.2px] tracking-[0.45px] !text-black-900_16"
                                >
                                    01
                                </Heading>
                                <div className="absolute bottom-[-0.5px] right-[0.47px] left-[20%] m-auto flex flex-1 flex-col items-start gap-7">
                                    <Heading size="heading3xl" as="h4" className="mt-1 tracking-[0.50px] !text-pink-900">
                                        Application
                                    </Heading>
                                    <Text as="p" className="self-stretch !font-normal leading-[23px] tracking-[0.50px] !text-gray-800_02">
                                        The borrower submits a loan application to the Yami finance, either in person, online, or through 
                                        other channels. The application includes personal and financial information, such as income, 
                                        employment history, credit score, and the purpose of the loan.
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[54px] sm:gap-[27px]">
                            <div className="flex w-[92%] items-start md:w-full md:flex-col">
                                <div className="relative mt-3 h-[246px] flex-1 md:w-full md:flex-none md:self-stretch">
                                    <div className="absolute bottom-[-0.22px] left-[7%] m-auto flex w-[78%] flex-col items-center justify-center gap-8">
                                        <Heading size="heading3xl" as="h5" className="tracking-[0.50px] !text-pink-900">
                                            Documentation and Verification
                                        </Heading>
                                        <Text
                                            as="p"
                                            className="self-stretch !font-normal leading-[23px] tracking-[0.50px] !text-gray-800_02"
                                            >
                                                Yami Finance requests supporting documents from the 
                                                borrower, such as identification proof, income statements, 
                                                bank statements, and collateral details (if applicable). 
                                                The bank verifies the information provided to assess 
                                                the borrower's creditworthiness and eligibility for the loan.
                                        </Text>
                                    </div>
                                    <Heading
                                        size="heading12xl"
                                        as="h6"
                                        className="absolute left-[2%] top-[0.00px] m-auto !text-[95.2px] tracking-[0.45px] !text-black-900_16"
                                    >
                                        02
                                    </Heading>
                                </div>
                                <Img
                                    src="File.svg"
                                    width={302}
                                    height={312}
                                    alt="file"
                                    className="h-[312px] w-[30%] self-center md:w-full"
                                />
                            </div>
                            <div className="mx-14 flex items-start md:mx-0 md:flex-col">
                                <Img 
                                    src="Credit Asses.svg"
                                    width={304}
                                    height={294}
                                    alt="Creditassesone"
                                    className="h-[294px] w-[30%] self-center md:w-full"
                                />
                                <div className="mt-[30px] flex flex-col items-end md:self-stretch">
                                    <Heading
                                        size="heading12xl"
                                        as="h1"
                                        className="relative z-[1] mr-[146px] !text-[95.2px] tracking-[0.45px] !text-black-900_1d md:mr-0"
                                    >
                                        03
                                    </Heading>
                                    <div className="relative mt-[-84px] flex w-[82%] flex-col items-start justify-center gap-8 md:w-full">
                                        <Heading size="heading3xl" as="h1" className="tracking-[0.50px] !text-pink-900">
                                            Credit Assessment
                                        </Heading>
                                        <Text
                                            as="p"
                                            className="self-stretch !font-normal leading-[23px] tracking-[0.50px] !text-gray-800_02"
                                        >
                                            Yami Finance conducts a credit assessment to evaluate the borrower's creditworthiness and 
                                            ability to repay the loan. This process involves analyzing the borrower's credit history, 
                                            income stability, debt-to-income ratio, and other factors.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[94%] items-start md:w-full md:flex-col">
                                <div className="relative mt-3 h-[222px] flex-1 md:w-full md:flex-none md:self:stretch">
                                    <div className="absolute bottom-[1.22px] left-[7%] m-auto flex w-[78%] flex-col items-start gap-7">
                                        <Heading size="heading3xl" as="h2" className="mt-1 tracking-[0.50px] !text-pink-900">
                                            Loan Approval
                                        </Heading>
                                        <Text
                                            as="p"
                                            className="self-stretch !font-normal leading-[23px] tracking-[0.50px] !text-gray-800_02"
                                        >
                                            If the borrower meets the bank's lending criteria and passes the credit assessment, 
                                            the loan is approved. The bank determines the loan amount, interest rate, repayment term, 
                                            and any associated fees.
                                        </Text>
                                    </div>
                                    <Heading
                                        size="heading12xl"
                                        as="h1"
                                        className="absolute left-[0.00px] top-[0.00px] m-auto !text-[95.2px] tracking-[0.45px] !text-black-900_1e"
                                    >
                                        04
                                    </Heading>
                                </div>
                                <Img 
                                    src="Car Loan.svg"
                                    width={330}
                                    height={288}
                                    alt="Car loan"
                                    className="h-[288px] w-[32%] self-center md:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center self-stretch bg-gradient1 py-16 md:py-16" id="About">
                    <div className="container-xs  mb-[26px] flex justify-between px-2 md:p-5">
                        <div className="flex w-full flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
                            <Heading
                                size="heading6xl"
                                as="h2"
                                className="tracking-[0.50px] !text-pink-900" 
                            >
                                About Us
                            </Heading>
                            <div className="mr-3.5 flex items-start justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                                <Img
                                    src="About.svg"
                                    width={366}
                                    height={370}
                                    alt="Img"
                                    className="h-[370px] w-[32%] self-center md:w-full"
                                />
                                <Text
                                    size="text7xl"
                                    as="p"
                                    className="mt-[74px] w-[60%] font-normal !text-[29.54px] leading-[38px] tracking-[0.22px] !text-gray-800_01 md:w-full md:p-5"
                                >
                                    Yami Finance Your trusted financial partner for loans. Quick approvals, competitive rates, and 
                                    personalised solutions to meet your unique needs. Empowering you to achieve your financial goals. 
                                    Apply online today!
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xs mt-[98px] px-11 md:p-5 md:px-5">
                    <div className="mr-[18px] flex flex-col items-start gap-11 md:mr-0">
                        <Heading 
                            size="heading6xl" 
                            as="h2"
                            className="ml-[190px] tracking-[0.61px] !text-pink-900 md:ml-0"
                        >
                            Frequently Asked Questions
                        </Heading>
                        <div className="flex flex-col gap-[18px] self-stretch rounded-[30px] border-2 border-solid border-gray-500 bg-white-a700 py-6 sm:py-5">
                            
                            <div className="mb-1.5 flex flex-col gap-[18px] px-[38px] sm:p-5">
                                <div className="mt-[18px] flex flex-col gap-7">
                                    <Suspense fallback={<div>Loading Feed...</div>}>
                                        {data.map((d, index) => (
                                            <LoanPaymentInfo {...d } key={"homepage" + index}/>
                                        ))}
                                    </Suspense>
                                </div>
                                <Heading
                                    size="text4xl"
                                    as="h4"
                                    className="!font-normal leading-[30px] tracking-[0.61px] !text-black-900"
                                >
                                    Smart Money is secured by Geotrust. SSL certificates from Geotrust® are the ultimate security and 
                                    trust solution delivering both 256-bit encryption and the True Site™ trust mark providing third 
                                    party website identity validation.
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[104px] flex justify-center self-stretch bg-gradient1 py-[76px] md:py-5" id="Contact">
                    <div className="container-xs flex justify-center md:p-5">
                        <div className="flex w-full flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
                            <Heading size="heading6xl" as="h2" className="!text-pink-900_01">
                                Enquiries & Support
                            </Heading>
                            <div className="mr-10 flex items-center justify-between gap-5 self-stretch md:mr-0 md:flex-col">
                                <Img
                                    src="customer_care.svg"
                                    width={380}
                                    height={366}
                                    alt="contactus"
                                    className="h-[366px] w-[34%] md:w-full"
                                />
                                <div className="flex w-[58%] flex-col items-start gap-5 md:w-full">
                                    <div className="self-stretch rounded-[44px] bg-white-a700 p-9 sm:p-5">
                                        <div className="flex flex-col items-start gap-2.5">
                                            <Heading size="textlg" as="h4" className="capitalize !text-black-900" >
                                                Your name
                                            </Heading>
                                            <Input 
                                                size="xl"
                                                shape="round"
                                                name="name"
                                                placeholder={`Input Name`}
                                                className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                            />
                                            <div className="flex gap-5 self-stretch sm:flex-col">
                                                <div className="flex w-full flex-col items-start gap-1 sm:w-full">
                                                    <Heading size="textlg" as="h4" className="capitalize !text-black-900">
                                                        Phone Number
                                                    </Heading>
                                                    <Input 
                                                        size="xl"
                                                        shape="round"
                                                        name="tel"
                                                        placeholder={`Input Number`}
                                                        className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                                    />
                                                </div>
                                                <div className="flex w-full flex-col items-start gap-1 sm:w-full">
                                                    <Heading size="textlg" as="h4" className="capitalize !text-black-900">
                                                        Email
                                                    </Heading>
                                                    <Input 
                                                        size="xl"
                                                        shape="round"
                                                        name="email"
                                                        placeholder={`Input Email`}
                                                        className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                                    />
                                                </div>
                                            </div>
                                            <Heading size="textlg" as="h6" className="capitalize !text-black-900">
                                                <span className="text-black-900">Input&nbsp;</span>
                                                <span className="text-black-900">your message</span>
                                            </Heading>
                                            <Input 
                                                size="xl"
                                                shape="round"
                                                name="email"
                                                placeholder={`Input Message`}
                                                className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
                                            />
                                        </div>
                                    </div>
                                    <Button size="md" className="min-w-[100px] rounded-[18px] font-medium capitalize !text-black-900 sm:px-5">Send</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="self-stretch"/>
            </div>
        </div>
    );
}