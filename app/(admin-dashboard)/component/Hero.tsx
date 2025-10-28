import { IoNotificationsCircle } from "react-icons/io5"
import { BiNotification } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import { BiBrain } from "react-icons/bi"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { BsFileText } from "react-icons/bs"
import { BiBookOpen } from "react-icons/bi"
const Hero = () => {
    const first = [
        { title: 'Ai Conversation', heading: 5, num: '+0', content: 'this month', icon: <BiMessage size={20} className="text-blue-500" />, id: 1 },
        { title: 'Total Notes', heading: 0, num: '+0', content: 'this week', icon: <BiMessage size={20} className="text-green-700" />, id: 1 },
        { title: 'Downloads', heading: 0, num: '10 remaining', content: 'this month', icon: <BiMessage size={20} className="text-yellow-500" />, id: 1 },
        { title: 'Study Connections', heading: 4, num: '+0', content: 'this week', icon: <BiMessage size={20} className="text-red-600" />, id: 1 },
    ]
    const sec = [
        { icon: <BiBrain size={25} className="text-blue-500 ml-22 mb-2" />, title: 'Ask AI' },
        { icon: <BsFileText size={25} className="text-green-500 ml-22 mb-2" />, title: 'New Note' },
        { icon: <BiBookOpen size={25} className="text-yellow-500 ml-22 mb-2" />, title: 'Past Questions' },
        { icon: <LiaUserFriendsSolid size={25} className="text-red-500 ml-22 mb-2" />, title: 'Study Buddy' },
    ]
    return (
        <div className="font-sans px-6 mt-28">
            <section className="mb-12">
                <h1 className="font-bold text-2xl mb-3 ">Dashboard</h1>
                <p className="text-gray-500 mb-10">Welcome back! here's what happening with your studies</p>
                <div className="grid grid-cols-4 gap-6">
                    {
                        first.map(list => (
                            <div key={list.id} className="shadow-sm shadow-gray-400 w-64 h-35 rounded-md p-4">
                                <div className="flex justify-between">
                                    <h2 className="font-semibold mb-4">{list.title}</h2>
                                    <span >{list.icon}</span>
                                </div>
                                <h1 className="font-bold text-2xl">{list.heading}</h1>
                                <p><span className="text-green-500">{list.num}</span> {list.content}</p>

                            </div>
                        ))
                    }
                </div>
            </section>


            <section className="flex items-center gap-8 mb-8">
                <div className="rounded-md shadow shadow-gray-500 h-[90vh] px-8 py-12">
                    <h1 className=" text-2xl font-semibold mb-2">Quick Actions</h1>
                    <p className="text-gray-400 mb-8">Jump into your most used features</p>
                    <div className="grid grid-cols-2 space-y-6 gap-8">
                        {
                            sec.map(lists => (
                                <div className="shadow-sm shadow-gray-300 p-4 h-28 rounded-md w-60 text-center">
                                    <span className="mb-8 ">{lists.icon}</span>
                                    <p className="font-bold text-sm w-30 text ml-10">{lists.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="rounded-md shadow shadow-gray-500 h-[90vh] w-1/2 px-8 py-12">
                    <h1 className="flex gap-2 text-2xl font-semibold items-center mb-2"><span><IoNotificationsCircle size={30} /></span>Announcements</h1>
                    <p className="text-gray-400 mb-8">Latest Updates and news</p>
                    <div className="font-sans">
                        <div className="flex gap-4 mb-5">
                            <div className="h-30 w-3 bg-blue-100"></div>
                            <div>
                                <nav className="flex justify-between mb-2">
                                    <h1 className="font-bold">Welcome to Ocatalearn!</h1>
                                    <button className="border border-gray-400 rounded-xl px-1 text-gray-500 font-semibold">8/29/2025</button>
                                </nav>
                                <p className="text-sm text-gray-500 ">Your AI-Powered learning platform  is now live. Start exploring our features including AI chats, study buddy matching, and collaborating note-taking. </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-4 mb-6">

                                <div className="h-30 w-3 bg-blue-100"></div>
                                <div>
                                    <nav className="flex justify-between mb-2">
                                        <h1 className="font-bold">New AI Features Available</h1>
                                        <button className="border border-gray-400 rounded-xl px-1 text-gray-500 font-semibold">8/29/2025</button>
                                    </nav>
                                    <p className="text-sm text-gray-500 ">Your AI-Powered learning platform  is now live. Start exploring our features including AI chats, study buddy matching, and collaborating note-taking. </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-4 mb-3">

                                <div className="h-30 w-3 bg-blue-100"></div>
                                <div>
                                    <nav className="flex justify-between mb-2">
                                        <h1 className="font-bold">Study Group Beta Launch</h1>
                                        <button className="border border-gray-400 rounded-xl px-1 text-gray-500 font-semibold">8/29/2025</button>
                                    </nav>
                                    <p className="text-sm text-gray-500 ">Form study groups with classmate in your department. Share notes, schedule sessions, and collaboration on assignments seamlessly. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border border-gray-400 rounded-md px-6 py-6 font-sans">
                <h1 className="font-bold text-2xl mb-2">Recent activity </h1>
                <p className="text-gray-500 text-sm mb-8">Your latest actions on OctaLearn</p>
                <div className="px-6">
                    <div className="flex gap-5 mb-6">
                        <div className="h-8 w-8 rounded-2xl border"><BiMessage size={20}/></div>
                        <div>
                            <p className="font-medium">Asked, hssksksksk</p>
                            <p>10/15/2025,  4:17:07</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mb-6">
                        <div className="h-8 w-8 rounded-2xl border"><BiMessage size={20}/></div>
                        <div>
                            <p className="font-medium">Asked, hssksksksk</p>
                            <p>10/15/2025,  4:17:07</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mb-6">
                        <div className="h-8 w-8 rounded-2xl border"><BiMessage size={20}/></div>
                        <div>
                            <p className="font-medium">Asked, hssksksksk</p>
                            <p>10/15/2025,  4:17:07</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mb-6">
                        <div className="h-8 w-8 rounded-2xl border"><BiMessage size={20}/></div>
                        <div>
                            <p className="font-medium">Asked, hssksksksk</p>
                            <p>10/15/2025,  4:17:07</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mb-6">
                        <div className="h-8 w-8 rounded-2xl border"><BiMessage size={20}/></div>
                        <div>
                            <p className="font-medium">Asked, hssksksksk</p>
                            <p>10/15/2025,  4:17:07</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Hero