import React from "react";
import { Link } from "react-router";

const LoginAsUserCaptainButton = ({ userType }) => {
  return (
    <div className="mt-10">
      <Link
        to={userType === "user" ? "/auth/captain-login" : "/auth/login"}
        className="primary-btn w-full"
      >
        <span>Login as {userType === "user" ? "Captain" : "User"}</span>
      </Link>
    </div>
  );
};

export default LoginAsUserCaptainButton;
