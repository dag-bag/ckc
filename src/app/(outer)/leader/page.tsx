"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
const LeaderboardData = [
  {
    rank: 1,
    badges: 42,
    name: "Alice",
    stars: 5678,
    watched_videos: 31,
    readed_comics: 27,
    challanges_completed: 49,
  },
  {
    rank: 2,
    badges: 73,
    name: "Bob",
    stars: 9876,
    watched_videos: 58,
    readed_comics: 14,
    challanges_completed: 68,
  },
  {
    rank: 3,
    badges: 19,
    name: "Charlie",
    stars: 12345,
    watched_videos: 43,
    readed_comics: 30,
    challanges_completed: 55,
  },
  {
    rank: 4,
    badges: 65,
    name: "David",
    stars: 8765,
    watched_videos: 74,
    readed_comics: 10,
    challanges_completed: 41,
  },
  {
    rank: 5,
    badges: 51,
    name: "Eva",
    stars: 4321,
    watched_videos: 22,
    readed_comics: 39,
    challanges_completed: 26,
  },
  {
    rank: 6,
    badges: 37,
    name: "Frank",
    stars: 5432,
    watched_videos: 49,
    readed_comics: 52,
    challanges_completed: 37,
  },
  {
    rank: 7,
    badges: 88,
    name: "Grace",
    stars: 7654,
    watched_videos: 63,
    readed_comics: 18,
    challanges_completed: 71,
  },
  {
    rank: 8,
    badges: 28,
    name: "Hannah",
    stars: 6543,
    watched_videos: 35,
    readed_comics: 46,
    challanges_completed: 60,
  },
  {
    rank: 9,
    badges: 59,
    name: "Isaac",
    stars: 2345,
    watched_videos: 17,
    readed_comics: 25,
    challanges_completed: 33,
  },
  {
    rank: 10,
    badges: 47,
    name: "Jasmine",
    stars: 8765,
    watched_videos: 53,
    readed_comics: 28,
    challanges_completed: 44,
  },
];

import { BsChevronDown, BsDot } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import Container from "@/blocks/UI/PageContainer";
import { MdOutlineCalendarMonth } from "react-icons/md";
const solutions = [
  {
    name: "Leader Legends",
    description: "Measure actions your users take",
    href: "##",
    icon: RiGlobalLine,
  },
  {
    name: "October warrior",
    description: "Create your own targeted content",
    href: "##",
    icon: MdOutlineCalendarMonth,
  },
];

const LeaderboardPage = () => {
  const [leaderboardType, setLeaderboardType] = useState<
    "Leader Legends" | "monthly warrior"
  >("Leader Legends");

  return (
    <Container gridType="single">
      <div>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center bg-gray-100 rounded-md w-[200px] justify-between px-5 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="capitalize">{leaderboardType}</span>

                <BsChevronDown
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                // as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute  z-10 mt-3  max-w-sm  sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid w-[250px]  bg-white  ">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          onClick={() => {
                            setLeaderboardType(item.name as any);
                          }}
                          className=" flex items-center rounded-lg p-1 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50  cursor-pointer"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-black sm:h-12 sm:w-12">
                            <item.icon color="gray" size={22} />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 capitalize">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>

      <div className="h-[450px] bg-[#FFFBEF]  rounded-xl bg-center flex-col center mt-2">
        <p className="capitalize font-medium text-xl mb-2">{leaderboardType}</p>
        <h5 className="text-5xl font-medium text-yellow-500">Leaderboard</h5>

        <div className="flex gap-10 mt-10 border-2--- items-end">
          <div>
            <div className="w-[180px] h-[180px] bg-black rounded-full border-[10px] border-slate-300 bg-[url('/ed.png')] bg-cover">
              <div className="bg-white p-5 rounded-full w-[50px] h-[50px] center shadow-xl text-xl font-medium">
                2
              </div>
            </div>
            <h5 className="text-center font-medium text-lg mt-2">
              Johney Depp
            </h5>
          </div>
          <div>
            <div className=" w-[220px] h-[220px] bg-black rounded-full border-[10px] border-yellow-500 bg-[url('/ed.png')] bg-cover">
              <div className="bg-white p-5 rounded-full w-[50px] h-[50px] center shadow-xl text-xl font-medium">
                1
              </div>
            </div>
            <h5 className="text-center font-medium text-lg mt-2">
              Johney Depp
            </h5>
          </div>
          <div>
            <div className="w-[150px] h-[150px] bg-black rounded-full border-[10px] border-[#DAA06D] bg-[url('/ed.png')] bg-cover">
              <div className="bg-white p-5 rounded-full w-[50px] h-[50px] center shadow-xl text-xl font-medium">
                3
              </div>
            </div>
            <h5 className="text-center font-medium text-lg mt-2">
              Johney Depp
            </h5>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-3">
        <h3 className="pl-20 text-xl font-medium py-1">My Rank</h3>
        <div className="bg-indigo-50 pt-3 pr-5 rounded-xl">
          <DataHeader />
          <div className="grid grid-cols-[200px_auto] items-center pb-10">
            <div className="center">
              <div className="text-xl font-medium h-10 w-10 center rounded-full border border-gray-100">
                172
              </div>
            </div>
            <div className="w-full  bg-gray-50 rounded-full  grid grid-cols-[300px_1fr_1fr] p-3 pr-5">
              <div className="flex gap-3 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-black-- bg-[url('/ed.png')] bg-cover"></div>
                <div>
                  <h5 className="font-medium">Rahul UP</h5>
                  <p className="text-xs -mt-1 flex items-center ">
                    6th <BsDot /> Govt. High School
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaStar color="#EAB308" size={25} />
                <p className="text-md font-medium text-gray-800">{"1000"}</p>
              </div>
              <div className="flex items-center gap-3">
                <SlBadge color="gray" size={25} />
                <p className="text-md font-medium text-gray-800">{"50"}</p>
              </div>
            </div>
          </div>
        </div>

        <DataHeader />

        {LeaderboardData.map((data) => {
          return (
            <div
              key={data.rank}
              className="grid grid-cols-[200px_auto] items-center"
            >
              <div className="center">
                <div className="text-xl font-medium h-10 w-10 center rounded-full border border-gray-100 font-game">
                  {data.rank}
                </div>
              </div>
              <div className="w-full  bg-gray-50 rounded-full  grid grid-cols-[300px_1fr_1fr] p-3 pr-5">
                <div className="flex gap-3 items-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-black-- bg-[url('/ed.png')] bg-cover"></div>
                  <div>
                    <h5 className="font-medium font-heading">{data.name}</h5>
                    <p className="text-xs -mt-1 flex items-center font-heading text-gray-600">
                      6th <BsDot /> Govt. High School
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaStar color="#EAB308" size={25} />
                  <p className="text-md font-medium text-gray-800 font-game">
                    {data.stars.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <SlBadge color="gray" size={25} />
                  <p className="text-md font-medium text-gray-800 font-game">
                    {data.badges.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
export default LeaderboardPage;

import { SlBadge } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { BiSolidVideos } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";

const DataHeader = () => {
  return (
    <div className="grid grid-cols-[200px_auto] items-center py-3">
      <div className="center">
        <span className="font-medium text-sm text-gray-500 uppercase tracking-wider font-heading pl-3">
          Rank
        </span>
      </div>
      <div className="grid grid-cols-[300px_1fr_1fr]  pr-5">
        <span className="font-medium text-sm text-gray-500 uppercase tracking-wider font-heading pl-3">
          Profile
        </span>
        <span className="font-medium text-md text-gray-500 uppercase-- tracking-wider font-heading pl-3">
          Stars
        </span>
        <span className="font-medium text-md text-gray-500 uppercase-- tracking-wider font-heading pl-3">
          Badges
        </span>
      </div>
    </div>
  );
};