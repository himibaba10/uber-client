import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserSignup from "../pages/UserSignup";
import CaptainLogin from "../pages/CaptainLogin";
import CaptainSignup from "../pages/CaptainSignup";
import Start from "../pages/Start";
import PrivateRoute from "./PrivateRoute";
import CaptainPrivateRoute from "./CaptainPrivateRoute";
import CaptainHome from "../pages/CaptainHome";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/captain-home",
    element: (
      <CaptainPrivateRoute>
        <CaptainHome />
      </CaptainPrivateRoute>
    ),
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <UserLogin />,
      },
      {
        path: "signup",
        element: <UserSignup />,
      },
      {
        path: "captain-login",
        element: <CaptainLogin />,
      },
      {
        path: "captain-signup",
        element: <CaptainSignup />,
      },
    ],
  },
]);

export default router;
