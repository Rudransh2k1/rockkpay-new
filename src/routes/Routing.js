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
import KycVerfication from '../components/admin/users/KycVerfication'
import AddMainBalance from '../components/admin/balance/AddMainBalance'
import ReverseMainBalance from '../components/admin/balance/ReverseMainBalance'
import AddBalanceEasebuzz from '../components/admin/balance/AddBalanceEasebuzz'
import Settings from '../components/admin/drawerAdmin/Settings'
import CircleMasterScreen from '../components/admin/drawerAdmin/CircleMasterScreen'
import WebsiteLogsScreen from '../components/admin/drawerAdmin/WebsiteLogsScreen'
import WebLogsArchive from '../components/admin/drawerAdmin/WebLogsArchive'
import SMSLogs from '../components/admin/drawerAdmin/SMSLogs'
import Whitelist from '../components/admin/drawerAdmin/ipWhitelist'
import MTR from '../components/admin/other reports/MTR'
import AEPSReport from '../components/admin/other reports/AEPSReport'
import UserWiseReport from '../components/admin/other reports/UserWiseReport'
import IndividualReport from '../components/admin/other reports/IndividualReport'
import OpeningClosingReport from '../components/admin/other reports/OpeningClosingReport'
import OperatorWCReport from '../components/admin/other reports/OperatorWCReport'
import CommissionDistriReport from '../components/admin/other reports/CommissionDistriReport'
import RefundSucessStory from '../components/admin/other reports/RefundSucessStory'
import StatusChangeReport from '../components/admin/other reports/StatusChangeReport'
import LastDaySecReport from '../components/admin/other reports/LastDaySecReport'
import RetailerStockNotDone from '../components/admin/other reports/RetailerStockNotDone'
import RetailerSaleNotDone from '../components/admin/other reports/RetailerSaleNotDone'
import UserSaleDone from '../components/admin/other reports/userSaleDone'
import LoginPage from '../components/Login/Login'
import TransactionHistory from '../components/admin/reports/TransactionHistory'
import TransactionHistWithParent from '../components/admin/reports/TransactionHistWithParent'
import MyTransactionCp from '../components/admin/reports/MyTransactionCp'
import PayoutDashboard from '../components/distributor/PayoutDashboard'
import AddBeneficiary from '../components/distributor/AddBeneficiary'
import InstantReport from '../components/distributor/InstantReport'
import Ledger from '../components/distributor/Ledger'
import WalletTopup from '../components/distributor/WalletTopup'

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
        {/* <Route index element={<Dashboard />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/commissionPay" element={<CreateComissionAdmin />} />
        <Route path="/surchargePay" element={<CreateComissionAdmin />} />
        <Route path="/PayoutDashboard" element={<PayoutDashboard />} />
        <Route path="/walletTopUp" element={<WalletTopup />} />
        <Route path="/addbeneficiary" element={<AddBeneficiary />} />
        <Route path="/instantreport" element={<InstantReport />} />
        <Route path="/ledger" element={<Ledger />} />

        <Route path="/addUser" element={<AddUser />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/user/changeParent" element={<ChangeParent />} />
        <Route path="/user/changeMobileNoKYC" element={<ChangeMobileNoKYC />} />
        <Route path="/user/KYCVerification" element={<KycVerfication />} />
        <Route path="/balance/addMainBalance" element={<AddMainBalance />} />
        <Route path="/balance/reverseBalance" element={<ReverseMainBalance />} />
        <Route path="/balance/addBalanceEaseBuzz" element={<AddBalanceEasebuzz />} />
        <Route path="/report/transactionHistory" element={<TransactionHistory />} />
        <Route path="/report/transactionHistorywithParent" element={<TransactionHistWithParent />} />
        <Route path="/otherReport/mtr" element={<MTR />} />
        <Route path="/otherReport/aeps" element={<AEPSReport />} />
        <Route path="/otherReport/userWise" element={<UserWiseReport />} />
        <Route path="/otherReport/individual" element={<IndividualReport />} />
        <Route path="/otherReport/opening-closing" element={<OpeningClosingReport />} />
        <Route path="/otherReport/operatorWiseCommission" element={<OperatorWCReport />} />
        <Route path="/otherReport/commissionDistribution" element={<CommissionDistriReport />} />
        <Route path="/otherReport/refundSuccess" element={<RefundSucessStory />} />
        <Route path="/otherReport/statusChange" element={<StatusChangeReport />} />
        <Route path="/otherReport/lastDaySecondary" element={<LastDaySecReport />} />
        <Route path="/otherReport/retailerStockNotDone" element={<RetailerStockNotDone />} />
        <Route path="/otherReport/retailerSaleNotDone" element={<RetailerSaleNotDone />} />
        <Route path="/otherReport/userSaleDone" element={<UserSaleDone />} />
        <Route path="/report/transactionHistory" element={<TransactionHistory />} />
        <Route path="/report/transactionHistorywithParent" element={<TransactionHistWithParent />} />
        <Route path="/report/myTransaction" element={<MyTransactionCp />} />

        <Route path="/admin/addAdmin" element={<AddAdmin />} />
        <Route path="/admin/notice" element={<Notice />} />
        <Route path="/admin/userKYC" element={<UserKYC />} />
        <Route path="/admin/sendSMS" element={<SendSMS />} />
        <Route path="/admin/sendWhatsapp" element={<SendWhatsapp />} />
        <Route path="/admin/sendEmail" element={<SendEmail />} />
        <Route path="/admin/sendNotification" element={<SendNotification />} />
        <Route path="/admin/banks" element={<Banks />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/circleMaster" element={<CircleMasterScreen />} />
        <Route path="/admin/websiteLog" element={<WebsiteLogsScreen />} />
        <Route path="/admin/websiteLogArchive" element={<WebLogsArchive />} />
        <Route path="/admin/smsLogs" element={<SMSLogs />} />
        <Route path="/admin/ipWhitelist" element={<Whitelist />} />

      </Routes>
    </>
  )
}

export default Routing