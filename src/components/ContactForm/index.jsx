import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  console.log(import.meta.env.VITE_APP_SERVICE_KEY);
  console.log(import.meta.env.VITE_APP_TEMPLATE_ID);
  console.log(import.meta.env.VITE_APP_PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_KEY || "secret",
        import.meta.env.VITE_APP_TEMPLATE_ID || "secret",
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY || "secret",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col col-span-2 gap-8 w-full"
      id="contact"
    >
      <div className="flex flex-col gap-5 ">
        <label className="text-xl pl-2 text-textColor1 ">Name</label>
        <input
          type="text"
          name="user_name"
          className="p-3 outline-none shadow-sm rounded-md bg-bgColor2 text-textColor1"
        />
      </div>
      <div className="flex flex-col gap-5 ">
        <label className="text-xl pl-2 text-textColor1 ">Email</label>
        <input
          type="email"
          name="user_email"
          className="p-3 outline-none shadow-sm rounded-md bg-bgColor2 text-textColor1"
        />
      </div>
      <div className="flex flex-col gap-5 ">
        <label className="text-xl pl-2 text-textColor1 ">Message</label>
        <textarea
          name="message"
          className="p-3 outline-none shadow-sm rounded-md bg-bgColor2 text-textColor1"
        />
      </div>

      <button
        type="submit"
        value="Send"
        className="bg-accent max-w-max px-5 py-3 rounded-md ml-1"
      >
        Send Message
      </button>
    </form>
  );
}
