"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import sideImage from "@/public/SideImage.jpg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <div className="w-full md:flex items-center justify-between">
        <div>
          <Image src={sideImage} alt="sideimage" width={800} height={780} />
        </div>
        <div className="md:w-[370px] md:h-[530px]  ">
          <SignIn.Root>
            <SignIn.Step
              name="start"
              className="w-full h-full flex flex-col justify-between "
            >
              <div className="space-y-4">
                <h1 className="text-4xl text-black/90 font-semibold">
                  Log in to Exclusive
                </h1>
                <p className="text-md text-black/80 font-semibold">
                  Enter your details below
                </p>
              </div>

              <Clerk.Field name="identifier" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 " />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-valid:text-sm peer-valid:bg-white">
                    Email
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 " />
              </Clerk.Field>

              <Clerk.Field name="password" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input
                    type="password"
                    className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 "
                  />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200  peer-valid:text-sm peer-valid:bg-white">
                    Password
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 " />
              </Clerk.Field>
              <div className="space-y-5">
              <div className="flex items-center justify-between">
                <SignIn.Action
                  submit
                  className="w-[145px] h-14 flex items-center justify-center text-md text-white bg-[#DB4444] hover:bg-[#DB5555] cursor-pointer rounded "
                >
                  Log In
                </SignIn.Action>
                <h3 className="text-md text-[#DB4444]">Forget Password?</h3>
              </div>
              <Clerk.Connection
                name="google"
                className="w-full h-14 flex items-center justify-center gap-3 border border-gray-700 text-md text-black/90 cursor-pointer rounded "
              >
                <span>
                  <FcGoogle size={24} />
                </span>
                Log in with Google
              </Clerk.Connection>
              </div>

              <div className="w-full flex items-center justify-center gap-3">
                <p className="text-md text-gray-600 ">Didn't have account?</p>
                <Link
                  href="login"
                  className="text-md text-gray-700 underline underline-gray-400 underline-offset-6"
                >
                  Sign in
                </Link>
              </div>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
