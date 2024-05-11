
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

export const menuArray  =  [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon className="!text-white" />,
    path: "./",
  },
  {
    id: 2,
    title: "commission",
    icon: <CurrencyExchangeIcon className="!text-white" />,

    subMenu: [
      {
        id: 21,
        subTitle: "Create package",
        path: "/admincreatecommission",
      },
      {
        id: 22,
        subTitle: "Commission Pay",
        path: "./commissionpay",
      },
      {
        id: 23,
        subTitle: "Commission packs",
        path: "./commissionpacks",
      },
    ],
  },

  {
    id: 4,
    title: "users",
    icon: <SupervisedUserCircleIcon className="!text-white" />,

    subMenu: [
      {
        id: 41,
        subTitle: "Channal_Partner",
        ultraSubMenu: [
          {
            id: 411,
            subTitle: "Channal Partner List",
            path: "./channalpartnerlist",
          },
          {
            id: 412,
            subTitle: "Add Channal Partner",
            path: "./addchannalpartner",
          },
        ],
      },
      {
        id: 42,
        subTitle: "Super_distributors",
        ultraSubMenu: [
          {
            id: 421,
            subTitle: "Super distributor list",
            path: "./superdistrilist",
          },
          {
            id: 422,
            subTitle: "Add super distributor",
            path: "./addsuperdistributor",
          },
        ],
      },
      {
        id: 43,
        subTitle: "Master_distributors",
        ultraSubMenu: [
          {
            id: 431,
            subTitle: "Master distributor list",
            path: "./masterdistributor",
          },
          {
            id: 432,
            subTitle: "Add master distributor",
            path: "./addmasterdistributor",
          },
        ],
      },
      {
        id: 44,
        subTitle: "Distributors",
        ultraSubMenu: [
          {
            id: 441,
            subTitle: "Distributor list",
            path: "./distributorlist",
          },
          {
            id: 442,
            subTitle: "Add distributor",
            path: "./adddistributor",
          },
        ],
      },
      {
        id: 45,
        subTitle: "Retailers",
        ultraSubMenu: [
          {
            id: 451,
            subTitle: "Retailer list",
            path: "../retailers",
          },
          {
            id: 452,
            subTitle: "Add retailer",
            path: "./addretailer",
          },
        ],
      },
      {
        id: 46,
        subTitle: "Members",
        ultraSubMenu: [
          {
            id: 461,
            subTitle: "Members list",
            path: "./comingsoon",
          },
        ],
      },
      {
        id: 47,
        subTitle: "Change parent",
        path: "./assignparentuserr",
      },
      {
        id: 48,
        subTitle: "Change mobile number in KYC",
        path: "./changemobilenumber",
      },
      {
        id: 49,
        subTitle: "KYC verification",
        path: "./kycverificationn",
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
    title: "balance",
    icon: <CurrencyRupeeIcon className="!text-white" />,
    subMenu: [
      {
        id: 51,
        subTitle: "Add MAIN balance",
        path: "./addmainbalance",
      },
      {
        id: 52,
        subTitle: "Reverse MAIN balance",
        path: "./addmainbalance_2",
      },
      {
        id: 53,
        subTitle: "Add Balance",
        path: "./easebuzpayment",
      },
    ],
  },
  {
    id: 6,
    title: "report",
    icon: <SummarizeIcon className="!text-white" />,
    subMenu: [
      {
        id: 62,
        subTitle: "Transaction history",
        path: "./transactionhistory",
      },
      {
        id: 63,
        subTitle: "Transaction history with parent",
        path: "./transactionhistwithparent",
      },

      {
        id: 66,
        subTitle: "Complaints",
        path: "./refund_2",
      },
      {
        id: 67,
        subTitle: "Complaints history",
        path: "./complainthistory",
      },
      {
        id: 68,
        subTitle: "Refunds",
        path: "./refund",
      },
      {
        id: 69,
        subTitle: "Reports",
        path: "./reports",
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
      {
        id: 73,
        subTitle: "Balance requests",
        path: "./balancerequests",
      },
      // {
      //   id: 74,
      //   subTitle: "Balance requests gateway / AEPS",
      //   path: "./balancereqgateway",
      // },
      {
        id: 75,
        subTitle: "Balance request history",
        path: "./balancereqhist",
      },
      // {
      //   id: 76,
      //   subTitle: "Distributor primary report",
      //   path: "./distriprimaryreport",
      // },
      {
        id: 77,
        subTitle: "Activation report",
        path: "./activationreport",
      },
      {
        id: 78,
        subTitle: "User cashback report",
        path: "./usercashback",
      },
    ],
  },
  {
    id: 7,
    title: "other reports",
    icon: <BarChartIcon className="!text-white" />,
    subMenu: [
      {
        id: 71,
        subTitle: "Money transfer reports",
        path: "./moneytransferreport",
      },
      {
        id: 72,
        subTitle: "AEPS report",
        path: "./aepsreport",
      },
      {
        id: 73,
        subTitle: "Operator wise report",
        path: "./comingsoon",
      },
      {
        id: 74,
        subTitle: "User wise report",
        path: "./userwisereport",
      },

      {
        id: 78,
        subTitle: "Individual report",
        path: "./individualreport",
      },
      {
        id: 79,
        subTitle: "Opening closing report MAIN",
        path: "./openingclosingreportmain",
      },
      {
        id: 80,
        subTitle: "Operatorwise commission report",
        path: "./operatorwcreport",
      },
      {
        id: 81,
        subTitle: "Commission distribution report",
        path: "./comissiondistribreport",
      },
      {
        id: 82,
        subTitle: "Refund success report",
        path: "./refundsucessstory",
      },
      {
        id: 83,
        subTitle: "Status change report",
        path: "./statuschangereport",
      },
      {
        id: 84,
        subTitle: "Last 3 days secondary report",
        path: "./lastdaysecondaryreport",
      },
      {
        id: 85,
        subTitle: "Retailers stock not taken",
        path: "./retailerstocknottaken",
      },
      {
        id: 86,
        subTitle: "Retailers sale not done",
        path: "./retailersalenotdone",
      },
      {
        id: 87,
        subTitle: "Users sale done",
        path: "./usersaledone",
      },
    ],
  },
  {
    id: 8,
    title: "admin",
    icon: <PersonOutlineIcon className="!text-white" />,
    subMenu: [
      {
        id: 89,
        subTitle: "Add admin MAIN balance",
        path: "./addadmin",
      },
      {
        id: 90,
        subTitle: "Notice",
        path: "./notice",
      },
      {
        id: 91,
        subTitle: "USER KYC",
        path: "./userkyc",
      },
      {
        id: 92,
        subTitle: "Send sms",
        path: "./sendsms",
      },
      {
        id: 93,
        subTitle: "Send whatsapp",
        path: "./sendwhatsapp",
      },
      {
        id: 94,
        subTitle: "Send email",
        path: "./sendemail",
      },
      {
        id: 95,
        subTitle: "Send notification",
        path: "./sendnotification",
      },
      {
        id: 96,
        subTitle: "Banks",
        path: "./banks",
      },
      {
        id: 97,
        subTitle: "Settings",
        path: "./setting",
      },
      {
        id: 98,
        subTitle: "Circle master",
        path: "./circlemasterscreenn",
      },
      {
        id: 99,
        subTitle: "Website logs",
        path: "./websitelogsscreen",
      },
      {
        id: 100,
        subTitle: "Website logs archive",
        path: "./weblogsarchive",
      },
      {
        id: 101,
        subTitle: "SMS logs",
        path: "./smslogs",
      },
      {
        id: 102,
        subTitle: "IP whitelist",
        path: "./ipwhitelistss",
      },
      {
        id: 103,
        subTitle: "Provider types",
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