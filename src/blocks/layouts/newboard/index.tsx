"use client";
import Link from "next/link";
import Canvas from "./canvas";
import { data } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Newboard() {
  const pathname = usePathname();
  const configuration = data[pathname];
  return (
    <div id="newboard_wrapper">
      <Canvas progress={configuration?.progress} />
      <motion.div id="newboard_main">
        <div className="max-w-6xl mx-auto md:p-10 p-5 lg:mt-12 grid md:gap-9  border">
          <h1 className=" font-josefin  font-bold lg:text-5xl md:text-2xl text-xl leading-14">
            {configuration?.question}
          </h1>
          <div className="py-5">
            {pathname == "/newboard/name" && <NameAction />}
            {pathname == "/newboard/grade" && <GradeAction />}
            {pathname == "/newboard/mobile" && <MobileAction />}
            {pathname == "/newboard/location" && <LocationAction />}
            {pathname == "/newboard/birthday" && <BirthdateAction />}
            {pathname == "/newboard/avatar" && <AvatarSelectionAction />}
          </div>
          <div className="">
            <Link
              href={configuration?.nextPath}
              className="bg-blue-500 w-[120px] center  h-[48px] rounded-full text-white md:text-lg shadow-lg"
            >
              Next
            </Link>
          </div>
        </div>
        {/* <Model /> */}
        {/* <Logo /> */}
      </motion.div>
    </div>
  );
}

const Model = () => {
  return (
    <div className="absolute bottom-10 right-10 lg:h-[300px] lg:w-[300px] w-[150px] h-[150px] ">
      <Image alt="running" src={"/running.png"} fill />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="absolute bottom-8 left-5 h-[80px] w-[110px] ">
      <Image alt="running" src={"/logo.png"} fill />
    </div>
  );
};

const Input = ({ placeholder, type }: any) => {
  return (
    <div className="md:h-[60px] h-[50px] inline-flex items-center md:px-10 px-5 border-b-2 border-blue-500 bg-blue-50">
      <input
        type={type}
        placeholder={placeholder}
        className="border-none outline-none bg-transparent md:placeholder:text-lg"
      />
    </div>
  );
};

// Actions
export const NameAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
    </div>
  );
};

export const GradeAction = () => {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-wrap md:gap-5 gap-2">
      {grades.map((grade) => (
        <button
          className="md:w-[60px] md:h-[60px] w-[55px] h-[55px] bg-blue-50 rounded-full border-b-2 border-blue-500 text-xl"
          key={grade}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};
export const BirthdateAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input placeholder="Birthdate" type="date" />
    </div>
  );
};

export const MobileAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input placeholder="Mobile Number" type="number" />
    </div>
  );
};

export const LocationAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input placeholder="City" />
      <Input placeholder="State" />
      <Input placeholder="Country" />
    </div>
  );
};

export const AvatarSelectionAction = () => {
  const avatars = [
    "/avatars/asian-man.png",
    "/avatars/black-man.png",
    "/avatars/punjabi.png",
  ];
  return (
    <div className="flex md:gap-5 gap-2 ">
      {avatars.map((avatarURL) => (
        <button
          key={avatarURL}
          className="rounded-full border-b-[3px] border-blue-500 drop-shadow-xl overflow-hidden"
        >
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={100}
            height={100}
            className="hidden md:block"
          />
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={80}
            height={80}
            className="block md:hidden"
          />
        </button>
      ))}
    </div>
  );
};