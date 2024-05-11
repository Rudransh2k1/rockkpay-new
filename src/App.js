// import logo from './logo.svg';
// import './App.css';
// import LoginPage from './components/Login/Login';
// import Dashboard from './common/Dashboard';
// import Navbar from './common/Navbar';
// import CreateComissionAdmin from './components/admin/commission/CreateComissionAdmin';
// import SideDrawer from './components/Layout/SideDrawer';
// import { BrowserRouter } from 'react-router-dom';
// import Routing from './routes/Routing';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//     {/* <LoginPage />
//      */}
   
//     {/* <Navbar /> */}
  
//     {/* <CreateComissionAdmin />
//      */}
//     <SideDrawer />
//     {/* <Dashboard /> */}
//     {/* <Routing /> */}
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login/Login';
import Index from './components/Login/Index';
import Whitelist from './common/Admin/IpWhitelist';
import ProviderTypes from './common/Admin/Providertypes';
import SmsLogs from './common/Admin/Smslogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/index" element={<Index />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/provider-types" element={<ProviderTypes />} />
          <Route path="/sms-logs" element={<SmsLogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
