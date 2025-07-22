"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/legacy/image";
import sideImage from "@/public/SideImage.jpg";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <div className="w-full md:flex items-center justify-center gap-30">
        <div>
          <Image src={sideImage} alt="sideimage" width={600} height={600} />
        </div>
        <div className="md:w-[370px]   ">
          <SignIn.Root>
            <SignIn.Step
              name="start"
              className="w-full h-full flex flex-col gap-8"
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
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5  peer-valid:text-sm peer-valid:bg-white">
                    Email
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
                    Continue
                  </SignIn.Action>
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
            {/* ----- */}
            {/* password and forget password */}
            <SignIn.Step name="verifications">
              <SignIn.Strategy name="password">
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl text-black/80 font-semibold">
                    Enter your password
                  </h1>

                  <Clerk.Field name="password" className="w-full ">
                    <Clerk.Label className="flex items-center relative">
                      <Clerk.Input
                        type="password"
                        className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 "
                      />
                      <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5 peer-valid:text-sm peer-valid:bg-white">
                        Password
                      </span>
                    </Clerk.Label>
                    <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                    <Clerk.FieldError className="text-sm text-red-500 " />
                  </Clerk.Field>
                  <div className="flex items-center justify-between">
                    <SignIn.Action
                      submit
                      className="w-[145px] h-14 flex items-center justify-center text-md text-white bg-[#DB4444] hover:bg-[#DB5555] cursor-pointer rounded "
                    >
                      Continue
                    </SignIn.Action>
                    <SignIn.Action
                      navigate="forgot-password"
                      className="text-md text-[#DB4444]"
                    >
                      Forgot password?
                    </SignIn.Action>
                  </div>
                </div>
              </SignIn.Strategy>
              {/* reset password mail verfication with code */}
              <SignIn.Strategy name="reset_password_email_code">
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl text-black/80 font-semibold">
                    Check your email
                  </h1>
                  <p className="text-md text-black/80 font-semibold flex items-center gap-2 ">
                    We sent a code to{" "}
                    <div className="underline">
                      <SignIn.SafeIdentifier />.
                    </div>
                  </p>

                  <Clerk.Field name="code" className="w-full ">
                    <Clerk.Label className="flex items-center relative">
                      <Clerk.Input
                        type="code"
                        className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 "
                      />
                      <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5 peer-valid:text-sm peer-valid:bg-white">
                        Code
                      </span>
                    </Clerk.Label>
                    <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                    <Clerk.FieldError className="text-sm text-red-500 " />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className="w-[145px] h-14 flex items-center justify-center text-md text-white bg-[#DB4444] hover:bg-[#DB5555] cursor-pointer rounded "
                  >
                    Continue
                  </SignIn.Action>
                </div>
              </SignIn.Strategy>
            </SignIn.Step>
            {/* ------- */}

            {/* reset password entry */}

            <SignIn.Step name="forgot-password" className="space-y-6">
              <h1 className="text-2xl text-black/80 font-semibold">
                Forgot your password?
              </h1>

              <SignIn.SupportedStrategy name="reset_password_email_code">
                <div className="w-[145px] h-14 flex items-center justify-center text-md text-white bg-gray-500 hover:bg-gray-600 cursor-pointer rounded ">
                  Reset password
                </div>
              </SignIn.SupportedStrategy>

              <SignIn.Action
                navigate="previous"
                className="ml-8 text-md text-gray-700 underline underline-gray-400 underline-offset-6 cursor-pointer"
              >
                Go back
              </SignIn.Action>
            </SignIn.Step>
            {/* reset password  section*/}
            <SignIn.Step name="reset-password" className="space-y-6">
              <h1 className="text-2xl text-black/80 font-semibold">
                Reset your password
              </h1>

              <Clerk.Field name="password" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input
                    type="password"
                    className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 "
                  />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5 peer-valid:text-sm peer-valid:bg-white">
                    New password
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 " />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword" className="w-full ">
                <Clerk.Label className="flex items-center relative">
                  <Clerk.Input
                    type="password"
                    className="outline-none peer text-[18px] text-black/80 font-semibold duration-200 "
                  />
                  <span className="absolute left-0 text-[18px] text-gray-400 peer-focus:text-sm peer-focus:-translate-y-5 duration-200 peer-user-valid:-translate-y-5 peer-valid:text-sm peer-valid:bg-white">
                    Confirm password
                  </span>
                </Clerk.Label>
                <div className="w-full h-[1.5px] my-1 bg-gray-300 "></div>
                <Clerk.FieldError className="text-sm text-red-500 " />
              </Clerk.Field>

              <SignIn.Action
                submit
                className="w-[145px] h-14 flex items-center justify-center text-md text-white bg-[#DB4444] hover:bg-[#DB5555] cursor-pointer rounded "
              >
                Reset password
              </SignIn.Action>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
