
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// const userType = localStorage.getItem("user_type");

export const menuAdminArray  =  [
  {
    id: 1,
    
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },
    ],
  },

  {
    
    id: 4,
        

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Add User",
        path: "./addUser",
      },
      {
        id: 42,
        subTitle: "User List",
        path: "./userList",
      },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
       {
        id: 63,
        subTitle: "Transaction history with Parent",
        path: "./report/transactionHistorywithParent",
      },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];


export const menuChannelArray  =  [
  {
    id: 1,
    
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },
    ],
  },

  {
    
    id: 4,
        

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Add User",
        path: "./addUser",
      },
      {
        id: 42,
        subTitle: "User List",
        path: "./userList",
      },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
      // {
      //   id: 63,
      //   subTitle: "Transaction history with Parent",
      //   path: "./report/transactionHistorywithParent",
      // },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];
export const menuSuperArray  =  [
  {
    id: 1,
    
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },
    ],
  },

  {
    
    id: 4,
        

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Add User",
        path: "./addUser",
      },
      {
        id: 42,
        subTitle: "User List",
        path: "./userList",
      },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
      // {
      //   id: 63,
      //   subTitle: "Transaction history with Parent",
      //   path: "./report/transactionHistorywithParent",
      // },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];
export const menuMasterArray  =  [
  {
    id: 1,
    
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },
    ],
  },

  {
    
    id: 4,
        

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Add User",
        path: "./addUser",
      },
      {
        id: 42,
        subTitle: "User List",
        path: "./userList",
      },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
      // {
      //   id: 63,
      //   subTitle: "Transaction history with Parent",
      //   path: "./report/transactionHistorywithParent",
      // },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];
export const menuDistriArray  =  [
  {
    id: 1,
    
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },

      // {
      //   id: 24,
      //   subTitle: "Payout Pay",
      //   path: "./PayoutDashboard",
      // },
    ],
  },
  {
    id: 3,
    

    title: "Payout",
    icon: <AccountBalanceIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
  
      {
        id: 88,
        subTitle: "Payout Pay",
        path: "./PayoutDashboard",
      },
    ],
  },


  {
    
    id: 4,
        

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Add User",
        path: "./addUser",
      },
      {
        id: 42,
        subTitle: "User List",
        path: "./userList",
      },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
      {
        id: 63,
        subTitle: "Transaction history with Parent",
        path: "./report/transactionHistorywithParent",
      },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];
export const menuRetailArray  =  [
  {
    id: 1,
    // 
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: ".", 
  },
  {
    id: 2,
    // 

    title: "Commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 21,
      //   subTitle: "Commission Pay",
      //   path: "/commissionPay",
      // },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Surcharge Pay",
        path: "./surchargePay",
      },
    ],
  },

  {
    
    id: 4,
        // 

    title: "Users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      // {
      //   id: 41,
      //   subTitle: "Add User",
      //   path: "./addUser",
      // },
      // {
      //   id: 42,
      //   subTitle: "User List",
      //   path: "./userList",
      // },
     
      // {
      //   id: 43,
      //   subTitle: "Master distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 431,
      //       subTitle: "Master distributor list",
      //       path: "./masterdistributor",
      //     },
      //     {
      //       id: 432,
      //       subTitle: "Add master distributor",
      //       path: "./addmasterdistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 44,
      //   subTitle: "Distributors",
      //   ultraSubMenu: [
      //     {
      //       id: 441,
      //       subTitle: "Distributor list",
      //       path: "./distributorlist",
      //     },
      //     {
      //       id: 442,
      //       subTitle: "Add distributor",
      //       path: "./adddistributor",
      //     },
      //   ],
      // },
      // {
      //   id: 45,
      //   subTitle: "Retailers",
      //   ultraSubMenu: [
      //     {
      //       id: 451,
      //       subTitle: "Retailer list",
      //       path: "../retailers",
      //     },
      //     {
      //       id: 452,
      //       subTitle: "Add retailer",
      //       path: "./addretailer",
      //     },
      //   ],
      // },
      // {
      //   id: 46,
      //   subTitle: "Members",
      //   ultraSubMenu: [
      //     {
      //       id: 461,
      //       subTitle: "Members list",
      //       path: "./comingsoon",
      //     },
      //   ],
      // },
      {
        id: 47,
        subTitle: "Change Parent",
        path: "./user/changeParent",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./user/changeMobileNoKYC",
      },
      {
        id: 49,
        subTitle: "KYC Verification",
        path: "./user/KYCVerification",
      },
      {
        id: 50,
        subTitle: "KYC verified",
        path: "./comingsoon",
      },
    ],
  },
  {
    id: 5,
    title: "Balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add Main Balance",
        path: "./balance/addMainBalance",
      },
      {
        id: 52,
        subTitle: "Reverse Main Balance",
        path: "./balance/reverseBalance",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./balance/addBalanceEaseBuzz",
      },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      // {
      //   id: 62,
      //   subTitle: "Transaction History",
      //   path: "./report/transactionHistory",
      // },
      // {
      //   id: 63,
      //   subTitle: "Transaction history with Parent",
      //   path: "./report/transactionHistorywithParent",
      // },

      // {
      //   id: 66,
      //   subTitle: "Complaints",
      //   path: "./refund_2",
      // },
      // {
      //   id: 67,
      //   subTitle: "Complaints History",
      //   path: "./complainthistory",
      // },
      // {
      //   id: 68,
      //   subTitle: "Refunds",
      //   path: "./refund",
      // },
      // {
      //   id: 69,
      //   subTitle: "Reports",
      //   path: "./reports",
      // },
      {
        id: 69,
        subTitle: "My Transactions",
        path: "./report/myTransaction",
      },
      // {
      //   id: 70,
      //   subTitle: "MAIN payment summary gateway",
      //   path: "./mpsg",
      // },
      // {
      //   id: 71,
      //   subTitle: "MAIN payment summery AEPS/MATM",
      //   path: "./mainpaymentsummaryaepsmatm",
      // },
      // {
      //   id: 72,
      //   subTitle: "MAIN Gateway/AEPS/MATM commission distribution report",
      //   path: "./maingatewaycommidistribution",
      // },
      // {
      //   id: 73,
      //   subTitle: "Balance Requests",
      //   path: "./balancerequests",
      // },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      // {
      //   id: 75,
      //   subTitle: "Balance request History",
      //   path: "./balancereqhist",
      // },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      // {
      //   id: 77,
      //   subTitle: "Activation Report",
      // },
      // {
      //   id: 78,
      //   subTitle: "User Cashback Report",
      //   path: "./usercashback",
      // },
    ],
  },
  // {
  //   id: 7,
  //   title: "Other Reports",
  //   icon: <BarChartIcon className="!text-white" />,
  //   subMenu: [
  //     {
  //       id: 71,
  //       subTitle: "Money transfer reports",
  //       path: "./otherReport/mtr",
  //     },
  //     {
  //       id: 72,
  //       subTitle: "AEPS report",
  //       path: "./otherReport/aeps",
  //     },
  //     {
  //       id: 73,
  //       subTitle: "Operator wise report",
  //       path: "./comingsoon",
  //     },
  //     {
  //       id: 74,
  //       subTitle: "User wise report",
  //       path: "./otherReport/userWise",
  //     },

  //     {
  //       id: 78,
  //       subTitle: "Individual report",
  //       path: "./otherReport/individual",
  //     },
  //     {
  //       id: 79, 
  //       subTitle: "Opening closing report Main",
  //       path: "./otherReport/opening-closing",
  //     },
  //     {
  //       id: 80,
  //       subTitle: "Operatorwise Commission Report",
  //       path: "./otherReport/operatorWiseCommission",
  //     },
  //     {
  //       id: 81,
  //       subTitle: "Commission Distribution Report",
  //       path: "./otherReport/commissionDistribution",
  //     },
  //     {
  //       id: 82,
  //       subTitle: "Refund success report",
  //       path: "./otherReport/refundSuccess",
  //     },
  //     {
  //       id: 83,
  //       subTitle: "Status change report",
  //       path: "./otherReport/statusChange",
  //     },
  //     {
  //       id: 84,
  //       subTitle: "Last 3 days secondary report",
  //       path: "./otherReport/lastDaySecondary",
  //     },
  //     {
  //       id: 85,
  //       subTitle: "Retailers stock not taken",
  //       path: "./otherReport/retailerStockNotDone",
  //     },
  //     {
  //       id: 86,
  //       subTitle: "Retailers sale not done",
  //       path: "./otherReport/retailerSaleNotDone",
  //     },
  //     {
  //       id: 87,
  //       subTitle: "Users sale done",
  //       path: "./otherReport/userSaleDone",
  //     },
  //   ],
  // },
  {
    id: 8,
    title: "Admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add Admin Main Balance",
        path: "./admin/addAdmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./admin/notice",
      },
      {
        id: 91,
        subTitle: "User KYC",
        path: "./admin/userKYC",
      },
      {
        id: 92,
        subTitle: "Send SMS",
        path: "./admin/sendSMS",
      },
      {
        id: 93,
        subTitle: "Send WhatsApp",
        path: "./admin/sendWhatsapp",
      },
      {
        id: 94,
        subTitle: "Send Email",
        path: "./admin/sendEmail",
      },
      {
        id: 95,
        subTitle: "Send Notification",
        path: "./admin/sendNotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./admin/banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./admin/settings",
      },
      {
        id: 98,
        subTitle: "Circle Master",
        path: "./admin/circleMaster",
      },
      {
        id: 99,
        subTitle: "Website Logs",
        path: "./admin/websiteLog",
      },
      {
        id: 100,
        subTitle: "Website Logs Archive",
        path: "./admin/websiteLogArchive",
      },
      {
        id: 101,
        subTitle: "SMS Logs",
        path: "./admin/smsLogs",
      },
      {
        id: 102,
        subTitle: "IP Whitelist",
        path: "./admin/ipWhitelist",
      },
      {
        id: 103,
        subTitle: "Provider Types",
        path: "./providertypescreen",
      },
      {
        id: 104,
        subTitle: "Circles",
        path: "./circlesscreen",
      },
    ],
  },
];