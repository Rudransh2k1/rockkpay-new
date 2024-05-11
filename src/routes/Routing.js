import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../common/Dashboard'
import CreateComissionAdmin from '../components/admin/commission/CreateComissionAdmin'

const Routing = () => {
  return (
    // <></>
    <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Dashboard />} />
      <Route path="blogs" element={<CreateComissionAdmin />} />
    </Route>
  </Routes>
  )
}

export default Routing