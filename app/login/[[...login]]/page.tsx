"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
// import { SignIn } from '@clerk/nextjs'

const LogInPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="m-auto">
        {/* <SignIn forceRedirectUrl='/'/> */}

        <SignIn.Root>
          <SignIn.Step name="start">
            <h1>Sign in to your account</h1>

            <Clerk.Connection name="google">
              Sign in with Google
            </Clerk.Connection>

            <Clerk.Field name="identifier">
              <Clerk.Label>Email</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <h2>Enter your password</h2>

            <Clerk.Field name="password">
              <Clerk.Label>Password</Clerk.Label>
              <Clerk.Input type="password" />
              <Clerk.FieldError />
            </Clerk.Field>
            <SignIn.Action submit>Log In</SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
};

export default LogInPage;
