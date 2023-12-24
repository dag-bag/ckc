"use client";
import MarkDownviwer from "@/blocks/atoms/markdown/viewier";
import useRazorpay from "@/hooks/useRazorpay";
import axios from "axios";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
const SubscriptionPlan = ({ d }: any) => {
  const buyPremium = async () => {
    const data = await axios
      .post("/api/user/unlock/premium", {
        plan: 1,
        title: "Super Premium",
        days: parseInt(d.duration_days),
      })
      .then((res) => console.log(res));
    console.log(data);
  };
  const { handlePayment } = useRazorpay(buyPremium, parseInt(d.price));

  return (
    <div className="bg-white rounded-md overflow-hidden flex flex-col  pb-5 font-heading">
      <div className=" rounded-xl overflow-hidden">
        <div className="relative aspect-w-6 aspect-h-4 ">
          <Image fill src={d.thumbnail} alt="hello" />
        </div>
      </div>
      <div className="center flex-col mt-5">
        <h1 className="text-xl font-amar">{d.title}</h1>
        <p className="text-center font-fun text-sm text-slate-800">{d.desc}</p>
      </div>

      <div className="px-5 font-heading">
        <ul className="mt-5 border-2-- pl-5">
          <MarkDownviwer d={d.content} />
        </ul>
      </div>

      <div className="center mt-5">
        <button
          className=" font-amar px-20 py-3 bg-lightblue text-xl  rounded-full text-white"
          onClick={handlePayment}
        >
          ₹ {d.price}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
