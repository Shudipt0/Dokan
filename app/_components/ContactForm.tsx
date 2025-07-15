"use client";

import { useActionState } from "react";
import { createContact } from "../actions/contact/createContact";

const ContactForm = () => {
  const [state, action, ispending] = useActionState(createContact, null);
  return (
    <form
      action={action}
      className="w-full md:h-[460px] p-8 shadow flex flex-col justify-between "
    >
      <div className="flex items-center justify-between">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name*"
            className="w-[300px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded"
          />

          {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email*"
            className="w-[300px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded"
          />

          {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone*"
            className="w-[300px] text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded"
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
        className="w-full h-52 text-md text-black/80 px-5 py-3 outline-none bg-gray-100 rounded"
      />
      {state?.errors && (
            <p className="text-sm text-red-500 py-1">{state.errors.message}</p>
          )}
      </div>
      <div className="w-full flex justify-end">
        <button
        type="submit"
          disabled={ispending}
          className="md:w-[215px] md:h-14 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
