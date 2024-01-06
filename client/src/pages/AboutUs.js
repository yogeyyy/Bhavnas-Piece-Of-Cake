import React from "react";
import AdminsImg from "../assets/admins.jpg";

function AboutUs() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="py-20 sm:py-24 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-black color-purple">About us</h1>
        <div className="flex flex-col lg:flex-row justify-center mt-12 w-full gap-8">
          <div className="sm:w-full lg:w-1/3 rounded-md flex justify-center">
            <img
              src={AdminsImg}
              alt={"Admins"}
              className="rounded-md sm:w-3/4 md:w-1/2 lg:w-full drop-shadow shadow-md"
            />
          </div>
          <div className="md:w-full lg:w-2/3 text-justify">
            <p className="text-base xl:text-sm text-black font-normal">
              Welcome to Bhavna's Piece of Cake, a delightful home bakery
              founded by the dynamic mother-son duo, Bhavna Nainani and Yogit
              Nainani, nestled in the heart of Indore, India. Our passion for
              baking and creating exquisite treats has led us to curate a
              delectable array of products, ranging from mouthwatering cakes,
              fluffy cupcakes, irresistible brownies, and delectable cake jars
              to an assortment of delightful desserts.
              <br />
              What sets us apart is our unwavering commitment to delivering
              nothing but the best. Each and every one of our creations is
              freshly baked with love, ensuring an unparalleled taste that
              leaves you craving for more. We take immense pride in offering a
              diverse range of flavors and designs that can be fully customized
              to cater to your unique preferences and special occasions.
              <br />
              At Bhavna's Piece of Cake, we embrace the values of inclusivity
              and cater to every palate. Our entire selection is 100% eggless,
              making it a perfect choice for all our vegetarian patrons without
              compromising on taste or quality.
              <br />
              Our journey goes beyond just baking; it revolves around building
              meaningful connections with our customers. We cherish your
              feedback and constantly strive to exceed your expectations.
              Connect with us on our social platforms - Instagram, Facebook, and
              Whatsapp - to stay updated with our latest creations, special
              offers, and more.
              <br />
              Thank you for being a part of our sweet adventure. Whether you're
              celebrating milestones, creating memories, or simply indulging in
              life's little joys, Bhavna's Piece of Cake is here to add a touch
              of sweetness to every moment. Come, join us on this delectable
              journey, and experience the essence of homemade goodness like
              never before.
              
              <br />
              Love,<br/> 
              Bhavna & Yogit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
