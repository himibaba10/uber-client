import React from "react";

const LoginForm = ({ email, setEmail, password, setPassword }) => {
  const LoginFormSubmitHandler = (e) => {
    e.preventDefault();
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
          type="text"
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
          type="text"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <button type="submit" className="primary-btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
