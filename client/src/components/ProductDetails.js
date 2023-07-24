import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { toast } from "react-hot-toast";

function ProductDetails() {
  const dispatch = useDispatch();
  const paramsid = useParams();
  // console.log(paramsid.productId);
  const productData = useSelector((state) => state.product.productList);

  const userData = useSelector((state) => state.user);

  const productDisplay = productData.filter(
    (product) => product._id === paramsid.productId
  )[0];

  const handleAddToCart = (e) => {
    if (userData.email) {
      dispatch(addCartItem(productDisplay));
    } else {
      toast("SignIn to add items in cart.");
    }
  };

  let unit = "";
  if (productDisplay.productType === "Cakes") {
    unit = "pounds";
  } else {
    unit = "pcs";
  }

  return (
    <div className="w-full flex justify-center">
      <div className="py-20 sm:py-28 w-11/12 md:w-10/12 lg:w-5/6 2xl:w-4/6 flex flex-col lg:flex-row gap-10 ">
        <div className="w-full lg:w-2/6 rounded-md cursor-pointer">
          <img
            src={productDisplay.productImage}
            alt={productDisplay.productHeading}
            className="rounded-md drop-shadow shadow sm:w-1/2 md:w-2/3 lg:w-full m-auto"
          />
        </div>
        <div className="w-full w-full lg:w-4/6">
          <p>{productDisplay.productType}</p>
          <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-semibold">
            {productDisplay.productName}
          </h1>

          <p className="text-xs my-4 font-bold text-mygreen">
            Min. Weight:{" "}
            <span className="text-base text-black font-normal">
              {productDisplay.productWeight === "NA"
                ? "As Shown"
                : productDisplay.productWeight + " " + unit}
            </span>
          </p>

          <p className="text-xs mt-4 font-bold text-mygreen">Price:</p>
          <p className="text-md pr-8 text-justify font-semibold text-xl md:text-2xl lg:text-2xl">
            ₹{" "}
            {parseInt(productDisplay.basePrice) +
              parseInt(productDisplay.extraPrice)}
          </p>

          <div className="flex gap-6 mt-4">
            <button
              className="greenbg z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm xl:my-2 2xl:my-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <p className="text-xs my-4 font-bold text-mygreen">Description:</p>
          <p className="text-base pr-8 text-justify">
            {productDisplay.productDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
