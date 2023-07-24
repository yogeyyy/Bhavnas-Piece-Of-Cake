import React from "react";
import HeroSection from "../components/home/HeroSection";
import OurProducts from "../components/home/OurProducts";
import HowToOrder from "../components/home/HowToOrder";
import NewProducts from "../components/home/NewProducts";
import Review from "../components/home/Review";

function Home() {
  return (
    <>
      <HeroSection />
      <OurProducts />
      <HowToOrder />
      <NewProducts />
      <Review />
    </>
  );
}

export default Home;
