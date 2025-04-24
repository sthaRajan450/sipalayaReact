import React from "react";
import FeaturedCard from "../components/FeaturedCard";
import { IoGameController } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";
const About = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-800 mt-20 mb-10">
          Our Story
        </h1>
        <p className="text-blue-900 ">
          Make learning and teaching more effective with active
        </p>
        <p className="text-blue-900 ">
          participation and student collaboration
        </p>
      </div>

      <div className="px-60 py-7 mt-30 bg-[#001223] text-white"> 
        <h1 className="text-4xl font-bold text-[#FF00FF]">Background</h1>
        <p className="p-10 ">
          Sipalaya empowers professionals and students in the tech industry with
          tailored, top-notch training programs. Our expert instructors, with
          extensive industry experience, provide personalized support. Offering
          interactive, hands-on courses covering the latest technologies, we’ve
          helped countless individuals elevate their careers. Join us to achieve
          your goals confidently.
        </p>

        <h1 className="text-4xl font-bold text-[#FF00FF] mb-10">Mission & Vision</h1>
        <p>Mission:</p>
        <ol className="list-decimal ml-5 p-4">
          <li>
            Provide high-quality, comprehensive IT training and development
            programs.
          </li>
          <li>
            Empower professionals and students to advance their careers and
            achieve their goals.
          </li>
        </ol>
        <p>Vision:</p>
        <ol className="list-decimal ml-5 p-4">
          <li>
            Become the leading provider of IT training and development programs.
          </li>
          <li>
            Recognized for our commitment to excellence and helping students
            succeed in the tech industry.
          </li>
        </ol>
        <p>Approach:</p>
        <ol className="list-decimal ml-5 p-4">
          <li>Foster a positive, supportive learning environment.</li>
          <li>
            Keep pace with the latest technologies and industry best practices.
          </li>
          <li>
            Equip students with necessary tools and resources for success.
          </li>
          <li>
            Believe in and support every students potential for success in the
            tech industry.
          </li>
        </ol>

        <div>
          <h1 className="text-4xl font-bold text-[#FF00FF] text-center mt-20">Things that make us proud</h1>
          <div className="flex justify-between gap-10 p-20 flex-wrap ">
            <FeaturedCard
              card={{
                icon: <IoGameController />,
                title: "The success of our students",
                paragraph:
                  "Empowering success fuels our purpose. Proudly guiding countless professionals and students to reach their full potential.",
              }}
            />
            <FeaturedCard
              card={{
                icon: <MdStars />,
                title: "Our reputation in the industry",
                paragraph:
                  "We've earned trust as a leading IT training provider. Proud of our industry reputation and student impact.",
              }}
            />
            <FeaturedCard
              card={{
                icon: <GiPieChart />,
                title: "The quality of our courses",
                paragraph:
                  "We offer top-notch, personalized courses led by industry experts. Our interactive approach ensures optimal learning and skill development for every student.",
              }}
            />
            <FeaturedCard
              card={{
                icon: <FaRobot />,
                title: "The support of our team",
                paragraph:
                  "Our dedicated team ensures student success. Proudly supported by talented and passionate individuals.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
