import React from "react";
import uberLogo from "../../assets/images/Logo.png";
import { Link } from "react-router";
import LoginForm from "./LoginForm";

const Login = ({ userType }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between px-5 py-10">
      <div>
        <img src={uberLogo} alt="Uber logo" className="w-full max-w-28 mb-20" />

        <div>
          <LoginForm />

          <div className="text-center mt-5 text-gray-500">
            {userType === "user" ? (
              <div>
                <span>New here?</span>{" "}
                <Link
                  to="/signup"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Create a new account
                </Link>
              </div>
            ) : (
              <div>
                <span>Be a rider?</span>{" "}
                <Link
                  to="/captain-signup"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Create a new captain account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Link
          to={userType === "user" ? "/captain-login" : "/login"}
          className="primary-btn w-full"
        >
          <span>Login as {userType === "user" ? "Captain" : "User"}</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
