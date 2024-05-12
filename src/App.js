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
import Whitelist from './components/admin/drawerAdmin/ipWhitelist'; 
import SMSLogs from './components/admin/drawerAdmin/SMSLogs';
import Dashboard from './common/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/sms-logs" element={<SMSLogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
