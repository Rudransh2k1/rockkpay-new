import React from 'react'
import chart from '../Assets/admin/adminImg.png'
import "./Dashboard.css"

const Dashboard = () => {
    const data = [{
        balance: 20000,
    }]
  return (
<section className='section'>
    <div className='mainCardDiv'>
    <div className="my-card">
    <h1 className="card-title">API Balance</h1>
    <h1 className="card-balance">10000000 &#x20B9;</h1>
  </div>
  <div className="my-card">
      <h1 className="card-title">Wallet Balance</h1>
      <h1 className="card-balance">{data?.balance ? data?.balace : 50000} &#x20B9;</h1>
    </div>
 
  </div>
  <div className='image'>
  <img src={chart} alt="Chart" />

  </div>    
  </section>
  )
}

export default Dashboard