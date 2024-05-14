import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/Login/Login'
import SideDrawer from '../components/Layout/SideDrawer'

const WebRoutes = () => {
  return (
<Routes>  
<Route path="/" element={<LoginPage />} />
<Route index element={<LoginPage />} />
{/* <Route index element={<LoginPage />} /> */}
<Route path="/home/*" element={<SideDrawer />} />

    </Routes>
    
    )
}

export default WebRoutes