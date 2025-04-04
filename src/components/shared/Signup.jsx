import React from "react";
import uberLogo from "../../assets/images/Logo.png";
import { Link } from "react-router";
import SignupForm from "./SignupForm";
import LoginAsUserCaptainButton from "./LoginAsUserCaptainButton";

const Signup = ({ userType }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between px-5 py-10">
      <div>
        <img src={uberLogo} alt="Uber logo" className="w-full max-w-28 mb-20" />

        <div>
          <SignupForm userType={userType} />

          <div className="text-center mt-5 text-gray-500">
            {userType === "user" ? (
              <div>
                <span>Already a user?</span>{" "}
                <Link
                  to="/auth/login"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div>
                <span>Already a rider?</span>{" "}
                <Link
                  to="/auth/captain-login"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <LoginAsUserCaptainButton userType={userType} />
    </div>
  );
};

export default Signup;
