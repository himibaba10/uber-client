import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router";
import useUserProvider from "../../hooks/useUserProvider";
import useCaptainProvider from "../../hooks/useCaptainProvider";

const LoginForm = ({ userType }) => {
  const navigate = useNavigate();
  const { setUser } = useUserProvider();
  const { setCaptain } = useCaptainProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginFormSubmitHandler = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const url = userType === "user" ? "/users/login" : "/captains/login";
      const response = await api.post(url, loginData);

      if (response.data.success) {
        localStorage.setItem("token", response.data.data.token);
        const user = response.data.data.user || response.data.data.captain;

        userType === "user" ? setUser(user) : setCaptain(user);
        userType === "user" ? navigate("/home") : navigate("/captain-home");
      }
    } catch (error) {
      console.error("Login failed");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={LoginFormSubmitHandler}
      className="flex flex-col gap-6 w-full"
    >
      <div>
        <label htmlFor="email" className="form-label">
          What's Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          What's Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          autoComplete="current-password"
          required
        />
      </div>
      <button type="submit" className="primary-btn">
        {userType === "captain" && "Captain"} Login
      </button>
    </form>
  );
};

export default LoginForm;
