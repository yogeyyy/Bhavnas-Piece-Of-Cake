import React from "react";
import BpocLogo from "../assets/Bpocgreen-transparent.png";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div
      id="contact"
      className="bg-white w-full flex items-center justify-center py-10"
    >
      <div className="w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-row flex-wrap items-center justify-center">
        <div className="w-1/2 sm:w-1/4">
          <img src={BpocLogo} alt={"Bhavna's Piece of Cake"} />
        </div>
        <div className="flex flex-col w-1/2 sm:w-1/6 md:w-1/6 lg:w-1/4 gap-2">
          <Link
            to={"aboutus"}
            className="font-poppins sm:text-xs md:text-sm font-semibold"
          >
            About us
          </Link>
          <Link
            to={"customize"}
            className="font-poppins sm:text-xs md:text-sm font-semibold"
          >
            Customize
          </Link>
          <Link
            to={"shop/Cakes"}
            className="font-poppins sm:text-xs md:text-sm font-semibold"
          >
            Shop
          </Link>
          <Link
            to={"aboutus"}
            className="font-poppins sm:text-xs md:text-sm font-semibold"
          >
            Reviews
          </Link>
        </div>
        <div className="w-10/12 sm:w-1/3 md:w-1/3 lg:w-1/4 flex flex-col gap-4">
          <div>
            <p className="sm:text-xs md:text-sm font-semibold">Address:</p>
            <p className="sm:text-xs md:text-sm ">
              18 Triveni Colony Main, Manik Bagh road, Indore, Madhya Pradesh,
              India,
              <br />
              Pincode: 452007
            </p>
          </div>
          <div>
            <p className="sm:text-xs md:text-sm font-semibold">Contact no.</p>
            <p className="sm:text-xs md:text-sm">+91 9977700313</p>
          </div>
        </div>
        <div className="w-10/12 sm:w-1/4 flex flex-col items-center justify-center gap-4 mt-6 sm:mt-0">
          <p className="font-semibold sm:text-xs md:text-sm">Follow us:</p>
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://www.instagram.com/bhavnas.piece.of.cake/">
              <InstagramIcon style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://www.facebook.com/piece.of.cake.indore/">
              <FacebookIcon style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://wa.me/+919977700313">
              <WhatsAppIcon style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
        <p className="mt-6">{"❤️ "}Developed by Yogit Nainani</p>
      </div>
    </div>
  );
}

export default Footer;
