"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";
import sideImage from "@/public/SideImage.jpg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"

const SignUpPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <div className="w-full md:flex items-center justify-between">
        <div>
          <Image src={sideImage} alt="sideimage" width={800} height={780} />
        </div>

        <div className="md:w-[370px] md:h-[530px]  ">
          <SignUp.Root>
            <SignUp.Step
              name="start"
              className="w-full h-full flex flex-col justify-between "
            >
              <div className="space-y-4">
                <h1 className="text-4xl text-black/90 font-semibold">
                  Create an account
                </h1>
                <p className="text-md text-black/80 font-semibold">
                  Enter your details below
                </p>
              </div>

              <Clerk.Field name="username" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 focus:bg-white " />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5  peer-valid:text-sm peer-valid:bg-white ">
                    Name
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 " />
              </Clerk.Field>

              <Clerk.Field name="emailAddress" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 " />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-valid:text-sm peer-valid:bg-white">
                    Email
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 "/>
              </Clerk.Field>

              <Clerk.Field name="password" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 " />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-valid:text-sm peer-valid:bg-white">
                    Password
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 "/>
              </Clerk.Field>
              <div className="space-y-5">
                <SignUp.Action
                  submit
                  className="w-full h-14 flex items-center justify-center text-md text-white bg-[#DB4444] hover:bg-[#DB5555] cursor-pointer rounded "
                >
                  Create Account
                </SignUp.Action>

                <Clerk.Connection
                  name="google"
                  className="w-full h-14 flex items-center justify-center gap-3 border border-gray-700 text-md text-black/90 cursor-pointer rounded "
                >
                  <span>
                    <FcGoogle size={24} />
                  </span>
                  Sign up with Google
                </Clerk.Connection>
              </div>

              <div className="w-full flex items-center justify-center gap-3">
                <p className="text-md text-gray-600 ">Already have account?</p>
                <Link
                  href="login"
                  className="text-md text-gray-700 underline underline-gray-400 underline-offset-6"
                >
                  Log in
                </Link>
              </div>
            </SignUp.Step>

            <SignUp.Step name="verifications">
              <SignUp.Strategy name="email_code">
                <h1>Check your email</h1>

                <Clerk.Field name="code">
                  <Clerk.Label>Email Code</Clerk.Label>
                 <Clerk.Input
  type="otp"
  required
  className="flex justify-center gap-1"
  render={({ value, status }) => (
    <div
      data-status={status}
      className="relative h-9 w-8 rounded-md bg-white ring-1 ring-inset ring-zinc-300 data-[status=selected]:bg-sky-400/10 data-[status=selected]:shadow-[0_0_8px_2px_theme(colors.sky.400/30%)] data-[status=selected]:ring-sky-400"
    >
      <AnimatePresence>
        {value && (
          <motion.span
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            className="absolute inset-0 flex items-center justify-center text-zinc-950"
          >
            {value}
          </motion.span>
        )}
        {value}
      </AnimatePresence>
      {status === 'cursor' && (
        <motion.div
          layoutId="otp-input-focus"
          transition={{ ease: [0.2, 0.4, 0, 1], duration: 0.2 }}
          className="absolute inset-0 z-10 rounded-[inherit] border border-sky-400 bg-sky-400/10 shadow-[0_0_8px_2px_theme(colors.sky.400/30%)]"
        />
      )}
    </div>
  )}
/>
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignUp.Action submit>Verify</SignUp.Action>
              </SignUp.Strategy>
            </SignUp.Step>
            {/* CAPTCHA Widget */}
            <div id="clerk-captcha"></div>
          </SignUp.Root>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
