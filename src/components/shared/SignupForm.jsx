import { useState } from "react";
import { useNavigate } from "react-router";
import useUserProvider from "../../hooks/useUserProvider";
import api from "../../services/api";

const SignupForm = ({ userType }) => {
  const navigate = useNavigate();
  const { setUser } = useUserProvider();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const SignupFormSubmitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    if (userType === "captain") {
      newUser.vehicle = {
        capacity: vehicleCapacity,
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType,
      };
    }

    try {
      const url =
        userType === "user" ? "/users/register" : "/captains/register";

      const response = await api.post(url, newUser);

      if (response.data.success) {
        const user = response.data.data.user;
        localStorage.setItem("token", response.data.data.token);
        setUser(user);

        navigate("/home");
      }
    } catch (error) {
      console.error("Error creating user:");
      console.log(error.response.data);
    }
  };

  return (
    <form
      onSubmit={SignupFormSubmitHandler}
      className="flex flex-col gap-6 w-full"
    >
      <div>
        <label htmlFor="name" className="form-label">
          What's Your Name
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="form-input flex-1"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="form-input flex-1"
            required
          />
        </div>
      </div>
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
          className="form-input flex-1"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Set Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          autoComplete="on"
          required
        />
      </div>

      {userType === "captain" && (
        <div>
          <label htmlFor="vehicleInformation" className="form-label">
            Vehicle Information
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="vehicleColor"
              id="vehicleColor"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="form-input flex-1"
              required
            />
            <input
              type="text"
              name="vehiclePlate"
              id="vehiclePlate"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="form-input flex-1"
              required
            />
            <input
              type="number"
              name="vehicleCapacity"
              id="vehicleCapacity"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="form-input flex-1"
              required
            />
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="form-input flex-1"
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motor Cycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>
        </div>
      )}

      <button type="submit" className="primary-btn capitalize">
        Create {userType} Account
      </button>
    </form>
  );
};

export default SignupForm;
