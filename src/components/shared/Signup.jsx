import React, { useState } from "react";
import uberLogo from "../../assets/images/Logo.png";
import { Link } from "react-router";
import SignupForm from "./SignupForm";

const Signup = ({ userType }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col justify-between px-5 py-10">
      <div>
        <img src={uberLogo} alt="Uber logo" className="w-full max-w-28 mb-20" />

        <div>
          <SignupForm
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <div className="text-center mt-5 text-gray-500">
            {userType === "user" ? (
              <div>
                <span>Already a user?</span>{" "}
                <Link
                  to="/login"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div>
                <span>Already a rider?</span>{" "}
                <Link
                  to="/captain-login"
                  className="underline underline-offset-3 hover:text-black"
                >
                  Login
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

export default Signup;
