import axios from "axios";
import React from "react";

export default function useRazorpay(
  callback: () => void,
  amount: number | string
) {
  const getDataFromServer = async () => {
    const { data } = await axios.post("/api/payment", {
      mobile: 8766203976,
      amount: parseInt(amount as string),
    });
    return data;
  };
  const handlePayment = () => {
    getDataFromServer().then((data) => {
      const options = {
        key: "rzp_test_3AGDRLyf7EUWVw",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: "Sample Transaction",
        description: "Test Transaction",
        handler: async function () {
          callback();
        },
        modal: {
          ondismiss: function () {
            alert("Payment is dismissd!");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  };
  return { handlePayment };
}