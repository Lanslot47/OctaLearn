import { BiBrain } from "react-icons/bi"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { BsFileText } from "react-icons/bs"
import { BiBookOpen } from "react-icons/bi"
const Section = () => {

    const list = [
        { icon: <BiBrain size={30} />, title: "Ask AI Anything", content: "Get instant help with assignments, explanations, and study tips from our advanced AI tutor", id:1 },
        { icon: <BiBookOpen size={30} />, title: "Past Questions", content: "Access thousands of past questions and handouts from various institutions and courses", id:2 },
        { icon: <BsFileText size={30} />, title: "Smart Notes", content: "Create, Organize and sync your notes across devices. Export To PDF for offline studying", id:3 },
        { icon: <LiaUserFriendsSolid size={30} />, title: "Study Buddies", content: "Connect with classmates and study partners. Form study groups amd share knowledge" ,id:4},
    ]
    return (
        <div className="pb-16">
            <h1 className="font-semibold text-center text-3xl mb-4 font-sans">EVERYTHING YOU NEED TO EXCEL</h1>
            <p className="text-center font-sans text-gray-600">powerful tools designed for modern learners</p>
            <div className="flex justify-center gap-10 items-center flex-col sm:flex-row py-8 ">

                {
                    list.map(items => (
                        <div className="h-64 w-65 justify-center   p-8 rounded-md cursor-pointer" key={items.id}>
                            <div className="bg-blue-500 w-12 h-12 rounded-md ml-16 mb-4 px-2.5 pt-2 text-center text-white font-sans cursor-pointer hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75 ">
                                <h1 className=""><span>{items.icon}</span></h1>
                            </div>

                            <h1 className="font-semibold mb-3 text-blue-400 text-center items-center">{items.title}</h1>
                            <p className="text-sm text-gray-400 text-center items-center">{items.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
export default Section