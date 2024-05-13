import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Dashboard from '../common/Dashboard'
import CreateComissionAdmin from '../components/admin/commission/CreateComissionAdmin'
import SideDrawer from '../components/Layout/SideDrawer'
import UserList from '../common/UserList'
import AddUser from '../common/AddUser'
import AddAdmin from '../components/admin/drawerAdmin/AddAdmin'
import Notice from '../components/admin/drawerAdmin/notice'
import UserKYC from '../components/admin/drawerAdmin/userKyc'
import SendSMS from '../components/admin/drawerAdmin/sendSMS'
import SendWhatsapp from '../components/admin/drawerAdmin/sendWhatsapp'
import SendEmail from '../components/admin/drawerAdmin/sendEmail'
import SendNotification from '../components/admin/drawerAdmin/SendNotification'
import Banks from '../components/admin/drawerAdmin/banks'
import ChangeParent from '../components/admin/users/ChangeParent'
import ChangeMobileNoKYC from '../components/admin/users/ChangeMobileNoKYC'

const Routing = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Dashboard />
  //   },
  //   {
  //     path: "/createComission",
  //     element: <CreateComissionAdmin />
  //   }
  // ])
  return (
    <>
    {/* <RouterProvider router={router} /> */}
    <Routes>
    <Route path="/" element={<Dashboard />} />
      <Route index element={<Dashboard />} />
      <Route path="/commissionPay" element={<CreateComissionAdmin />} />
      <Route path="/surchargePay" element={<CreateComissionAdmin />} />
      <Route path="/addUser" element={<AddUser />} />
      <Route path="/userList" element={<UserList />} />
      <Route path="/user/changeParent" element={<ChangeParent />} />
      <Route path="/user/changeMobileNoKYC" element={<ChangeMobileNoKYC />} />

      <Route path="/admin/addAdmin" element={<AddAdmin />} />
      <Route path="/admin/notice" element={<Notice />} />
      <Route path="/admin/userKYC" element={<UserKYC />} />
      <Route path="/admin/sendSMS" element={<SendSMS />} />
      <Route path="/admin/sendWhatsapp" element={<SendWhatsapp />} />
      <Route path="/admin/sendEmail" element={<SendEmail />} />
      <Route path="/admin/sendNotification" element={<SendNotification />} />
      <Route path="/admin/banks" element={<Banks />} />

  </Routes>
  </>
  )
}

export default Routing