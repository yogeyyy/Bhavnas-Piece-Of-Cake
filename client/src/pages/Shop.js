import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.productList);
  const requestedCategory = useParams();
  const [activeCategory, setActiveCategory] = useState(
    requestedCategory.category
  );

  const categoryData = {
    Cakes: productData.filter((cake) => cake.productType === "Cakes"),
    Cupcakes: productData.filter(
      (cupcake) => cupcake.productType === "Cupcakes"
    ),
    Brownies: productData.filter(
      (brownie) => brownie.productType === "Brownies"
    ),
    Donuts: productData.filter((donut) => donut.productType === "Donuts"),
    Cakesickles: productData.filter(
      (cakesickle) => cakesickle.productType === "Cakesickle"
    ),
    "Cake jars": productData.filter(
      (cakejar) => cakejar.productType === "Cake jars"
    ),
    Hampers: productData.filter((hamper) => hamper.productType === "Hamper"),
    Desserts: productData.filter(
      (dessert) => dessert.productType === "Desserts"
    ),
  };

  const currentCategoryData = categoryData[activeCategory];
  const currentCategoryDataReversed = currentCategoryData.slice().reverse();

  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
      setActiveCategory(selectedCategory);
      navigate(`/shop/${selectedCategory}`);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/shop/${category}`);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="py-12 sm:py-24 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <div className="flex sm:w-1/4 md:hidden flex-row rounded-md text-center bg-lavender self-start my-6">
          <select
            className="font-inter w-full bg-lavender px-2 py-2 outline-0 rounded"
            id="productType"
            name="productType"
            value={activeCategory}
            onChange={handleSelectChange}
          >
            {Object.keys(categoryData).map((category) => (
              <option key={category} value={category} className="font-inter w-full bg-lavender px-2 py-2 outline-0 rounded">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:flex w-full flex-row justify-evenly rounded-md text-center bg-lavender mt-8">
          {Object.keys(categoryData).map((category) => (
            <p
              key={category}
              className={`w-full bg-lavender-button p-2 rounded-md cursor-pointer md:text-sm lg:text-md ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </p>
          ))}
        </div>
        
        <div className="w-full flex flex-wrap gap-6 pt-6">
        {currentCategoryDataReversed[0] ? (
          currentCategoryDataReversed.map((product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              productName={product.productName}
              productImage={product.productImage}
              productType={product.productType}
              basePrice={product.basePrice}
              extraPrice={product.extraPrice}
              productWeight={product.productWeight}
              productDesc={product.productDesc}
              canBeCustomized={product.canBeCustomized}
            />
          ))
        ) : (
          <div className="flex gap-2 items-center justify-center mt-12 w-full h-96">
            <div className="flex flex-col text-center">
              <span className="text-sm font-semibold py-4">
                Loading products ...
              </span>
              <div className="loader"></div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
