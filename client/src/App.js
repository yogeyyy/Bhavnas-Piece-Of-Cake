import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { setProductData } from "./redux/productSlice";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`);
      const resData = await res.json();
      // console.log(resData);
      dispatch(setProductData(resData));
    })();
  },[dispatch]);


  return (
    <>
      <Toaster />
      <div>
        <Navbar />
        <main className="bg-whitepurple">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
