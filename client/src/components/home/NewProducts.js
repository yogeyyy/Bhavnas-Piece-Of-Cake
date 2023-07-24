import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

function NewProducts() {
  const productData = useSelector((state) => state.product.productList);
  // console.log(productData);
  const newProductList = productData.slice(
    productData.length - 4,
    productData.length
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="py-12 sm:py-24 sm:w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter text-mygreen font-black">
          New Products
        </h1>
        {newProductList[0] ? (
          <div className="flex flex-wrap justify-center mt-4 sm:mt-12 w-full gap-4 sm:gap-6">
            {newProductList.map((product, index) => (
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
            ))}
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center mt-12 w-full h-64">
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
  );
}

export default NewProducts;
