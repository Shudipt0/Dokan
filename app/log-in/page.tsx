"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {isClerkAPIResponseError} from "@clerk/nextjs/errors"

const LogIn = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [errorMessage, setErrorMessage] = useState(null)
  
  const router = useRouter();

  const [loginFields, setLoginFields] = useState({
    identifier: "",
    password: "",
  });

  const handleLoginFieldChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLoginFields({
      ...loginFields,
      [name]: value,
    });
  };

  // console.log(setLoginFields);
  const handleLogInSubmit = async (e: any) => {
    e.preventDefault();
    try {
     const signInAttempt = await signIn?.create({
      ...loginFields
     });

     if(signInAttempt?.status === "complete"){
      await setActive({session: signInAttempt.createdSessionId});
      router.push('/')
     }

    } catch (error) {

      if(isClerkAPIResponseError(error)){
        setErrorMessage(error.errors);
      }
      // console.log(error);
    }
  };

  
  if (!isLoaded) return;

  return (
    <div className="w-full h-screen flex bg-white ">
     
        <form
          onSubmit={handleLogInSubmit}
          className="m-auto text-black flex flex-col gap-4"
        >
          <div>
            <label htmlFor="identifier">E-mail</label>
            <input
              type="text"
              name="identifier"
              placeholder="identifier"
              onChange={handleLoginFieldChange}
            />
          </div>
         
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleLoginFieldChange}
            />
          </div>
          {/* CAPTCHA Widget */}
          <div id="clerk-captcha"></div>
          <button type="submit">submit</button>
        </form>
        {errorMessage && errorMessage?.map((error, index) => (
          <p key={index} className="text-red-500">{error.longMessage}</p>
        ))}
      
    </div>
  );
};

export default LogIn;

