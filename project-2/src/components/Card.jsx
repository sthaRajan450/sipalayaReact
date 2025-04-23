import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-box">
      <img
        src="https://sipalaya.com/wp-content/uploads/2024/04/Blue-Illustrative-Employee-Training-Presentation-1-1.png"
        alt=""
      />
      <div className="descriptions">
        <h4>
          <i class="ri-shining-2-line"></i>
          <i class="ri-shining-2-line"></i>
          <i class="ri-shining-2-line"></i>
          <i class="ri-shining-2-line"></i>
          <i class="ri-shining-2-line"></i>
        </h4>
        <h2>Web Design | HTML , CSS & JS | 2 Months</h2>
        <p>
          <span>By</span> <a href="#">Sipalaya InfoTech</a>
        </p>
      </div>
      <div className="price-and-cart">
        <span>Rs 9,999</span>
        <button>
          <i class="ri-shopping-cart-line"></i> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
