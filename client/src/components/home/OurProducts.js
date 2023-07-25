import React from "react";
import CategoryImage1 from "../../assets/CategoryCakes.png";
import CategoryImage2 from "../../assets/CategoryCupcakes.png";
import CategoryImage3 from "../../assets/CategoryDonuts.png";
import CategoryImage4 from "../../assets/CategoryCakejars.png";
import CategoryImage5 from "../../assets/CategoryBrownie.JPEG";
import CategoryImage6 from "../../assets/CategoryCakesickle.JPEG";
import CategoryImage7 from "../../assets/CategoryHampers.JPEG";
import CategoryImage8 from "../../assets/CategoryDesserts.JPEG";

import { Link } from "react-router-dom";

function OurProducts() {
  const products = [
    { image: CategoryImage1, heading: "Cakes", category: "Cakes" },
    { image: CategoryImage2, heading: "Cupcakes", category: "Cupcakes" },
    { image: CategoryImage3, heading: "Donuts", category: "Donuts" },
    { image: CategoryImage4, heading: "Cakejars", category: "Cake jars" },
    { image: CategoryImage5, heading: "Brownies", category: "Brownies" },
    { image: CategoryImage6, heading: "Cakesickles", category: "Cakesickles" },
    { image: CategoryImage7, heading: "Hampers", category: "Hampers" },
    { image: CategoryImage8, heading: "Desserts", category: "Desserts" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="py-12 sm:py-24 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-black color-purple">
          Our Products
        </h1>
        <div className="flex flex-wrap justify-center mt-4 sm:mt-12 w-full gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 relative my-2 flex-item"
            >
              <Link to={`shop/${product.category}`}>
                <img
                  src={product.image}
                  alt={product.heading}
                  className="w-full rounded-md"
                />
                <div className="absolute bottom-0 left-0 w-full h-9 sm:h-12 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-md">
                  <h2 className="text-white text-md sm:text-xl font-inter font-semibold text-center ">
                    {product.heading}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
