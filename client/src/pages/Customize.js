import React, { useState } from "react";
import CustomizeImg from "../assets/Customize.PNG";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Customize() {
  const [data, setData] = useState({
    customizeName: "",
    customizeType: "",
    customizeQty: "",
    customizeDesc: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const generateWhatsAppLink = () => {
    const phoneNumber = "+919977700313"; // Replace this with your WhatsApp number
    const message = encodeURIComponent(generateWhatsAppMessage());
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  function generateWhatsAppMessage() {
    const { customizeName, customizeType, customizeQty, customizeDesc } = data;
    return `Hey! I want to get something customized:\n\nProduct Name: ${customizeName}\nProduct Type: ${customizeType}\nWeight / pcs: ${customizeQty}\nProduct Description: ${customizeDesc}`;
  }

  const handleCheckout = () => {
    const whatsappLink = generateWhatsAppLink();
    window.location.href = whatsappLink;
  };

  return (
    <div className="py-20 sm:py-28 md:py-28 flex justify-center items-center w-full">
      <div className="bg-white w-11/12 md:w-10/12 lg:w-5/6 2xl:w-4/6 flex flex-row rounded-md shadow-md">
        <div className="hidden md:flex w-45p purplebg flex-col items-center justify-center text-center lg:py-10 px-10 gap-4 rounded-md">
          <h1 className="md:text-2xl lg:text-3xl font-inter text-black font-bold">
            Create Your <br /> Perfect Treat!
          </h1>
          <p className="text-xs">
            Design your dream treat and indulge in a personalized delight
            crafted exclusively for you.
          </p>
          <img src={CustomizeImg} alt={"Purple Cake"} className="w-3/4" />
        </div>
        <div className="w-55p flex flex-col items-center justify-center rounded-md">
          <div className="flex flex-col justify-center items-center md:w-4/5 lg:w-3/5 py-10">
            <div className="flex md:hidden flex-col gap-2 justify-center items-center pb-4 w-4/5 sm:w-3/5 text-center">
              <h1 className="text-2xl lg:text-3xl font-inter text-black font-bold">
                Create Your Perfect Treat!
              </h1>
              <p className="text-sm">
                Design your dream treat and indulge in a personalized delight
                crafted exclusively for you.
              </p>
            </div>

            <form className="py-3 w-4/5 sm:w-3/5 md:w-full">
              <label htmlFor="customizeName">Product Name</label>
              <input
                type={"text"}
                id="customizeName"
                name="customizeName"
                className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                value={data.customizeName}
                onChange={handleOnChange}
              />

              <label htmlFor="customizeType">Product Type</label>
              <select
                className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                id="customizeType"
                name="customizeType"
                onChange={handleOnChange}
                value={data.customizeType}
              >
                <option value={"Other"}>Select Type</option>
                <option value={"Cakes"}>Cakes</option>
                <option value={"Cupcakes"}>Cupcakes</option>
                <option value={"Brownies"}>Brownies</option>
                <option value={"Cake jars"}>Cake jars</option>
                <option value={"Cakesickle"}>Cakesickle</option>
                <option value={"Hamper"}>Hamper</option>
                <option value={"Desserts"}>Desserts</option>
                <option value={"Donuts"}>Donuts</option>
              </select>

              <label htmlFor="customizeQty">Weight / pcs</label>
              <input
                type={"text"}
                id="customizeQty"
                name="customizeQty"
                className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                value={data.customizeQty}
                onChange={handleOnChange}
              />

              <label htmlFor="customizeDesc">Product Description</label>
              <textarea
                onChange={handleOnChange}
                rows={5}
                name="customizeDesc"
                className="w-full bg-whitepurple px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
                value={data.customizeDesc}
              ></textarea>
            </form>
            <div className="flex justify-center items-center">
              <button
                className="bg-lavender-button z-1 uppercase rounded w-32 py-2 shadow-md font-poppins font-semibold text-sm"
                onClick={handleCheckout}
              >
                Inquire <WhatsAppIcon style={{ fontSize: "1rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;
