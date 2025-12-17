"use client"
import Image from "next/image"
import { BiMessage, BiBookOpen } from "react-icons/bi"
import { BsFileText } from "react-icons/bs"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { CiSettings } from "react-icons/ci"
import Link from "next/link"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { LayoutDashboard } from "lucide-react"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const items = [
    { id: 1, title: "Dashboard", icon: <LayoutDashboard size={20} />, url: "./admin" },
    { id: 2, title: "Ask AI", icon: <BiMessage size={20} />, url: "./askAi" },
    { id: 3, title: "Past Questions", icon: <BiBookOpen size={20} />, url: "./pastQ" },
    { id: 4, title: "Notes", icon: <BsFileText size={20} />, url: "./Note" },
    { id: 5, title: "Study Buddy", icon: <LiaUserFriendsSolid size={20} />, url: "./studyFriend" },
    { id: 6, title: "Settings", icon: <CiSettings size={20} />, url: "./Settings" },
  ]

  return (
    <>
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h1 className="text-blue-500 font-bold text-lg flex items-center gap-2">
          <Image src={"/Capture.PNg"} alt="Logo" height={25} width={25} />
          OctaLearn
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-600 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full  border-r-2 border-gray-300 px-6 py-6 w-64 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div>
          <h1 className="text-blue-500 font-bold font-sans text-xl flex items-center gap-2 mb-6">
            <Image src={"/Capture.PNg"} alt="Logo" height={30} width={30} />
            OctaLearn
          </h1>
          <hr className="w-[230px] border-[1.5px] border-gray-300 mb-6" />
        </div>

        <div className="space-y-4 font-semibold">
          {items.map((list) => (
            <Link
              href={list.url}
              key={list.id}
              className="flex gap-4 items-center font-sans text-gray-600 hover:bg-blue-500 w-52 px-2 rounded-md py-2 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <span>{list.icon}</span>
              {list.title}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
        ></div>
      )}
    </>
  )
}

export default Sidebar
