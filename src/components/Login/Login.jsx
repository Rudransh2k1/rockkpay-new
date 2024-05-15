import React, { useState } from "react";
import TextField from "@mui/material/TextField";
// import { Login_bg, breadcrumimg, desktopscreen } from "@/src/Assets/login";
import { Login_bg} from "../../Assets/login/login_image.jpg"
import desktopscreen from "../../Assets/login/desktopscreen.jpg"
import  MainLogo  from "../../Assets/navbar/RockkpayLogo.png";
import breadcrumimg from "../../Assets/login/groupscreen.png"
// import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";   
import axios from "axios";
// import { login } from "../../redux/actions/authActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import Image from "next/image";
// import ForgotPassword from "./ForgotPassword";
const LoginPage = () => {
//   const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    user_id: "",
    password: "",
  });
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const router = useRouter();
const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!credentials.user_id.trim() || !credentials.password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter both user ID and password.",
      });
      return; // Stop further execution
    }
    try {
      
    //   const response = await axios.post(
    //     "https://api.ipaisa.site/api/auth/signin",
    //     credentials
    //   );
    //   localStorage.setItem("jwt", response.data.token);
    //   localStorage.setItem("user_type", response.data.user.user_type );
    //   const userData = response.data.user;
      navigate("/home")
      // dispatch(login(userData));
      // Redirect based on user type
      // switch (response.data.user.user_type) {
        // case "Admin":
          // router.push("/admin-dashboard");
      //     break;
      //   case "Channel_Partner":
          // router.push("/cpbreadcrumb");
      //     break;
      //   case "Super Distributor":
          // router.push("/sdbreadcrumb");
      //     break;
      //   case "Master Distributor":
          // router.push("/mdbreadcrumb");
      //     break;
      //   case "Distributor":
        //   router.push("/dbreadcrumb");
      //     break;
      //   case "Retailer":
        //   router.push("/rbreadcrumb");
      //     break;
      //   default:
      //     break;
      // }
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Login successful.",
      });
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect username or password. Please try again.",
      });
    }
  };

//   const handleForgotPasswordClick = () => {
//     setShowForgotPassword(true);
//     console.log("clicked for password")
//     // router.push("/forgotpass")
//   };

  return (
    <section
      className="w-full h-full bg-center bg-cover bg-no-repeat  "
      style={{ backgroundImage: `url(${desktopscreen})`}} 

    >
      <section className=" web-container  w-full h-screen flex  gap-6 pt-12">
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
            width={800} // Example width
            height={600}
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
                <p  className="capitalize text-white text-md mt-2">
                 RockkPay
                </p>
              </span>
              <span className="w-full flex justify-end">
                <img
                  src={MainLogo}
                  alt=""
                  width={800}
                  height={600}
                  className=" w-20 h-20 shadow-[0_20px_50px_rgba(158,_128,_217,_0.7)] rounded-full"
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
                    // height: "10px",
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
                    // height: "10px",
                    backgroundColor: "white",
                  },
                }}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="w-full flex items-center justify-start gap-2">
                {/* <input type="checkbox" name="" id="" /> */}
                {/* <p className="text-white text-sm capitalize">remember me</p> */}
              </span>
              <span className="w-full flex justify-end ">
                <p
                  className="text-white text-sm capitalize cursor-pointer"
                //   onClick={handleForgotPasswordClick}
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
      {/* {showForgotPassword && <ForgotPassword />} */}
    </section>
  );
};

export default LoginPage;
