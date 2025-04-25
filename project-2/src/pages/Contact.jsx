import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 text-center p-5">
        Contact Us
      </h1>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4810592043887!2d85.34317037550824!3d27.671522976203118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1745481890583!5m2!1sen!2snp"
          width="900"
          height="450"
          className="m-auto"
        ></iframe>
      </div>

      <div className="flex w-full justify-between p-20 flex-wrap">
        <form
          className="flex flex-col w-full md:w-[60%] px-5 md:px-20 py-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name">Full Name:</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label htmlFor="contact">Contact:</label>
          <input
            {...register("contact", { required: "Contact number is required" })}
            type="text"
            id="contact"
          />
          {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

          <label htmlFor="email">Email:</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            type="email"
            id="email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            id="message"
            rows={4}
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <button
            className="w-fit mt-5 bg-black text-white px-5 py-3 rounded-2xl"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className="w-full md:w-[25%] mt-10 md:mt-0">
          <div className="contactfooter">
            <h1>Call Us</h1>
            <p>+977 9818968546</p>
            <p>+977 9860552717</p>
          </div>
          <div className="contactfooter">
            <h1>Email Us</h1>
            <p>infotech@sipalaya.com</p>
            <p>sipalayainfotech01@gmail.com</p>
          </div>
          <div className="contactfooter">
            <h1>Visit Us</h1>
            <p>Nearby CCRC College</p>
            <p>Balkumari-Bridge Koteshwor,</p>
            <p>Kathmandu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
