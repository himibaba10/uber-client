import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserSignup from "../pages/UserSignup";
import CaptainLogin from "../pages/CaptainLogin";
import CaptainSignup from "../pages/CaptainSignup";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: UserLogin,
  },
  {
    path: "/signup",
    Component: UserSignup,
  },
  {
    path: "/captain-login",
    Component: CaptainLogin,
  },
  {
    path: "/captain-signup",
    Component: CaptainSignup,
  },
]);

export default router;
