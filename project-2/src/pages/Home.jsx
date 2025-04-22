import React from "react";
import Header from "../components/Header";
import "./Home.css";
import Hero from "../components/Hero";
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
            <div >
              <h3>Be your own boss</h3>
              <p>
                Embrace Independence: Be Your Own Boss and Shape Your Future!
              </p>
            </div>
          </div>
          <div className="box">
            <i className="ri-user-2-fill"></i>
            <div >
              <h3>Be your own boss</h3>
              <p>
                Embrace Independence: Be Your Own Boss and Shape Your Future!
              </p>
            </div>
          </div>
          <div className="box">
            <i className="ri-user-2-fill"></i>
            <div >
              <h3>Be your own boss</h3>
              <p>
                Embrace Independence: Be Your Own Boss and Shape Your Future!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
