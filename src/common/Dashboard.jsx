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
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: token,
      };
      const responsebalance = await axios.get(
        "https://api.rockkpay.com/api/protected/balance",
        {
          headers: headers,
        }
      );
      setData(responsebalance.data);
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