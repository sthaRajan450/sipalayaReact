import React from "react";
import Header from "../components/Header";
import "./Home.css";
import Hero from "../components/Hero";
import Card from "../components/Card";
const Home = () => {
  return (
    <div>
      <section className="section-1">
        <div className="heading">
          <Header />
          <Hero />
        </div>
        <div className="section1footer">
          <div className="box">
            <i className="ri-user-2-fill"></i>
            <div>
              <h3>Reach Your Career Goals</h3>
              <p>
                Strive for Success: Reach Your Career Goals and Unlock Your
                Potential
              </p>
            </div>
          </div>
          <div className="box">
            <i class="ri-team-fill"></i>
            <div>
              <h3>Be your own boss</h3>
              <p>
                Embrace Independence: Be Your Own Boss and Shape Your Future!
              </p>
            </div>
          </div>
          <div className="box">
            <i class="ri-user-follow-fill"></i>
            <div>
              <h3>Get Hired</h3>
              <p>
                Validate Your Skills, Open Doors: Earn Industry-Recognized
                Certificates!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <section className="sec-why-skill">
          <div className="sec-padding container">
            <h1>Why choose Sipalaya?</h1>
            <p>
              Seize the future: Secure your career with Sipalaya's cutting-edge
              resources and transformative learning experiences.
            </p>
          </div>
          <div className="main-container">
            <div className="left-content">
              <span className="why-skill-img">
                <img
                  src="https://sipalaya.com/wp-content/uploads/2024/03/abou.png"
                  alt=""
                />
              </span>
            </div>
            <div className="right-content">
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>5K+</p>
                  <span>Students Graduated</span>
                </div>
              </div>
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>3L-10L</p>
                  <span>Salary Range</span>
                </div>
              </div>
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>30+</p>
                  <span>Industry Mentors</span>
                </div>
              </div>
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>1:1</p>
                  <span>Career Support</span>
                </div>
              </div>
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>500+</p>
                  <span>Interview Coding Questions</span>
                </div>
              </div>
              <div className="card">
                <span className="img-bx">
                  <img
                    src="https://images.pexels.com/photos/5439445/pexels-photo-5439445.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </span>
                <div className="card-text">
                  <p>50+</p>
                  <span>Hiring Partners</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section2footer">
          <div className="row">
            <div className="col-md-6">
              <p>Learn, Build & Implement</p>
              <h1>For Internship Guaranteed Physical / Online Live Classes</h1>
            </div>
            <div className="col-md-6">
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </section>
    </div>
  );
};

export default Home;
