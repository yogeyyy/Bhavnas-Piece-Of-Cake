import React, { useEffect, useState } from "react";
import BrandLogo from "../assets/Bpocblack-transparent.png";
import { Link, useLocation} from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { emptyCart } from "../redux/productSlice";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  // eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setNavbarBackground(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const userData = useSelector((state) => state.user);
  // console.log(userData);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleShowLinks = () => {
    setShowLinks((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    dispatch(emptyCart());
    toast("Logged out Successfully!");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  const scrollToReviews = () => {
    scroll.scrollTo("reviews", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header
      className={`fixed w-full h-12 sm:h-16 md:h-20 px-4 z-50 ${
        navbarBackground ? "bg-white" : ""
      }`}
    >
      <div className="flex sm:justify-between md:justify-center h-full w-full">
        {/* Desktop */}
        <nav className="hidden md:flex items-center justify-center md:space-x-8 lg:space-x-16 xl:space-x-20">
          <Link
            to={"aboutus"}
            className="font-poppins md:text-xs xl:text-sm font-semibold uppercase"
          >
            About us
          </Link>
          <ScrollLink
            to="contact"
            smooth
            duration={800}
            className="font-poppins md:text-xs xl:text-sm font-semibold uppercase cursor-pointer"
            onClick={scrollToReviews}
          >
            Contact{" "}
          </ScrollLink>
          <Link
            to={"/reviews"}
            className="font-poppins md:text-xs xl:text-sm font-semibold uppercase"
          >
            Reviews
          </Link>

          <Link to={""} className="flex items-start h-full self-start">
            <img
              src={BrandLogo}
              alt="Bhavna's Piece Of Cake"
              className="h-full"
            />
          </Link>
          <Link
            to={"shop/Cakes"}
            className="font-poppins md:text-xs xl:text-sm font-semibold uppercase"
          >
            Shop
          </Link>
          <Link
            to={"customize"}
            className="font-poppins md:text-xs xl:text-sm font-semibold uppercase"
          >
            Customize
          </Link>
          <div className="flex items-center space-x-4">
            <div>
              <Link to={"cart"}>
                <Badge
                  badgeContent={cartItemNumber.length}
                  color="secondary"
                  className="cursor-pointer"
                >
                  <ShoppingCartOutlinedIcon id="icon" />
                </Badge>
              </Link>
            </div>
            <div onClick={handleShowMenu}>
              <div className="cursor-pointer rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? (
                  <img
                    src={userData.image}
                    className="h-8 w-8"
                    alt="User display"
                  />
                ) : (
                  <AccountCircleOutlinedIcon />
                )}
              </div>

              {showMenu && (
                <div className="absolute bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                  {userData.email === process.env.REACT_APP_ADMIN && (
                    <Link
                      to={"newproduct"}
                      className="whitespace-nowrap cursor-pointer lg:text-xs xl:text-sm"
                    >
                      New Product
                    </Link>
                  )}

                  {userData.email ? (
                    <p
                      className="cursor-pointer lg:text-xs xl:text-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  ) : (
                    <Link
                      to={"signin"}
                      className="whitespace-nowrap cursor-pointer"
                    >
                      SignIn
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="flex flex-row justify-between items-center md:hidden w-full">
          <div className="w-20">
            <MenuIcon onClick={handleShowLinks} />
          </div>
          {showLinks && (
            <div className="md:hidden absolute top-0 left-0 min-h-screen min-w-[50%] sm:min-w-[30%] bg-white shadow drop-shadow-md flex flex-col">
              {/* Navigation links */}
              <div className="h-12 sm:h-16 flex items-center px-4 border-b">
                <CloseIcon onClick={handleShowLinks} />
              </div>
              <div className="flex flex-col ">
                <Link
                  to={"aboutus"}
                  className="font-poppins font-semibold uppercase py-2 px-4 border-b"
                  onClick={handleShowLinks}
                >
                  About us
                </Link>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={800}
                  className="font-poppins py-2 px-4 font-semibold uppercase cursor-pointer border-b"
                  onClick={scrollToReviews}
                >
                  Contact{" "}
                </ScrollLink>
                <Link
                  to={"/reviews"}
                  className="font-poppins py-2 px-4 font-semibold uppercase border-b"
                  onClick={handleShowLinks}
                >
                  Reviews
                </Link>
                <Link
                  to={"shop/Cakes"}
                  className="font-poppins py-2 px-4 font-semibold uppercase border-b"
                  onClick={handleShowLinks}
                >
                  Shop
                </Link>
                <Link
                  to={"customize"}
                  className="font-poppins py-2 px-4 font-semibold uppercase border-b"
                  onClick={handleShowLinks}
                >
                  Customize
                </Link>
              </div>
            </div>
          )}
          <div className="h-12 sm:h-16">
            <Link to={""} className="">
              <img
                src={BrandLogo}
                alt="Bhavna's Piece Of Cake"
                className="h-full"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end w-20  ">
            <div>
              <Link to={"cart"}>
                <Badge
                  badgeContent={cartItemNumber.length}
                  color="secondary"
                  className="cursor-pointer mr-3"
                >
                  <ShoppingCartOutlinedIcon id="icon" />
                </Badge>
              </Link>
            </div>
            <div onClick={handleShowMenu}>
              <div className="cursor-pointer rounded-full overflow-hidden drop-shadow-md">
                {userData.image ? (
                  <img
                    src={userData.image}
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    alt="User display"
                  />
                ) : (
                  <AccountCircleOutlinedIcon />
                )}
              </div>

              {showMenu && (
                <div className="absolute right-2 mt-3 sm:mt-4 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                  {userData.email === process.env.REACT_APP_ADMIN && (
                    <Link
                      to={"newproduct"}
                      className="whitespace-nowrap cursor-pointer lg:text-xs xl:text-sm"
                    >
                      New Product
                    </Link>
                  )}

                  {userData.email ? (
                    <p
                      className="cursor-pointer lg:text-xs xl:text-sm"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  ) : (
                    <Link
                      to={"signin"}
                      className="whitespace-nowrap cursor-pointer"
                    >
                      SignIn
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
