import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Customize from "./pages/Customize";
import Aboutus from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import NewProduct from "./components/NewProduct";
import SignUp from "./pages/SignUp";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="shop/:category" element={<Shop />} />
      {/* <Route path="shop/:category" component={Shop} /> */}
      <Route path="shop/:category/:productId" element={<ProductDetails />} />
      <Route path="customize" element={<Customize />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="contact" element={<Contact />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
