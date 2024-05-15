import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Button } from "@mui/material";
import "./AddMainBalance.css";

const AddMainBalance = () => {
    const [data, setData] = useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("jwt");
          const headers = {
            "Content-Type": "application/json",
            Authorization: token,
          };
          const responsebalance = await axios.get(
            "http://localhost:5000/api/protected/balance",
            {
              headers: headers,
            }
          );
          setData(responsebalance.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  
    const [formData, setFormData] = useState({
      receiverId: "",
      receiverName: "",
      receiverType: "",
      amount: "",
      reason: "",
    });
  
    const [message, setMessage] = useState("");
  
    const handleInputChange = async (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const fetchReceiverDetails = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await axios.get(
          `http://localhost:5000/api/protected/userrr/${formData.receiverId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        const { name: receiverName, user_type: receiverType } = response.data.user;
        setFormData({
          ...formData,
          receiverName,
          receiverType,
        });
      } catch (error) {
        console.log("Error fetching receiver details:", error);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("jwt");
        const response = await axios.post(
          "http://localhost:5000/api/protected/transfer",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (response.data.message) {
          Swal.fire({
            icon: "success",
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          const errorMessage = error.response.data.message;
          if (errorMessage === "Receiver is not under the sender") {
            Swal.fire({
              icon: "error",
              title: "Receiver is not under you",
            });
          } else if (errorMessage === "Receiver does not exist") {
            Swal.fire({
              icon: "error",
              title: "Receiver does not exist",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error transferring funds",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Error transferring funds",
          });
        }
      }
    };

  return (
    <section className="main-con">
      <div className="container">
        <div className="balance-container">
          <div className="balance-info">
            <h1>Wallet Balance</h1>
            <h1>&#x20B9; {data?.balance ? data.balance : 0.00}</h1>
          </div>
        </div>
        <div className="transfer-container">
          <h2>Fund Transfer</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p>Receiver ID:</p>
              <div className="input-group">
                <input
                  type="text"
                  name="receiverId"
                  value={formData.receiverId}
                  onChange={handleInputChange}
                  placeholder=""
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={fetchReceiverDetails}
                >
                  <SearchIcon />
                  Search
                </Button>
              </div>
            </div>
            <div className="form-group">
              <p>Receiver Name:</p>
              <input
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <p>Receiver Type:</p>
              <input
                type="text"
                name="receiverType"
                value={formData.receiverType}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <p>Amount:</p>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <p>Reason:</p>
              <TextField
                type="text"
                name="reason"
                multiline
                rows={2}
                value={formData.reason}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Transfer Funds</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddMainBalance