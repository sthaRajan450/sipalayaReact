import React from "react";
import Card from "./Card";

function Skill() {
  return (
    <div className="px-30 py-7">
      <h1 className="text-center text-5xl font-bold py-5">
        Why choose Sipalaya?
      </h1>
      <p className="text-center text-[18px] text-blue-950">
        Seize the future: Secure your career with Sipalaya's cutting-edge
        resources and transformative learning experiences.
      </p>
      <div className="flex justify-around">
        <div className="flex w-[50%]">
          <img
            className="w-[300px]"
            src="https://sipalaya.com/wp-content/uploads/2024/03/abou.png"
            alt=""
          />
        </div>
        <div className="flex justify-between flex-wrap">
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "30+",
              p: "Industry Mentors",
            }}
          />
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "5K+",
              p: "Students Graduated",
            }}
          />
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "1:1",
              p: "Career Support",
            }}
          />
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "3L-10L",
              p: "Salary Range",
            }}
          />
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "500+",
              p: "Interview Coding Questions",
            }}
          />
          <Card
            card={{
              img: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
              h1: "50+",
              p: "Hiring Partners",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
