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
import SendEmail from './components/admin/drawerAdmin/sendEmail';
import SendWhatsapp from './components/admin/drawerAdmin/sendWhatsapp';
import SendSMS from './components/admin/drawerAdmin/sendSMS';
import UserKYC from './components/admin/drawerAdmin/userKyc';
import Notice from './components/admin/drawerAdmin/notice';
import AddAdmin from './components/admin/drawerAdmin/AddAdmin';
import SendNotification from './components/admin/drawerAdmin/SendNotification';
import Banks from './components/admin/drawerAdmin/banks';
import Settings from './components/admin/drawerAdmin/Settings';
import CircleMasterScreen from './components/admin/drawerAdmin/CircleMasterScreen';
import WebsiteLogsScreen from './components/admin/drawerAdmin/WebsiteLogsScreen';
import WebLogsArchive from './components/admin/drawerAdmin/WebLogsArchive';
import ProviderTypes from './components/admin/drawerAdmin/ProviderTypes';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<LoginPage />} />
    //       <Route path="/whitelist" element={<Whitelist />} />
    //       <Route path="/sms-logs" element={<SMSLogs />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/sednEmail" element={<SendEmail />} />
    //     </Routes>
    //   </div>
    // </Router>
    // <SendEmail />
    // <SMSLogs />
    // <SendWhatsapp />
    // <SendSMS />
    // <UserKYC />
    // <Notice />
    // <AddAdmin />
    // <SendNotification />
    // <Banks />
    // <Settings />
    // <CircleMasterScreen />
    // <WebsiteLogsScreen />
     <WebLogsArchive />
    // <ProviderTypes />
  );
}

export default App;
