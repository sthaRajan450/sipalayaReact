import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="flex px-30 py-12 gap-x-14 bg-[#F7F7F7]">
        <div className="w-[30%]">
          <img
            className="w-60 mb-3"
            src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
            alt=""
          />
          <p className="leading-10">
            At Sipalaya, We're here to help you thrive. Learn in-demand skills,
            get hired, and advance your career with us. Join today and start
            your journey to success. <br /> <b>WhatsApp / Phone</b>: 9851344071
            | 9806393939 <br /> <b>Gmail</b>: infotech@sipalaya.com
          </p>
        </div>
        <div className="w-[20%] flex flex-col leading-10">
          <h1 className="font-bold text-blue-800 text-2xl mb-2">QUICK LINKS</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/certificate-verification">Certificate Verification</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/refund-cancel-policy">Refund and Cancellation Policy</Link>
        </div>
        <div className="w-[25%] flex flex-col leading-10">
          <h1 className="font-bold text-blue-800 text-2xl mb-2">
            EXPLORE OUR COURSES
          </h1>
          <Link to="/">Python With Data Science | 3 Months</Link>
          <Link to="/">MERN Stack | 3 Months</Link>
          <Link to="/">Full Stack Web Development in Python</Link>
          <Link to="/">With Django | 3 Months</Link>
        </div>
        <div className="w-[25%]">
          <h1 className="font-bold text-blue-800 text-2xl mb-2">
            PAYMENT POWERED BY
          </h1>
          <div className="flex items-center">
            <img
              className="w-30"
              src="https://sipalaya.com/wp-content/uploads/2024/03/newLogo.ed7f73c800e12259be50.png"
              alt=""
            />
            <img
              className="w-30"
              src="https://sipalaya.com/wp-content/uploads/2024/03/esewa.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between  px-30 py-4 bg-blue-700 text-white">
        <div className="flex text-3xl gap-4">
          <FaFacebook />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>
        <div className="flex gap-5  ">
          <Link>Blogs</Link>
          <Link>Refund & Cancellation Policy</Link>
        </div>
      </div>
      <div className="border-t-2 border-t-white text-center bg-blue-700 text-white p-6  ">
        <p>&copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
