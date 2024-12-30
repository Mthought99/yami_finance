import {Text, Img, Heading } from "../index";
import Link from "next/link";
import React from "react";

interface Props{
    className?: string;
}

export default function Footer({ ...props }: Props){
    return (
        <footer {...props} className={`${props.className} flex justify-center items-start py-[110px] md:py-5 bg-pink-900`}>
            <div className="container-xs mb-3.5 flex justify-content md:p-5">
                <div className="flex w-[96%] items-start justify-between gap-5 md:w-full md:flex-col">
                    <div className="flex w-[44%] flex-col items-start self-center md:w-full">
                        <Img
                            src="Yami Finance White.svg"
                            width={304}
                            height={82}
                            alt="Yamifinace"
                            className="h-[82px] w-[62%] object-cover"
                        />
                        <Text as="p" className="mt-2.5 self-stretch leading-6 tracking-[0.15px] !text-white-a700">
                            <>
                                Our mission is to empower individuals and <br />
                                businesses by providing them with the finacial resources they need tp achieve their goals.
                            </>
                        </Text>
                        <div className="mt-6 flex gap-4">
                            <Img src="facebook.svg" width={18} height={20} alt="Facebook" className="h-[20px]"/>
                            <Img src="call.svg" width={18} height={20} alt="Volume" className="h-[20px]"/>
                            <Img src="linkdin.svg" width={18} height={20} alt="Link" className="h-[20px]"/>
                            <Img src="instagram.svg" width={18} height={20} alt="Info" className="h-[20px] object-cover"/>
                        </div>
                        <Text as="p" className="mt-[38px] tracking-[0.15px] !text-white-a700">
                            All rights reserved. ©2024 Yami finance
                        </Text>
                    </div>
                    <div className="mt-6 flex w-[20%] flex-col items-start gap-3 md:w-full">
                        <div className="flex w-[88%] flex-col items-start gap-0.5 md:w-full">
                            <Heading size="headingxl" as="h5" className="!font-medium tracking-[0.15px] !text-white-a700" >
                                OUR SERVICES
                            </Heading>
                            <div className="h-px w-[44%] bg-white-a700"/>
                        </div>
                        <ul className="flex flex-col item-start gap-2.5">
                            <li>
                                <Link href="">
                                    <Text as="p" className="!font-releway !font-medium tracking-[1.15px] !text-white-a700">
                                        Personal Loan
                                    </Text>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Text as="p" className="!font-releway !font-medium tracking-[1.15px] !text-white-a700">
                                        Thrift Contribution
                                    </Text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 flex w-[28%] flex-col items-start gap-3 md:w-full">
                        <div className="flex w-[52%] md:w-full">
                            <Link href="">
                                <div className="flex w-full flex-col items-start gap-0.5">
                                    <Heading size="headingxl" as="h5" className="!font-medium tracking-[0.15px] !text-white-a700">
                                        CONTACT US
                                    </Heading>
                                    <div className="h-px w-[38%] bg-white-a700" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-[18px]">
                            <Img src="contact.svg" width={18} height={20} alt="Call" className="h-[20px] self-start" />
                            <Text as="p" className="!font-normal tracking-[1.15px] !text-white-a700">
                                +(1) 234 7775-678
                            </Text>
                        </div>
                        <div className="flex items-center gap-[18px]">
                            <Img src="email.svg" width={18} height={20} alt="email" className="h-[20px] self-start" />
                            <Text as="p" className="!font-normal tracking-[1.15px] !text-white-a700">
                                yamifinance@gmail.com
                            </Text>
                        </div>
                        <div className="flex w-[60%] items-start gap-[18px] md:w-full">
                            <Img src="location.svg" width={18} height={20} alt="location" className="h-[20px] self-start" />
                            <Text as="p" className="!font-normal leading-[23px] tracking-[1.15px] !text-white-a700">
                                <>
                                    Address line-1
                                    <br />
                                    Address line-2,
                                    <br />
                                    city, state-pin code.
                                </>
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

