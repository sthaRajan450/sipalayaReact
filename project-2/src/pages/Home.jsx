import React from "react";
import Hero from "../components/Hero";
import FeaturedCard from "../components/FeaturedCard";
import { IoPerson } from "react-icons/io5";
import { FaHatCowboy } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import Skill from "../components/Skill";
import Box from "../components/Box";

const courses = [
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/04/Blue-Illustrative-Employee-Training-Presentation-1-1.png",
    title: "Web Design | HTML , CSS & JS | 2 Months",
    originalprice: "14,999",
    salesprice: "9,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/UI-UX.png",
    title: "UI / UX Design | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Dart-Flutter.png",
    title: "App Development with Flutter | 2.5 Months",
    originalprice: "119,999",
    salesprice: "14,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Blue-Illustrative-Employee-Training-Presentation-1.png",
    title: "Java With Spring & Hibernate | 3 Months",
    originalprice: "24,999",
    salesprice: "19,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/03/Blue-Illustrative-Employee-Training-Presentation.png",
    title: "PHP With Laravel | 2.5 Months",
    originalprice: "14,999",
    salesprice: "9,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation.png",
    title: "Python With Data Science | 3 Months",
    originalprice: "24,999",
    salesprice: "19,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-5.png",
    title: "Frontend Development With React JS | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-2.png",
    title: "MERN Stack | 3 Months",
    originalprice: "29,999",
    salesprice: "19,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2024/02/Blue-Illustrative-Employee-Training-Presentation-3.png",
    title: "Full Stack with Node.js | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
  },
  {
    img: "https://sipalaya.com/wp-content/uploads/2023/10/Blue-Illustrative-Employee-Training-Presentation-4.png",
    title: "Digital Marketing Training | 2.5 Months",
    originalprice: "19,999",
    salesprice: "14,999",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />

      <div className="flex gap-x-10 px-20 py-8 w-full flex-wrap justify-center">
        <FeaturedCard
          card={{
            icon: <IoPerson />,
            title: "Be Your Own Boss",
            paragraph:
              "Embrace Independence: Be Your Own Boss and Shape Your Future!",
          }}
        />
        <FeaturedCard
          card={{
            icon: <FaHatCowboy />,
            title: "Reach Your Career Goals",
            paragraph:
              "Strive for Success: Reach Your Career Goals and Unlock Your Potential",
          }}
        />
        <FeaturedCard
          card={{
            icon: <GrUserManager />,
            title: "Get Hired",
            paragraph:
              "Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates",
          }}
        />
      </div>

      <Skill />

      <div className="px-20 py-7">
        <div className="flex items-center justify-between bg-[radial-gradient(at_center_center,_#D3D0FF_0%,_#442F90_100%)] px-10 py-10 rounded-2xl text-white">
          <div className="w-[50%]">
            <p className="text-2xl mb-5">Learn , Build & Implement</p>
            <h1 className="text-3xl">
              For Internship Guaranteed Physical / Online Live Classes
            </h1>
          </div>
          <div>
            <button className="bg-[#442F90] py-5 px-8 rounded-2xl cursor-pointer">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div className="px-10 py-7">
        <div className="flex flex-wrap gap-10 justify-center">
          {courses.map((course, index) => (
            <Box key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
