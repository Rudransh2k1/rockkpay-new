import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './addUser.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    user_Type: "",
    category: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    outletName: "",
    aadharcardNumber: "",
    gstin: "",
    dateOfBirth: "",
    bankAccountNumber: "",
    ifsc: "",
    address: "",
    pincode: "",
    district: "",
    state: "",
    city: "",
    alternateNumber: "",
    pancardNumber: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.post(
        "https://www.api.rockkpay.com/api/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      console.log("User created successfully!");

      setUserData({
        name: "",
        email: "",
        password: "",
        user_Type: "",
        category: "",
        middleName: "",
        lastName: "",
        mobileNumber: "",
        outletName: "",
        aadharcardNumber: "",
        gstin: "",
        dateOfBirth: "",
        bankAccountNumber: "",
        ifsc: "",
        address: "",
        pincode: "",
        district: "",
        state: "",
        city: "",
        alternateNumber: "",
        pancardNumber: "",
      });
      toast.success("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error.response.data.message);
      // Handle error, such as displaying an error message to the user
    }
  };

  const userType = localStorage.getItem("user_type");
  return (

    <>
      <ToastContainer />
      <section className="main-containe bg-white">
        <p className="formHeaderr">Create New User</p>
        <form onSubmit={handleSubmit} className="formCont">
          <div className="formRoww">
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Name:</p>
                <TextField
                  type="text"
                  name="name"
                  variant="outlined"
                  value={userData.name}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Email:</p>
                <TextField
                  type="email"
                  name="email"
                  variant="outlined"
                  value={userData.email}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Password:</p>
                <TextField
                  type="password"
                  name="password"
                  variant="outlined"
                  value={userData.password}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
            </div>
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Middle Name:</p>
                <TextField
                  type="text"
                  name="middleName"
                  variant="outlined"
                  value={userData.middleName}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              {userType == "Admin" ? <><div className="addUserInputGroup">
                <p className="addUserInputLabel">User Type:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="addUserInputField"
                >

                  <option value="">Select User Type</option>
                  <option value="Channel_Partner">Channel Partner</option>
                  <option value="Super_Distributor">Super Distributor</option>
                  <option value="Master_Distributor">Master Distributor </option>
                  <option value="Distributor">Distributor</option>

                  <option value="Retailer">Retailer</option>
                </select>
              </div></> : null}
              {userType == "Channel_Partner" ? <><div className="addUserInputGroup">
                <p className="addUserInputLabel">User Type:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="addUserInputField"
                >

                  <option value="">Select User Type</option>
                  {/* <option value="Channel_Partner">Channel Partner</option> */}
                  <option value="Super_Distributor">Super Distributor</option>
                  <option value="Master_Distributor">Master Distributor </option>
                  <option value="Distributor">Distributor</option>

                  <option value="Retailer">Retailer</option>
                </select>
              </div></> : null}
              {userType == "Super_Distributor" ? <><div className="addUserInputGroup">
                <p className="addUserInputLabel">User Type:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="addUserInputField"
                >

                  <option value="">Select User Type</option>
                  {/* <option value="Channel_Partner">Channel Partner</option> */}
                  {/* <option value="Super_Distributor">Super Distributor</option> */}
                  <option value="Master_Distributor">Master Distributor </option>
                  <option value="Distributor">Distributor</option>

                  <option value="Retailer">Retailer</option>
                </select>
              </div></> : null}
              {userType == "Master_Distributor" ? <><div className="addUserInputGroup">
                <p className="addUserInputLabel">User Type:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="addUserInputField"
                >

                  <option value="">Select User Type</option>
                  {/* <option value="Channel_Partner">Channel Partner</option> */}
                  {/* <option value="Super_Distributor">Super Distributor</option> */}
                  {/* <option value="Master_Distributor">Master Distributor </option> */}
                  <option value="Distributor">Distributor</option>

                  <option value="Retailer">Retailer</option>
                </select>
              </div></> : null}
              {userType == "Distributor" ? <><div className="addUserInputGroup">
                <p className="addUserInputLabel">User Type:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="addUserInputField"
                >

                  <option value="">Select User Type</option>
                  {/* <option value="Channel_Partner">Channel Partner</option> */}
                  {/* <option value="Super_Distributor">Super Distributor</option> */}
                  {/* <option value="Master_Distributor">Master Distributor </option> */}
                  {/* <option value="Distributor">Distributor</option> */}

                  <option value="Retailer">Retailer</option>
                </select>
              </div></> : null}


              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Mobile Number:</p>
                <TextField
                  type="number"
                  name="mobileNumber"
                  variant="outlined"
                  value={userData.mobileNumber}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              {/* More input groups */}
            </div>
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Last Name:</p>
                <TextField
                  type="text"
                  name="lastName"
                  variant="outlined"
                  value={userData.lastName}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>

              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Category:</p>
                <select
                  style={{ height: "3.5rem" }}
                  name="category"
                  value={userData.category}
                  onChange={handleChange}
                  className="addUserInputField"
                >
                  <option value="">Select Category</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Variable">Variable</option>
                </select>
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Date Of Birth:</p>
                <TextField
                  type="date"
                  name="dateOfBirth"
                  variant="outlined"
                  value={userData.dateOfBirth}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              {/* More input groups */}
            </div>
          </div>
          <div style={{}} className="formRoww">
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Outlet Name:</p>
                <TextField
                  type="text"
                  name="outletName"
                  variant="outlined"
                  value={userData.outletName}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Aadharcard Number:</p>
                <TextField
                  type="number"
                  name="aadharcardNumber"
                  variant="outlined"
                  value={userData.aadharcardNumber}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Gstin:</p>
                <TextField
                  type="text"
                  name="gstin"
                  variant="outlined"
                  value={userData.gstin}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
            </div>
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Bank Account Number:</p>
                <TextField
                  type="text"
                  name="bankAccountNumber"
                  variant="outlined"
                  value={userData.bankAccountNumber}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">IFSC:</p>
                <TextField
                  type="text"
                  name="ifsc"
                  variant="outlined"
                  value={userData.ifsc}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Address:</p>
                <TextField
                  type="text"
                  name="address"
                  variant="outlined"
                  value={userData.address}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              {/* More input groups */}
            </div>
            <div className="formCol">
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">Pincode:</p>
                <TextField
                  type="number"
                  name="pincode"
                  variant="outlined"
                  value={userData.pincode}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">District:</p>
                <TextField
                  type="text"
                  name="district"
                  variant="outlined"
                  value={userData.district}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              <div className="addUserInputGroup">
                <p className="addUserInputLabel">State:</p>
                <TextField
                  type="text"
                  name="state"
                  variant="outlined"
                  value={userData.state}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
              {/* More input groups */}
            </div>
          </div>
          <div class="formRoww">
            <div class="formCol">
              <div class="addUserInputGroup">
                <p class="addUserInputLabel">City:</p>
                <TextField
                  type="text"
                  name="city"
                  variant="outlined"
                  value={userData.city}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
            </div>
            <div class="formCol">
              <div class="addUserInputGroup">
                <p class="addUserInputLabel">Alternate Number:</p>
                <TextField
                  type="number"
                  name="alternateNumber"
                  variant="outlined"
                  value={userData.alternateNumber}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
            </div>
            <div class="formCol">
              <div class="addUserInputGroup">
                <p class="addUserInputLabel">Pancard Number:</p>
                <TextField
                  type="text"
                  name="pancardNumber"
                  variant="outlined"
                  value={userData.pancardNumber}
                  onChange={handleChange}
                  className="addUserInputField"
                />
              </div>
            </div>
          </div>
          <div className="addUserInputGroup">
            <FormControl style={{ width: '45%' }}>
              <InputLabel id="commission-surcharge-label">Commission/Surcharge</InputLabel>
              <Select
                labelId="commission-surcharge-label"
                id="commission-surcharge"
                name="commissionSurcharge"
                value={userData.commissionSurcharge}
                onChange={handleChange}
              >
                <MenuItem value="commission">Commission</MenuItem>
                <MenuItem value="surcharge">Surcharge</MenuItem>
              </Select>
            </FormControl>
            <TextField
              style={{ marginLeft: '10px', width: '45%' }}
              type="number"
              name="percentage"
              label="Percentage"
              variant="outlined"
              value={userData.percentage}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Create User
            </Button>
          </div>
          {/* <div style={{display:"flex", justifyContent: "center"}}>
          <Button
          onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Create User
          </Button>
          </div> */}
        </form>
      </section>
    </>
  )
}

export default AddUser