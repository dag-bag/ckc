"use client";

import Button from "./LinkButton";
import Image from "next/image";

const LeftAside = () => {
  return (
    <aside className="hidden px-5 md:flex flex-col pt-[80px] gap-2 bg-[#F6F7F7]">
      {primary_layout_left_buttons.map(({ title, Icon, hrefs }) => (
        <Button
          key={title}
          title={title}
          Icon={Icon}
          href={hrefs.at(0) as any}
        />
      ))}

      <div className="mt-auto  bg-white mb-5 rounded-xl">
        <Image
          className="rounded-xl border border-dashed border-black"
          src="/upgrade-gif.gif"
          alt="upgrade gif"
          width={300}
          height={200}
        />

        <button className="bg-[#0D0C14] text-white w-full rounded-lg py-2 mt-2 font-josefin border">
          Upgrade to Premium
        </button>
      </div>
    </aside>
  );
};

export default LeftAside;

import {
  RiSettings4Fill,
  RiHomeSmile2Fill,
  RiStoreFill,
  RiBarChart2Fill,
  RiVipCrown2Fill,
  RiBrainFill,
  RiBook2Fill,
  RiLiveFill,
  RiQuestionFill,
} from "react-icons/ri";

const primary_layout_left_buttons = [
  { title: "Home", hrefs: ["/dashboard"], Icon: RiHomeSmile2Fill },
  { title: "Live", hrefs: ["/live"], Icon: RiLiveFill },
  { title: "Learn", hrefs: ["/learn"], Icon: RiBrainFill },
  { title: "Library", hrefs: ["/library"], Icon: RiBook2Fill },
  { title: "Challanges", hrefs: ["/challanges"], Icon: RiVipCrown2Fill },
  { title: "Leaderboard", hrefs: ["/leader"], Icon: RiBarChart2Fill },
  {
    title: "Discovery Jar",
    hrefs: ["/discovery-jar"],
    Icon: RiQuestionFill,
  },
  { title: "Marketplace", hrefs: ["/shop"], Icon: RiStoreFill },
  {
    title: "Refer & Earn",
    hrefs: ["/settings/referral"],
    Icon: RiSettings4Fill,
  },
];
