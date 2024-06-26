import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/Login';
import Dashboard from './common/Dashboard';
import Navbar from './common/Navbar';
import CreateComissionAdmin from './components/admin/commission/CreateComissionAdmin';
import SideDrawer from './components/Layout/SideDrawer';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import UserSaleDone from './components/admin/other reports/userSaleDone';
import RetailerSaleNotDone from './components/admin/other reports/RetailerSaleNotDone';
import RetailerStockNotDone from './components/admin/other reports/RetailerStockNotDone';
import LastDaySecReport from './components/admin/other reports/LastDaySecReport';
import StatusChangeReport from './components/admin/other reports/StatusChangeReport';
import RefundSucessStory from './components/admin/other reports/RefundSucessStory';
import CommissionDistriReport from './components/admin/other reports/CommissionDistriReport';
import OperatorWCReport from './components/admin/other reports/OperatorWCReport';
import OpeningClosingReport from './components/admin/other reports/OpeningClosingReport';
import IndividualReport from './components/admin/other reports/IndividualReport';
import UserWiseReport from './components/admin/other reports/UserWiseReport';
import ComingSoon from './components/admin/other reports/ComingSoon';
import MTR from './components/admin/other reports/MTR';
import UserCashback from './components/admin/reports/UserCashback';
import ActivationReport from './components/admin/reports/ActivationReport';
import PaymentRequestPage from './components/admin/reports/PaymentRequestPage';
// import ChartComponent from './common/ChartComponent';
import TransactionHistory from './components/admin/reports/TransactionHistory';
import TransactionHistWithParent from './components/admin/reports/TransactionHistWithParent';
import WebRoutes from './routes/WebRoutes';
import MyTransactionCp from './components/admin/reports/MyTransactionCp';
import { Provider } from 'react-redux';
import { store } from './stores';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    {/* <TransactionHistory /> */}
    {/* <TransactionHistWithParent /> */}
    {/* <MyTransactionCp /> */}
    {/* <SideDrawer /> */}
    <WebRoutes />
    </BrowserRouter>
     {/* <MTR /> */}
     </Provider>
    </>
    //  {/* <UserWiseReport /> */}
    //  {/* <ComingSoon /> */}
    //  {/* <MTR /> */}
    //  {/* <UserCashback /> */}
    //  {/* <ActivationReport /> */}
    //  {/* <PaymentRequestPage /> */}
   
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import LoginPage from './components/Login/Login';
// import Whitelist from './components/admin/drawerAdmin/ipWhitelist'; 
// import SMSLogs from './components/admin/drawerAdmin/SMSLogs';
// import Dashboard from './common/Dashboard';
// import SideDrawer from './components/Layout/SideDrawer';

// function App() {
//   return (
//     <>
    
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/whitelist" element={<Whitelist />} />
//           <Route path="/sms-logs" element={<SMSLogs />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
// }

// export default App;
