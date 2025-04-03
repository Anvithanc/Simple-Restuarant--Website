import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";

import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Customer Love</h1>
        <p className="primary-text">
        Hear from our happy customers who can’t get enough of our delicious, fresh meals! Their stories inspire us to keep delivering the best.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I was skeptical at first, but after my first order, I was hooked! The food is delicious, and delivery is super quick
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Adarsh</h2>
      </div>
    </div>
  );
};

export default Testimonial;
