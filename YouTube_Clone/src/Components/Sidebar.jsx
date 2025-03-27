import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

import { FaFire } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { GiStarMedal } from "react-icons/gi";
import { LiaBookSolid } from "react-icons/lia";
import { GiHanger } from "react-icons/gi";
import { MdOutlineWifiTethering } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiMessageError } from "react-icons/bi";



function Sidebar() {
  const sidebar = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdSubscriptions />,
    },
  ];

  let sidebar2 = [
    {
      id: 1,
      name: "History",
      icon: <FaHistory />,
    },
    {
      id: 2,
      name: "Playlist",
      icon: <RiPlayList2Fill />,
    },
    {
      id: 3,
      name: "Your Videos",
      icon: <GoVideo />,
    },
    {
      id: 4,
      name: "Your Courses",
      icon: <IoBookOutline />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <IoMdTime />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <AiFillLike />,
    },
  ];

  let sidebar3=[
    {
        id: 1,
        name: "Trending",
        icon: <FaFire />,
      },
    {
        id: 2,
        name: "Shopping",
        icon: <RiShoppingBag4Line />,
      },
    {
        id: 3,
        name: "Music",
        icon: <IoMusicalNotesOutline />,
      },
    {
        id: 4,
        name: "Films",
        icon: <PiFilmSlateDuotone />,
      },
    {
        id: 5,
        name: "Live",
        icon: <CiWifiOn />,
      },
    {
        id: 6,
        name: "Gaming",
        icon: <SiYoutubegaming />,
      },
    {
        id: 7,
        name: "News ",
        icon: <MdNewspaper />,
      },
    {
        id: 8,
        name: "Sport ",
        icon: <GiStarMedal />,
      },
    {
        id: 9,
        name: "Courses ",
        icon: <LiaBookSolid />,
      },
    {
        id: 10,
        name: "Fashion & Beauty ",
        icon: <GiHanger />,
      },
    {
        id: 11,
        name: "Liked Videos",
        icon: <MdOutlineWifiTethering />,
      },
  ]
  let sidebar4=[
    {
        id:1,
        name:'settings',
        icon:<IoSettingsOutline/>
    },
    {
        id:2,
        name:'Report History',
        icon:<CiFlag1/>
    },
    {
        id:3,
        name:'Help',
        icon:<FaRegQuestionCircle/>
    },
    {
        id:4,
        name:'Feedback',
        icon:<BiMessageError/>
    },
  ]

  return (
    <div className="px-4 w-[15%] mt-16 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col space-y-2 w-[15%]">
        {sidebar.map((v, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 px-3 py-2 w-full rounded-xl hover:bg-gray-200"
          >
            <div>{v.icon}</div>
            <span className="font-semibold">{v.name}</span>
          </div>
        ))}
        <hr className=" border border-gray-300" />
      </div>

      {/* Sidevar 2 */}
      <div className="flex flex-col space-y-2 w-[15%] mt-2">
        <div className="flex items-center px-2 space-x-3 py-1 w-full rounded-xl hover:bg-gray-200">
        <span className="font-semibold">You</span>
        <FaChevronRight className="text-xs"/>
        </div>
        {sidebar2.map((v, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 px-3 py-2 w-full rounded-xl hover:bg-gray-200"
          >
            <div>{v.icon}</div>
            <span className="font-semibold">{v.name}</span>
          </div>
        ))}
        <hr className=" border border-gray-300" />
      </div>
      {/* Sidevar 2 */}

      {/* Sidebar 3 */}
      <div className="flex flex-col space-y-2 w-[15%] mt-2">
        <h1 className="font-bold">Explore</h1>
        {sidebar3.map((v, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 px-3 py-2 w-full rounded-xl hover:bg-gray-200"
          >
            <div>{v.icon}</div>
            <span className="font-semibold">{v.name}</span>
          </div>
        ))}
        <hr className=" border border-gray-300" />
      </div>
      {/* Sidebar 3 */}

      {/* sidebar4 */}
      <div className="flex flex-col space-y-2 w-[15%] mt-2">
        {sidebar4.map((v, i) => (
          <div
            key={i}
            className="flex items-center space-x-6 px-3 py-2 w-full rounded-xl hover:bg-gray-200"
          >
            <div>{v.icon}</div>
            <span className="font-semibold">{v.name}</span>
          </div>
        ))}
        <hr className=" border border-gray-300" />
      </div>
      {/* sidebar4 */}
    </div>
  );
}

export default Sidebar;
