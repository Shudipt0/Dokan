"use client";

import { useActionState } from "react";
import { createContact } from "../actions/contact/createContact";

const ContactForm = () => {
  const [state, action, ispending] = useActionState(createContact, null);
  return (
    <form
      action={action}
      className="w-full h-[360px] md:h-[460px] p-3 md:p-8 text-[12px] md:text-[16px] shadow flex flex-col justify-between "
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-2 justify-between">
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            className="w-full text-black/80 px-3 py-2 md:px-5 md:py-3 outline-none bg-gray-100 rounded"
          />

          {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.name}</p>
          )}
        </div>
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email*"
            className="w-full text-black/80 px-3 py-2 md:px-5 md:py-3  outline-none bg-gray-100 rounded"
          />

          {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.email}</p>
          )}
        </div>
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone*"
            className="w-full text-black/80 px-3 py-2 md:px-5 md:py-3 outline-none bg-gray-100 rounded"
          />

          {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.phone}</p>
          )}
        </div>
      </div>
      <div>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        className="w-full h-[170px] md:h-52 text-black/80 px-3 py-2 md:px-5 md:py-3 outline-none bg-gray-100 rounded"
      />
      {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.message}</p>
          )}
      </div>
      <div className="w-full flex justify-end">
        <button
        type="submit"
          disabled={ispending}
          className="w-24 h-5 md:w-[215px] md:h-14 text-white text-[12px] md:text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
