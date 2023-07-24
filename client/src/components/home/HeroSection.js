import React from "react";
import purpleCakeImg from "../../assets/purpleCake.PNG";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero w-full flex justify-center">
      <div className="pt-12 sm:pt-20 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex">
        <div className="w-1/2 hidden sm:flex flex-col gap-6 justify-center text-black">
          <h1 className="font-inter sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
            Where Every Slice Tells a{" "}
            <span className="text-mygreen">Sweet Story</span>
          </h1>
          <p className="font-poppins text-xxs md:text-xs lg:text-sm font-regular lg:w-full xl:w-5/6">
            Savor the joy of our eggless cakes, designed to make every
            celebration memorable.
            <span className="sm:hidden md:contents">
              {" "}
              From birthdays to weddings, our customized creations leave a
              lasting impression on your taste buds.
            </span>
          </p>
          <Link to="shop/Cakes">
            <button className="greenbg z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm">
              Shop now
            </button>
          </Link>
        </div>
        <div className="w-full relative sm:w-1/2 flex flex-col justify-center space-between pt-12 sm:pt-0 items-center">
          <div className="sm:hidden text-center">
            <h1 className="font-inter text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black">
              Where Every Slice Tells a{" "}<br/>
              <span className="text-mygreen">Sweet Story</span>
            </h1>
          </div>
          <img src={purpleCakeImg} alt="Purple Cake" className="h-96 pt-4 sm:pt-0" />
          <div className="absolute bottom-4 left-0  w-full flex justify-center sm:hidden ">
            <Link to="shop/Cakes">
              <button className="greenbg z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
