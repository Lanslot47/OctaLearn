import Image from "next/image"
import { GrDashboard } from "react-icons/gr"
import { BiMessage } from "react-icons/bi"
import { BiBookOpen } from "react-icons/bi"
import { BsFileText } from "react-icons/bs"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { CiSettings } from "react-icons/ci"
import Link from 'next/link'
const Sidebar = () => {
    const items = [
        { id: 1, title: "Dashboard", icon: <GrDashboard size={20}/>, url: './dashboard' },
        { id: 2, title: "Ask AI", icon: <BiMessage size={20}/>, url: './ai' },
        { id: 3, title: "Past Questions", icon: <BiBookOpen size={20}/>, url: './pastquestions' },
        { id: 4, title: "Notes", icon: <BsFileText size={20}/>, url: './notes' },
        { id: 5, title: "Study Buddy", icon: <LiaUserFriendsSolid size={20}/>, url: './studyFriend' },
        { id: 6, title: "Settings", icon: <CiSettings size={20}/>, url: './settings' },
    ]
    return (
        <div className="py-6 px-6 h-screen w-64 border-2 border-gray-300 border-t-0 fixed top-0">
            <div >
                <h1 className="text-blue-500 font-bold font-sans text-xl flex items-center gap-2 mb-6">
                    <Image src={'/Capture.PNg'} alt="Logo" height={30} width={30} />
                    OctaLearn
                </h1>
                <hr className="w-[230px] border-[1.5px] border-gray-300 mb-6" />
            </div>
            <div className="space-y-6 font-semibold">
                {
                    items.map(list=>(
                        <Link href={list.url} key={list.id} className="flex gap-4 items-center font-sans text-gray-600 hover:bg-blue-500 w-52 px-2 rounded-md py-2 hover:text-white"><span>{list.icon}</span>{list.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Sidebar