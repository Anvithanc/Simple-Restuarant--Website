import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select from a variety of delicious, chef-prepared dishes tailored to your taste and dietary preferences.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your delivery schedule to match your routine, whether it’s daily, weekly, or just once in a while. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your meals delivered quickly and fresh, straight to your doorstep. Never worry about long wait times again!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Discover the simple steps to get started and achieve your goals effortlessly. Follow our guide to see how it works!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
