'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

// import { SignUp } from '@clerk/nextjs'
import {
  useSignUp,
  useClerk,
  
} from '@clerk/nextjs';
import { useRouter } from "next/navigation";


const SignUpPage = () => {
    const router = useRouter();
  const { signUp } = useSignUp();
  const { setActive } = useClerk();

  const handleComplete = async () => {
    if (signUp?.status === 'complete') {
      await setActive({ session: signUp.createdSessionId });
      router.push('/');
    }
  };
  return (
    <div className='flex flex-col h-screen'>
        <div className='m-auto'>
            {/* <SignUp forceRedirectUrl='/' /> */}

                <SignUp.Root  >
      <SignUp.Step name="start" 
      // Redirect after sign-up is complete
         >
        <h1>Create an account</h1>

        <Clerk.Connection name="google">Sign up with Google</Clerk.Connection>

        <Clerk.Field name="username">
          <Clerk.Label>Username</Clerk.Label>
          <Clerk.Input />
          <Clerk.FieldError />
        </Clerk.Field>

        <Clerk.Field name="emailAddress">
          <Clerk.Label>Email</Clerk.Label>
          <Clerk.Input />
          <Clerk.FieldError />
        </Clerk.Field>

        <Clerk.Field name="password">
          <Clerk.Label>Password</Clerk.Label>
          <Clerk.Input />
          <Clerk.FieldError />
        </Clerk.Field>

        <SignUp.Action submit onComplete={handleComplete}>Sign up</SignUp.Action>
      </SignUp.Step>


      <SignUp.Step name="verifications">
        

        <SignUp.Strategy name="email_code">
          <h1>Check your email</h1>

          <Clerk.Field name="code">
            <Clerk.Label>Email Code</Clerk.Label>
            <Clerk.Input />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignUp.Action submit >Verify</SignUp.Action>
        </SignUp.Strategy>
      </SignUp.Step>
      {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
    </SignUp.Root>
        </div>
      
    </div>
  )
}

export default SignUpPage
