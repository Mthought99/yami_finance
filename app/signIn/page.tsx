'use client';
import React from 'react';
import { Img, Heading, Input, Button, CheckBox, Text} from "../../components/index";

export default function SignIn(){	
  	return( 
		<div className="w-full bg-gray-200_01 py-[90px] lg:py-8 md:py-5 sm:py-4">
			<div className="flex justify-center px-14 md:px5 sm:px-4">
				<div className="container-sm flex items-center justify-between gap-5 rounded-[20px] bg-white-a700 p-3.5 shadow-sm lg:p-5 md:flex-col md:p-5">
					<div className="flex w-[52%] flex-col justify-center rounded-[20px] bg-gray-200_03 px-12 py-9 md:w-full md:p-5 md:px-5 sm:p-4">
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
					<div className="flex w-[42%] flex-col items-start gap-[50px] md:w-full">
						<Heading size="heading4xl" as="h3" className="tracking-[1.7px] !text-black-900 md:text-[29px] sm:text-[27px]">
								Welcome back!
						</Heading>
						<div className="flex w-[88%] lg:w-full md:w-full">
							<div className="flex w-full flex-col items-ends gap-[30px]">
								<div className="flex flex-col items-start gap-1.5 self-stretch">
									<Heading size="textxs" as="h4" className="tracking-[0.60px]">
										Email
									</Heading>
									<Input 
										size="xl"
										shape="round"
										name="email"
										placeholder={`shodiya508@gmail.com`}
										className="self-stretch border border-solid border-blue_gray-100_01 font-medium tracking-[0.60px] !text-black-900 sm:pr-4"
									/>
								</div>
								<div className="relative h-[64px] self-stretch lg:h-auto md:h-auto">
									<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-1.5">
										<Heading size="textxs" as="h5" className="tracking-[0.60px]">
											Password
										</Heading>
										<Input
											size="xl"
											shape="round"
											type="password"
											name="password"
											placeholder={`...................`}
											className="self-stretch border border-solid border-blue_gray-100_01 font-black tracking-[1.08px] !text-black-900 sm:pr-4"
										/>
									</div>
								</div>
								<a href="" target="_blank">
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
										login
									</Button>
								</a>
								<div className="flex justify-between gap-5 self-stretch">
									<CheckBox
										name="remembrance"
										label="Remember Me"
										id="rememberme"
										className="gap-1 text-xs font-medium text-black-900"
									/>
									<a href="" target="_blank">
										<Heading size="textxs" as="h6" className="!text-black-900">
											Forget Password
										</Heading>
									</a>
								</div>
								<a href="../signUp">
									<Text
										size="textmd"
										as="p"
										className="ml-[168px] !font-medium tracking-[0.70px] !text-black-900 lg:mr-0 md:mr-0"
									>
										<span className="text-black-900">Don't have an account?&nbsp;</span>
										<span className="font-bold text-gray-700_01">Signup</span>
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

