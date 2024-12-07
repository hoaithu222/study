import DefaultLayout from "../Layouts/DefaultLayout/DefaultLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/Product/ProductDetails";
import Login from "../pages/Auth/Login";
import { Route } from "react-router-dom";
import GuestMiddleware from "../middlewares/GuestMiddleware";

export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/san-pham">
        <Route path="" element={<Product />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>
    </Route>
    <Route element={<AuthLayout />}>
      <Route element={<GuestMiddleware />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  </>
);
