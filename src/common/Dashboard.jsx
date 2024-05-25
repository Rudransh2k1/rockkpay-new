import React, { useEffect, useState } from 'react'
import chart from '../Assets/admin/adminImg.png'
import "./Dashboard.css"
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState();
  // const data = [{
  //     balance: 20000,
  // }]
  useEffect(() => {
    fetchData();
    mtmLogin();
  }, []);

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

  const mtmLogin = async () => {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      const mtmresponse = await axios.post("https://api.mtmpay.in/api-login-merchant", {
        email,
        password
      });

      console.log(mtmresponse.data);
      localStorage.setItem("mtmToken",mtmresponse.data.access_token);
      // Handle the response data here as needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='section'>
      <div className='mainCardDiv'>
        <div className="my-card">
          <h1 className="card-title">API Balance</h1>
          <h1 className="card-balance"> &#x20B9; 10000000 </h1>
        </div>
        <div className="my-card">
          <h1 className="card-title">Wallet Balance</h1>
          <h1 className="card-balance"> &#x20B9; {data?.balance ? data.balance : 0.00} </h1>
        </div>

      </div>
      <div className='image'>
        <img src={chart} alt="Chart" />

      </div>
    </section>
  )
}

export default Dashboard