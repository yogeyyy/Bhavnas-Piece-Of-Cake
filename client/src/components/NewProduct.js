import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

function NewProduct() {
  const [data, setData] = useState({
    productName: "",
    productImage: "",
    productType: "",
    basePrice: "",
    extraPrice: "",
    productWeight: "",
    productDesc: "",
    canBeCustomized: false,
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

  const handleCanBeCustomizedChange = (e) => {
    const { name, checked } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: checked,
      };
    });
  };

  const uploadImage = async (e) => {
    const imageData = await ImagetoBase64(e.target.files[0]);

    setData((prevData) => {
      return {
        ...prevData,
        productImage: imageData,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);

    const {
      productName,
      productImage,
      productType,
      basePrice,
      extraPrice,
      productWeight,
      productDesc,
      canBeCustomized,
    } = data;

    if (
      productName &&
      productImage &&
      basePrice &&
      extraPrice &&
      productWeight &&
      productType &&
      productDesc
    ) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadproduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      // console.log(fetchRes);
      toast(fetchRes.message);

      setData((prevData) => ({
        ...prevData,
        productImage: "",
        productName: "",
        productType: "",
        basePrice: "",
        extraPrice: "",
        productWeight: "",
        productDesc: "",
        canBeCustomized: false,
      }));
    } else {
      toast("Some fields are missing.");
    }
  };

  return (
    <div className="pb-10 pt-23 md:pt-24">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 w-full"
        onSubmit={handleSubmit}
      >
        <label htmlFor="productImage">
          Product Image
          <div className="w-full h-40 bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded flex items-center justify-center cursor-pointer">
            {data.productImage ? (
              <img
                src={data.productImage}
                alt="Uploaded Product"
                className="h-full"
              />
            ) : (
              <span className="text-5xl">
                <BiCloudUpload />
              </span>
            )}

            <input
              id="productImage"
              name="productImage"
              type={"file"}
              onChange={uploadImage}
              className="hidden"
              accept="image/*"
            />
          </div>
        </label>
        <label htmlFor="productName">Product Name</label>
        <input
          onChange={handleOnChange}
          type={"text"}
          name="productName"
          className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
          value={data.productName}
        />

        <label htmlFor="productType">Product Type</label>
        <select
          className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
          id="productType"
          name="productType"
          onChange={handleOnChange}
          value={data.productType}
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

        <div className="flex gap-3">
          <label htmlFor="basePrice">
            Base Price
            <input
              onChange={handleOnChange}
              type={"text"}
              name="basePrice"
              className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
              value={data.basePrice}
            />
          </label>
          <label htmlFor="ExtraPrice">
            Extra Price
            <input
              onChange={handleOnChange}
              type={"text"}
              name="extraPrice"
              className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
              value={data.extraPrice}
            />
          </label>
        </div>

        <label htmlFor="productWeight">Product Weight</label>
        <input
          onChange={handleOnChange}
          type={"text"}
          name="productWeight"
          className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
          value={data.productWeight}
        />

        <label htmlFor="canBeCustomized">
          <input
            id="canBeCustomized"
            name="canBeCustomized"
            type="checkbox"
            checked={data.canBeCustomized}
            onChange={handleCanBeCustomizedChange}
          />
          Can be customized?
        </label>

        <label htmlFor="productDesc">Product Description</label>
        <textarea
          onChange={handleOnChange}
          rows={3}
          name="productDesc"
          className="w-full bg-slate-200 px-2 py-1 mt-1 mb-2 focus-within:outline-purple-400 rounded"
          value={data.productDesc}
        ></textarea>

        <button type="submit" className="w-full purplegreenbg h-10 py-2 mt-2">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
