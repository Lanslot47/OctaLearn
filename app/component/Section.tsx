import { BiBrain, BiBookOpen } from "react-icons/bi"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { BsFileText } from "react-icons/bs"

const Section = () => {

    const list = [
        { icon: <BiBrain size={30} />, title: "Ask AI Anything", content: "Get instant help with assignments, explanations, and study tips from our advanced AI tutor", id: 1 },
        { icon: <BiBookOpen size={30} />, title: "Past Questions", content: "Access thousands of past questions and handouts from various institutions and courses", id: 2 },
        { icon: <BsFileText size={30} />, title: "Smart Notes", content: "Create, Organize and sync your notes across devices. Export To PDF for offline studying", id: 3 },
        { icon: <LiaUserFriendsSolid size={30} />, title: "Study Buddies", content: "Connect with classmates and study partners. Form study groups and share knowledge", id: 4 },
    ]

    return (
        <div className="pb-16 px-4">
            <h1 className="font-semibold text-center text-2xl sm:text-3xl mb-4 font-sans">
                EVERYTHING YOU NEED TO EXCEL
            </h1>

            <p className="text-center font-sans text-gray-600 text-sm sm:text-base">
                powerful tools designed for modern learners
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                {list.map(items => (
                    <div className="h-auto w-full p-6 rounded-md cursor-pointer text-center" key={items.id}>
                        <div className="bg-blue-500 w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white rounded-md hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75">
                            {items.icon}
                        </div>

                        <h1 className="font-semibold mb-3 text-blue-400">{items.title}</h1>
                        <p className="text-sm text-gray-400">{items.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section