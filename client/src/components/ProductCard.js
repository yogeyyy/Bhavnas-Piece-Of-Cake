import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addCartItem, increaseQty, decreaseQty } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function ProductCard({
  productId,
  productImage,
  productName,
  productType,
  basePrice,
  extraPrice,
  productWeight,
  productDesc,
  canBeCustomized,
}) {
  const [pullShade, setPullShade] = useState(false);
  const handleMouseEnter = (e) => {
    setPullShade((preve) => !preve);
  };

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    if (userData.email) {
      dispatch(
        addCartItem({
          productId: productId,
          productImage: productImage,
          productName: productName,
          productType: productType,
          basePrice: basePrice,
          extraPrice: extraPrice,
          productWeight: productWeight,
          productDesc: productDesc,
          canBeCustomized: canBeCustomized,
        })
      );
    } else {
      toast("SignIn to add items in cart.");
      navigate("/signin");
    }
  };

  let unit = "";
  if (productType === "Cakes") {
    unit = "pounds";
  } else {
    unit = "pcs";
  }

  return (
    <div
      className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 relative my-3 rounded-md cursor-pointer flex-card"
    >
      <Link to={`/shop/${productType}/${productId}`}>
        <img
          src={productImage}
          alt={productName}
          className="w-full rounded-md"
        />
      </Link>
      {pullShade ? (
        <div
          onMouseLeave={handleMouseEnter}
          className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm flex flex-col justify-between rounded-md px-2"
        >
          
          <div className="flex flex-col text-center w-full h-3/4">
          <Link to={`/shop/${productType}/${productId}`} className="h-full">
              <div className="flex flex-col text-center align-center h-full justify-evenly">
                <h2 className="text-white text-xs sm:text-sm font-inter font-regular">
                  Quantity:{" "}
                  {productWeight === "NA"
                    ? "As Shown"
                    : productWeight + " " + unit}
                </h2>
                <h2 className="text-white text-sm sm:text-lg xl:text-xl font-inter font-semibold">
                  {productName}
                </h2>
                <h2 className="text-white text-sm md:text-md font-inter mr-1 sm:mr-2">
                  ₹{" "}{parseInt(basePrice) + parseInt(extraPrice)}
                </h2>
                <p className="text-xs md:text-md font-inter">More Information</p>
              </div>
              </Link>
          </div>
          
          <div className="w-full flex flex-col justify-center items-center self-end h-1/4 pb-2 sm:pb-4">
            <button
              className="greenbg z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div
          onMouseEnter={handleMouseEnter}
          className="absolute bottom-0 left-0 w-full h-12 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm flex flex-row space-between items-center rounded-md px-1 sm:px-2"
        >
          <h2 className="text-white text-xs font-inter font-semibold w-3/4">
            {productName}
          </h2>
          <h2 className="text-white text-xs font-inter font-semibold ">
            ₹&nbsp;{parseInt(basePrice) + parseInt(extraPrice)}
          </h2>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
