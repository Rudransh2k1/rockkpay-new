import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import desktopscreen from "../../Assets/login/desktopscreen.jpg";
import MainLogo from "../../Assets/navbar/RockkpayLogo.png";
import breadcrumimg from "../../Assets/login/groupscreen.png";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    user_id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!credentials.user_id.trim() || !credentials.password.trim()) {
      toast.error("Please enter both user ID and password.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        credentials
      );
      const token = response.data.token;
      localStorage.setItem("jwt", token);
      localStorage.setItem("user_type", response.data.user.user_type);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("phone", response.data.user.mobile_number);

      // Fetch user data with the token
      // const userResponse = await axios.get("http://localhost:5000/api/mpmdata", {
      //   headers: {
      //     Authorization: token
      //   }
      // });

      // const userData = userResponse.data;
      // console.log("User data fetched:", userData);

      navigate("/home");
      toast.success("Login successful.");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Incorrect username or password. Please try again.");
    }
  };

  return (
    <section
      className="w-full h-full bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${desktopscreen})` }}
    >
      <section className="web-container w-full h-screen flex gap-6 pt-12">
        <div className="w-full h-full flex flex-col item-start justify-start gap-10">
          <span className="w-full">
            <p className="w-full text-center text-white text-4xl">
              RockkPay One Time Solution
            </p>
            <p className="w-full text-center text-white text-4xl mt-4">
              For All Your Payments
            </p>
          </span>
          <img
            src={breadcrumimg}
            alt=""
            className="h-[70vh] w-auto object-contain "
          />
        </div>
        <div className="w-full h-full center">
          <div className="h-[70vh] w-1/2 bg-[#8d5bf0] bg-opacity-60 rounded-3xl flex flex-col items-start justify-start gap-4 p-4">
            <div className="w-full flex items-center justify-between">
              <span className="w-full">
                <p className="w-full capitalize text-white text-lg font-bold">
                  Sign in to
                </p>
                <p className="capitalize text-white text-md mt-2">RockkPay</p>
              </span>
              <span className="w-full flex justify-end">
                <img
                  src={MainLogo}
                  alt=""
                  className="w-20 h-20 shadow-[0_20px_50px_rgba(158,_128,_217,_0.7)] rounded-full"
                />
              </span>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <p className="text-white font-bold capitalize">
                enter your user Id
              </p>
              <TextField
                fullWidth
                type="text"
                onChange={handleInputChange}
                placeholder="Enter your UserId"
                name="user_id"
                inputProps={{
                  style: {
                    border: "1px solid white",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  },
                }}
              />
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-2">
              <p className="text-white font-bold capitalize">
                enter your password
              </p>
              <TextField
                fullWidth
                type="password"
                placeholder="Enter your password"
                name="password"
                inputProps={{
                  style: {
                    border: "1px solid white",
                    borderRadius: "5px",
                    backgroundColor: "white",
                  },
                }}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="w-full flex items-center justify-start gap-2"></span>
              <span className="w-full flex justify-end">
                <p
                  className="text-white text-sm capitalize cursor-pointer"
                >
                  Forgot password ?
                </p>
              </span>
            </div>

            <button
              className="w-full py-3 bg-[#9e80d9] rounded-md text-white font-bold capitalize z-50 mt-4 transition-all duration-300 ease-in-out active:scale-90"
              type="submit"
              onClick={handleLogin}
            >
              login
            </button>
            <p className="text-sm text-center w-full text-white mt-10">
              RockkPay {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default LoginPage;
