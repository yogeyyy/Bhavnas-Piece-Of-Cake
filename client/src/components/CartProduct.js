import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";
import { Divider } from "@mui/material";

function CartProduct({
  productId,
  productImage,
  productName,
  productType,
  basePrice,
  extraPrice,
  productWeight,
  productDesc,
  canBeCustomized,
  productQty,
  productTotal,
}) {
  const dispatch = useDispatch();
  let unit = "";
  if (productType === "Cakes") {
    unit = "pounds";
  } else {
    unit = "pcs";
  }
  return (
    <>
      <div className="w-full md:h-24 lg:h-36 xl:h-40 hidden sm:flex flex-col sm:flex-row rounded-md">
        {/* Desktop */}
        <div className="w-1/4 rounded-md">
          <img
            src={productImage}
            alt={productName}
            className="rounded-md h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex flex-col justify-between sm:pl-4 md:pl-2">
          <div className="lg:mt-2">
            <p className="text-xs">{productType}</p>
            <h1 className="font-inter md:text-sm lg:text-xl font-semibold">
              {productName}
            </h1>
          </div>
          <div className="mb-2">
            <p className="text-xs md:my-1 lg:my-4 font-bold text-mygreen">
              Min. Weight:{" "}
              <span className="text-xs text-black font-normal">
                {productWeight === "NA"
                  ? "As Shown"
                  : productWeight + " " + unit}
              </span>
            </p>

            <p className="text-xs md:mt-2 lg:mt-4 font-bold text-mygreen">
              Price:{" "}
              <span className="text-xs text-black font-normal">
                ₹ {parseInt(basePrice) + parseInt(extraPrice)}
              </span>
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 flex md:flex-col lg:flex-row justify-evenly ">
          <div className="lg:w-1/6 text-mygreen flex flex-row justify-center items-center text-xl rounded-md sm:ml-2 md:ml-0">
            <button>
              <IndeterminateCheckBoxIcon
                onClick={() => dispatch(decreaseQty(productId))}
              />
            </button>
            <p className="px-2 text-black">{productQty}</p>
            <button onClick={() => dispatch(increaseQty(productId))}>
              <AddBoxIcon />
            </button>
          </div>
          <div className="lg:w-1/6 text-mygreen flex flex-col justify-center items-center text-xl rounded-md sm:ml-4 md:ml-0">
            <p className="text-xs mt-4 font-bold text-mygreen">Amount: </p>
            <p className="md:text-lg lg:text-xl text-black font-normal">
              ₹{productTotal}
            </p>
          </div>
        </div>
        <div className="w-1/8 text-mygreen flex flex-row justify-center items-center text-xl rounded-md sm:ml-2 md:ml-0">
          <button onClick={() => dispatch(deleteCartItem(productId))}>
            <ClearIcon />
          </button>
        </div>
      </div>

      <div className="w-full flex sm:hidden flex-col sm:flex-row rounded-md">
        {/* Mobile */}
        <div className="flex flex-row">
          <div className="w-1/3 rounded-md">
            <img
              src={productImage}
              alt={productName}
              className="rounded-md h-full object-cover"
            />
          </div>
          <div className="w-full w-2/3 flex flex-col pl-4 md:pl-2">
            <div className="flex flex-col justify-evenly h-full">
              <p className="text-xs">{productType}</p>
              <h1 className="font-inter font-semibold">{productName}</h1>
            
              <p className="text-xs my-1 lg:my-4 font-bold text-mygreen">
                Min. Weight:{" "}
                <span className="text-sm text-black font-normal">
                  {productWeight === "NA"
                    ? "As Shown"
                    : productWeight + " " + unit}
                </span>
              </p>

              <p className="text-xs mt-1 lg:mt-4 font-bold text-mygreen">
                Price:{" "}
                <span className="text-sm text-black font-normal">
                  ₹ {parseInt(basePrice) + parseInt(extraPrice)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex md:flex-col lg:flex-row justify-evenly ">
          <div className="w-1/3 text-mygreen flex flex-row justify-center items-center text-xl rounded-md sm:ml-2 md:ml-0">
            <button>
              <IndeterminateCheckBoxIcon
                onClick={() => dispatch(decreaseQty(productId))}
              />
            </button>
            <p className="px-2 text-black">{productQty}</p>
            <button onClick={() => dispatch(increaseQty(productId))}>
              <AddBoxIcon />
            </button>
          </div>
          <div className="w-1/2 text-mygreen flex flex-row pl-4 items-center rounded-md sm:ml-4 md:ml-0 text-center">
            <p className="text-xs mr-1 font-bold text-mygreen">Amount: </p>
            <p className="text-black font-normal">
              ₹{productTotal}
            </p>
          </div>

          <div className="w-1/6 text-mygreen flex flex-row justify-center items-center text-xl rounded-md sm:ml-2 md:ml-0">
            <button onClick={() => dispatch(deleteCartItem(productId))}>
              <ClearIcon />
            </button>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
    </>
  );
}

export default CartProduct;
