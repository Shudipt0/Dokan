"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomGoogleOneTap } from "../_components/CustomGoogleOneTap";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [code, setCode] = useState("");
  const [verify, setVerify] = useState(false);
  const router = useRouter();

  const [signUpFields, setSignUpFields] = useState({
    username: "",
    emailAddress: "",
    password: "",
  });

  const handleSignupFieldChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setSignUpFields({
      ...signUpFields,
      [name]: value,
    });
  };

  console.log(signUpFields);
  const handleSignUpSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signUp?.create({
        ...signUpFields,
      });
      await signUp?.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerify(true);
    } catch (error) {
      // console.log(JSON.stringify(error));
    }
  };

  // verification
  const handleVerificationSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const signupAttempt = await signUp?.attemptEmailAddressVerification({
        code,
      });

      if (signupAttempt?.status === "complete") {
        await setActive({ session: signupAttempt.createdSessionId });
        router.push("/");
      } else {
        console.log(signupAttempt);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isLoaded) return;

  return (
    <div className="w-full h-screen flex bg-white ">
      {verify ? (
        <form
          onSubmit={handleVerificationSubmit}
          className="m-auto text-black flex flex-col gap-4"
        >
          <div>
            <label htmlFor="code">code</label>
            <input
              type="text"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      ) : (
        <form
          onSubmit={handleSignUpSubmit}
          className="m-auto text-black flex flex-col gap-4"
        >
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              onChange={handleSignupFieldChange}
            />
          </div>
          <div>
            <label htmlFor="emailAddress">Email</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="email"
              onChange={handleSignupFieldChange}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleSignupFieldChange}
            />
          </div>
          {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
          <button type="submit">submit</button>
        </form>
      )}

        <CustomGoogleOneTap>
      <h1>Google One Tap Example</h1>
    </CustomGoogleOneTap>
    </div>
  );
};

export default SignUp;
