import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './addUser.css'

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
            "https://62.2.118.186/api/auth/register",
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
          Swal.fire({
            icon: "success",
            title: "User Created Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          // Handle success, such as showing a success message or redirecting the user
        } catch (error) {
          console.error("Error creating user:", error.response.data.message);
          // Handle error, such as displaying an error message to the user
        }
      };
  return (
    <>
      <section className="main-containe bg-white">
        <p className="form-heading">Create New User</p>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-row">
            <div   className="form-column">
              <div  className="input-group">
                <p className="input-label">Name:</p>
                <TextField
                  type="text"
                  name="name"
                  variant="outlined"
                  value={userData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">Email:</p>
                <TextField
                  type="email"
                  name="email"
                  variant="outlined"
                  value={userData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">Password:</p>
                <TextField
                  type="password"
                  name="password"
                  variant="outlined"
                  value={userData.password}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="input-group">
                <p className="input-label">Middle Name:</p>
                <TextField
                  type="text"
                  name="middleName"
                  variant="outlined"
                  value={userData.middleName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">User Type:</p>
                <select
                style={{height:"100%"}}
                  name="user_Type"
                  value={userData.user_Type}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select User Type</option>
                  <option value="Channel_Partner">Channel Partner</option>
                </select>
              </div>
           
              <div className="input-group">
                <p className="input-label">Mobile Number:</p>
                <TextField
                  type="number"
                  name="mobileNumber"
                  variant="outlined"
                  value={userData.mobileNumber}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              {/* More input groups */}
            </div>
            <div className="form-column">
            <div className="input-group">
                <p className="input-label">Last Name:</p>
                <TextField
                  type="text"
                  name="lastName"
                  variant="outlined"
                  value={userData.lastName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              
              <div className="input-group">
                <p className="input-label">Category:</p>
                <select
                style={{height:"100%" }}
                  name="category"
                  value={userData.category}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Category</option>
                  <option value="Fixed">Fixed</option>
                  <option value="Variable">Variable</option>
                </select>
              </div>
              <div className="input-group">
                <p className="input-label">Date Of Birth:</p>
                <TextField
                  type="date"
                  name="dateOfBirth"
                  variant="outlined"
                  value={userData.dateOfBirth}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              {/* More input groups */}
            </div>
          </div>
          <div style={{}} className="form-row">
            <div className="form-column">
              <div className="input-group">
                <p className="input-label">Outlet Name:</p>
                <TextField
                  type="text"
                  name="outletName"
                  variant="outlined"
                  value={userData.outletName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">Aadharcard Number:</p>
                <TextField
                  type="number"
                  name="aadharcardNumber"
                  variant="outlined"
                  value={userData.aadharcardNumber}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">Gstin:</p>
                <TextField
                  type="text"
                  name="gstin"
                  variant="outlined"
                  value={userData.gstin}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="input-group">
                <p className="input-label">Bank Account Number:</p>
                <TextField
                  type="text"
                  name="bankAccountNumber"
                  variant="outlined"
                  value={userData.bankAccountNumber}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">IFSC:</p>
                <TextField
                  type="text"
                  name="ifsc"
                  variant="outlined"
                  value={userData.ifsc}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">Address:</p>
                <TextField
                  type="text"
                  name="address"
                  variant="outlined"
                  value={userData.address}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              {/* More input groups */}
            </div>
            <div className="form-column">
              <div className="input-group">
                <p className="input-label">Pincode:</p>
                <TextField
                  type="number"
                  name="pincode"
                  variant="outlined"
                  value={userData.pincode}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">District:</p>
                <TextField
                  type="text"
                  name="district"
                  variant="outlined"
                  value={userData.district}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <p className="input-label">State:</p>
                <TextField
                  type="text"
                  name="state"
                  variant="outlined"
                  value={userData.state}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              {/* More input groups */}
            </div>
          </div>
          <div class="form-row">
  <div class="form-column">
    <div class="input-group">
      <p class="input-label">City:</p>
      <TextField
        type="text"
        name="city"
        variant="outlined"
        value={userData.city}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  </div>
  <div class="form-column">
    <div class="input-group">
      <p class="input-label">Alternate Number:</p>
      <TextField
        type="number"
        name="alternateNumber"
        variant="outlined"
        value={userData.alternateNumber}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  </div>
  <div class="form-column">
    <div class="input-group">
      <p class="input-label">Pancard Number:</p>
      <TextField
        type="text"
        name="pancardNumber"
        variant="outlined"
        value={userData.pancardNumber}
        onChange={handleChange}
        className="input-field"
      />
    </div>
  </div>
</div>
<div style={{display:"flex", justifyContent: "center"}}>
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
        </form>
      </section>
    </>
  )
}

export default AddUser