import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { Divider } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Link } from "react-router-dom";

function Cart() {
  const userData = useSelector((state) => state.user);
  const [deliveryDetails, setDeliveryDetails] = useState({
    delivery: "Takeaway",
    address: "",
    mobileno: "",
    name: userData.firstName + " " + userData.lastName,
  });

  const productCartItem = useSelector((state) => state.product.cartItem);

  const grandTotal = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // console.log(deliveryDetails);
  };

  const handleRadioChange = (event) => {
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      delivery: event.target.value,
    }));
    // console.log(deliveryDetails);
  };

  // Function to generate the WhatsApp message link
  const generateWhatsAppLink = () => {
    const phoneNumber = "+919977700313"; // Replace this with your WhatsApp number
    const message = encodeURIComponent(getCartMessage());
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // Function to get the cart message to be sent via WhatsApp
  const getCartMessage = () => {
    let i = 1;
    const cartMessage = productCartItem
      .map((product) => {
        return `${i++}. ${product.productName} - Type: ${
          product.productType
        }, Quantity: ${product.qty}, Price: ₹${product.total}/-`;
      })
      .join("\n");

    if (deliveryDetails.delivery === "Takeaway") {
      return `Name: ${deliveryDetails.name}\nDelivery: ${deliveryDetails.delivery}\n\nHey! I want to order the following items: \n\n${cartMessage}\n\n Total items: *${totalQty}*, Total Amount: *₹${grandTotal}*`;
    } else {
      return `Name: ${deliveryDetails.name}\nDelivery: ${deliveryDetails.delivery}\nAddress: ${deliveryDetails.address}\nMobile no.: ${deliveryDetails.mobileno}\n\nHey! I want to order the following items: \n\n${cartMessage}\n\n Total items: *${totalQty}*, Total Amount: *₹${grandTotal}*`;
    }
  };


  const handleCheckout = () => {
    const whatsappLink = generateWhatsAppLink();
    window.location.href = whatsappLink;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="py-20 w-11/12 md:w-10/12 lg:w-5/6 2xl:w-4/6 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="md:mt-8">
            <h1 className="font-inter md:text-lg lg:text-xl xl:text-2xl font-semibold text-mygreen mb-4">
              Your Cart
            </h1>
            <Divider />
          </div>
          {productCartItem[0] ? (
            <div className="flex flex-col gap-4 mt-4 lg:px-4">
              {productCartItem.map((product) => {
                return (
                    
                    <CartProduct
                      key={product.productId}
                      productId={product.productId}
                      productName={product.productName}
                      productImage={product.productImage}
                      productType={product.productType}
                      basePrice={product.basePrice}
                      extraPrice={product.extraPrice}
                      productWeight={product.productWeight}
                      productDesc={product.productDesc}
                      canBeCustomized={product.canBeCustomized}
                      productQty={product.qty}
                      productTotal={product.total}
                    />
                  
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-96">
              <ProductionQuantityLimitsIcon
                style={{ fontSize: "10rem", color: "#08979d" }}
              />
              <h1 className="text-3xl font-inter font-semibold">
                Cart is empty!
              </h1>
              <Link to={"/shop/Cakes"}>
                <button
                  className="greenbg z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm my-4"
                >
                  Shop
                </button>
              </Link>
            </div>
          )}
        </div>
        {productCartItem[0] && (
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-md px-4 lg:px-6">
            <div className="mt-4 md:mt-8">
              <h1 className="font-inter sm:text-lg lg:text-xl xl:text-2xl font-semibold text-mygreen mb-4">
                Summary
              </h1>
              <Divider />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center my-2">
                <p className="text-sm font-bold text-mygreen">Total items:</p>
                <p className="lg:text-lg xl:text-xl text-black">{totalQty}</p>
              </div>
              <div className="flex flex-row justify-between items-center my-2">
                <p className="text-sm font-bold text-mygreen">Total Amount:</p>
                <p className="lg:text-lg xl:text-xl text-black">₹ {grandTotal}</p>
              </div>
            </div>
            <form className="bg-white flex flex-col gap-6">
              <div className="radio flex sm:flex-col lg:flex-row justify-between items-center">
                <label htmlFor="Takeaway" className="lg:text-xs xl:text-base">
                  <input
                    type="radio"
                    value="Takeaway"
                    name="delivery"
                    checked={deliveryDetails.delivery === "Takeaway"}
                    onChange={handleRadioChange}
                  />
                  Takeaway
                </label>
                <label htmlFor="HomeDelivery" className="lg:text-xs xl:text-base">
                  <input
                    type="radio"
                    value="Home Delivery"
                    name="delivery"
                    checked={deliveryDetails.delivery === "Home Delivery"}
                    onChange={handleRadioChange}
                  />
                  Home Delivery
                </label>
              </div>
              <div>
                <p className="text-xs italic">
                  * Delivery available only in Indore, India
                </p>
                <p className="text-xs italic">
                  ** Extra Delivery charges are applicable based on the address
                </p>
              </div>
              {deliveryDetails.delivery === "Home Delivery" && (
                <div>
                  <label htmlFor="address">Address</label>
                  <textarea
                    onChange={handleOnChange}
                    rows={3}
                    name="address"
                    className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                    value={deliveryDetails.address}
                  ></textarea>

                  <label htmlFor="mobileno">Mobile No.</label>
                  <input
                    type={"text"}
                    id="mobileno"
                    name="mobileno"
                    className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                    value={deliveryDetails.mobileno}
                    onChange={handleOnChange}
                  />
                </div>
              )}
            </form>
            <button
              className="greenbg uppercase rounded w-full my-6 py-2 shadow-md font-poppins font-semibold text-sm"
              onClick={handleCheckout}
            >
              Place Order <WhatsAppIcon style={{ fontSize: "1rem" }} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
