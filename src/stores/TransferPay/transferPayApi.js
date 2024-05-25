import axios from "axios"
import { toast } from "react-toastify";

export const mtmLoginApi = async (payload) => {
    try {
        // const token = localStorage.getItem("jwt");
        return axios.post(
          "https://api.mtmpay.in/api-login-merchant",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            //   Authorization: token,
            },
          }
        );
    } catch (error) {
        console.log(error);
        toast.error("Error in transferring funds. Please try again later.")
    }
    
    };
    const users = [{
        "id" : "1",
        "bank_details" : "HDFC",
        "transaction" : {
            "orderId" : "MTMO1234",
            "txnId" : "MTMT1233333555",
            "utr": "1234"
    
        } ,
        "amount" : "500",
        "status" : "SUCCESS",
    },
    {
    "id" : "2",
    "bank_details" : "HDFC",
    "transaction" : {
        "orderId" : "MTMO1234",
        "txnId" : "MTMT1233333",
        "utr": "1234"
    
    } ,
    "amount" : "500",
    "status" : "SUCCESS",
    }]
export const instantTransferApi = async (payload) => {
    const token = localStorage.getItem("mtmToken")
try {
    // const token = localStorage.getItem("jwt");
    // return users;
    return axios.post(
      "https://api.mtmpay.in/partner/payout",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
} catch (error) {
    console.log(error);
    toast.error("Error in transferring funds. Please try again later.")
}

}