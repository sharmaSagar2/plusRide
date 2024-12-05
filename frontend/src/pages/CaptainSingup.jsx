import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaptainDataContext from "../context/CaptainDataContext";
import axios from "axios";

const CaptainSingup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const { setCaptain } = useContext(CaptainDataContext);
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType.toLowerCase(),
      },
    };

    try {
      const response = await axios.post("http://localhost:3000/captains/register", captainData);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('captain', data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 rounded-md"
          src="/src/images/driverLogo.jpg"
          alt="Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">Captain Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-base placeholder:text-sm"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">Type your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 mb-7 rounded-md px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="Email"
          />
          <h3 className="text-base font-medium mb-2">Enter password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 mb-7 rounded-md px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-gray-200 w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">car</option>
              <option value="motorcycle">motorcycle</option>
              <option value="auto">auto</option>
            </select>
          </div>
          <button
            className="bg-black text-white font-semibold mb-7 rounded-md px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Register as Captain
          </button>
        </form>
        <p className="text-center mb-3">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-700">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[8px] leading-1">
          By proceeding, you consent to get call, Whatsapp, or SMS messages
          from Uber. Message and data rates may apply to messages.
        </p>
      </div>
    </div>
  );
};

export default CaptainSingup;
