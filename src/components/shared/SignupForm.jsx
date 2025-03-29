const SignupForm = ({
  email,
  setEmail,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) => {
  const SignupFormSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={SignupFormSubmitHandler}
      className="flex flex-col gap-6 w-full"
    >
      <div>
        <label htmlFor="email" className="form-label">
          What's Your Name
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input flex-1"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input flex-1"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          What's Your Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input flex-1"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Set Password
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
        Singup
      </button>
    </form>
  );
};

export default SignupForm;
