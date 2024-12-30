import {Heading, Img} from "../index";
import Link from "next/link";
import React from "react";

interface Props{
    className?: string;
}

export default function Header({ ...props }: Props){
    return(
        <header {...props} className={`${props.className} flex justify-between items-center gap-5`}>
            <Img src="Yami Finance Logo.svg" width={218} height={58} alt="yamifinance" className="h-[58px] w-[18%]" />
            <div className="flex w-[62%] items-center justify-between">
                <ul className="flex flex-wrap gap-[42px]">
                    <li>
                        <Link href="#home">
                            <Heading size="headings" as="p" className="!text-[14.25px] captalize tracking-[0.29px] !text-pink-900">
                                Home{" "}
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Service" className="cursor-pointer">
                            <Heading 
                                size="headings"
                                as="p"
                                className="!text-[14.25px] tracking-[0.29px] !text-black-900 hover:!text-pink-900">
                                Services
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href="#How_we_work" className="cursor-pointer">
                            <Heading 
                                size="headings"
                                as="p"
                                className="!text-[14.25px] tracking-[0.29px] !text-black-900 hover:!text-pink-900">
                                How We Work
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href="#About" className="cursor-pointer">
                            <Heading 
                                size="headings"
                                as="p"
                                className="!text-[14.25px] tracking-[0.29px] !text-black-900 hover:!text-pink-900">
                                About Us
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href="#Contact" className="cursor-pointer">
                            <Heading 
                                size="headings"
                                as="p"
                                className="!text-[14.25px] tracking-[0.29px] !text-black-900 hover:!text-pink-900">
                                Contact Us
                            </Heading>
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center gap-3.5">
                    <li>
                        <Link href="../signUp" className="cursor-pointer">
                            <Heading 
                                size="headings"
                                as="p"
                                className="!text-[14.25px] tracking-[0.29px] !text-pink-900">
                                Sign up
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href="../signIn" className="flex items-center rounded-[10px] bg-pink-900">
                            <Heading 
                                size="headings"
                                as="p"
                                className="px-3.5 py-1.5 !text-[14.25px] tracking-[0.29px] !text-white-a700">
                                Sign in
                            </Heading>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}