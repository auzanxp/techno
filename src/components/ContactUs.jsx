import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div
      id="contactus"
      className="w-full container mx-auto mb-8 px-0 md:px-6 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-items-center items-center px-4 md:px-0 mb-2">
        <h1 className="text-center mb-4 font-extrabold text-primary text-2xl">
          Contact Us
        </h1>
        <p className="text-center w-full lg:w-1/2 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          deleniti ipsam alias obcaecati id optio voluptates debitis facilis
          minima illo. Lorem ipsum. Obcaecati ad est beatae quo architecto
          accusantium?
        </p>
      </div>
      <div className="flex w-full h-auto justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
