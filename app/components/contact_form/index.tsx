"use client";
import React, { useState } from "react";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  let _name: any;
  let _value: any;
  function handleFormData(e: any) {
    _name = e.target.name;
    _value = e.target.value;
    setFormData({ ...formData, [_name]: _value });
  }
  function handleFormSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", number: "", email: "", message: "" });
  }
  return (
    <form
      onSubmit={(e) => handleFormSubmit(e)}
      className=" flex flex-col items-start justify-between w-full bg-bg_color_tertiary p-6 rounded-md gap-4"
    >
      {/* <h3 className="w-full text-4xl jost_regular font-bold">
        Request a Callback
      </h3> */}
      <input
        className=" w-full text-base  focus:outline-none p-2 rounded-md max-md:text-sm"
        type="text"
        placeholder="Name"
        value={formData.name}
        name="name"
        onChange={(e) => handleFormData(e)}
        required
      />
      <input
        className=" w-full  text-base focus:outline-none p-2 rounded-md max-md:text-sm"
        type="text"
        placeholder="Number"
        value={formData.number}
        name="number"
        onChange={(e) => handleFormData(e)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className=" w-full  text-base focus:outline-none p-2 rounded-md max-md:text-sm"
        value={formData.email}
        name="email"
        onChange={(e) => handleFormData(e)}
        required
      />
      <textarea
        rows={10}
        placeholder="Message"
        className=" resize-none w-full text-base focus:outline-none p-2 rounded-md max-md:text-sm"
        value={formData.message}
        name="message"
        onChange={(e) => handleFormData(e)}
      ></textarea>
      <button
        type="submit"
        className=" text-white border-none rounded-3xl text-center bg-bg_color_primary px-6 py-2 text-sm font-bold cursor-pointer select-none hover:underline max-md:text-xs"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
