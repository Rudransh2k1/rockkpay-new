import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
    const data = [{
        balance: 20000,
    }]
  return (
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
  )
}

export default Dashboard