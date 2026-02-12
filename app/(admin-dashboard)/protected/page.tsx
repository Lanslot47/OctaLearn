"use client"
import { BiBookOpen } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsFileText } from "react-icons/bs";
import { Shield } from "lucide-react"

import { Crown, Trash2, Download } from "lucide-react"
import { useState } from "react";


const OctAdmin = () => {
    type AdminView = "users" | "handouts" | "announcement" | "analytics";

    const [active, setActive] = useState<AdminView>("users");
    const [clickEmail, setClickEmail] = useState(false)
    const [upload, setUpload] = useState(false)

    const data = [
        { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: " grand pro", details: "view details", id: 1 },
        { name: "sarah", email: "user@gmail.com", university: "unijos", date: " jooined . 12/feb/2026", plan: " grand pro", details: "view details", id: 2 },
        { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: "grand pro", details: "view details", id: 3 },
        { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: "grand pro", details: "view details", id: 4 }
    ]
    const stats = [
        { title: "Total Users", heading: 1247, icon: <LiaUserFriendsSolid size={40} className="text-blue-500" />, id: 1 },
        { title: "Active Users", heading: 892, content: "this week", icon: <BsFileText size={40} className="text-green-700" />, id: 2 },
        { title: "Total Handout", heading: 156, icon: <BiBookOpen size={40} className="text-yellow-500" />, id: 3 },
        { title: "Pro Users", heading: 120, icon: <LiaUserFriendsSolid size={40} className="text-red-600" />, id: 4 },
    ];
    const materials = [
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15} />, date: "12/43/2028", id: 1 },
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15}/>, date: "12/43/2028", id: 2 },
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15} />, date: "12/43/2028", id: 3 }
    ];
    const content = [
        { topic: "data structure note", sunject: "compute", download: "2100 downloads", id: 1 },
        { topic: "data structure note", sunject: "compute", download: "2100 downloads", id: 2 },
        { topic: "data structure note", sunject: "compute", download: "2102 downloads", id: 3 }
    ]

    return (
        <div className="p-4 via-none">
            <span className="flex gap-2 mb-3"><Shield size={30} className="text-blue-500" /><h1 className="text-2xl mt-1 font-bold">Admin Panel</h1></span>
            <p className="text-gray-400 mb-4">manage users , content , and system settings</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((list) => (
                    <div key={list.id} className="shadow-sm shadow-gray-300 rounded-md p-3 border border-gray-100">
                        <div className="flex justify-between ">
                            <h2 className="font-semibold text-gray-400">{list.title}</h2>
                            <span>{list.icon}</span>
                        </div>
                        <h1 className="font-bold text-2xl">{list.heading}</h1>
                        <p className="text-sm">
                        </p>
                    </div>
                ))}
                <div className=" flex gap-75  items-center  w-[80vw] h-8 rounded-2xl p-4 mr-8 mb-4 bg-gray-200 font-bold">
                    <button
                        onClick={() => setActive("users")}
                        className={active === "users" ? "bg-white p-2 rounded-xl" : "p-2"}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => setActive("handouts")}
                        className={active === "handouts" ? "bg-white p-2 rounded-xl" : "p-2"}
                    >
                        Handouts
                    </button>
                    <button
                        onClick={() => setActive("announcement")}
                        className={active === "announcement" ? "bg-white p-2 rounded-xl" : "p-2"}
                    >
                        announcement
                    </button>
                    <button
                        onClick={() => setActive("analytics")}
                        className={active === "analytics" ? "bg-white p-2 rounded-xl" : "p-2"}
                    >
                        analytics
                    </button>
                </div>
            </div>
            {/* USERS */}
            {active === "users" && (
                <div className="w-[80vw]  border-gray-100 p-4  shadow-2xl rounded-2xl">
                    <h1 className="text-2xl mt-1 text-black font-semibold mb-2">Recent Users </h1>
                    <p className="text-gray-400 mb-4">manage users account and supscriptions</p>
                    {data.map((list) => (
                        <div key={list.id} className="shadow-md w-[75vw] ml-5 rounded-2xl  border-sm mb-6 bg-gray-10 p-4">
                            <h2 className="  font-bold text-black ">{list.name}</h2>
                            <p className="text-gray-500 mb-2 ">{list.email}</p>
                            <div className=" flex items-center gap-190">
                                <span className=" flex items-center mb-2 text-gray-500  gap-2">{list.university} <ul>{list.date}</ul></span>
                                <span className="flex items-center gap-6 text-xs"><a href="#" className="border rounded-2xl p-2 flex items-center text-xs gap-1 hover:bg-blue-200"> < Crown size={10} />{list.plan}</a> <a href="./Settings" className="border rounded-2xl p-1.5 hover:bg-blue-200 ">{list.details}</a></span>

                            </div>

                        </div>
                    ))

                    }
                </div>
            )}

            {/* Handouts */}
            {active === "handouts" && (
                <div className="w-[80vw]  border-gray-100 p-4  shadow-2xl rounded-2xl ">
                    <h1 className="text-2xl mt-1 text-black font-semibold mb-2">Manage Handouts </h1>
                    <p className="text-gray-400 mb-4">Uploads and manage study materials</p>
                    <button onClick={() => setUpload(prev => !prev)} className=" bg-blue-500 w-50 h-10 p-2 text-white rounded-xl items-left">uploads handout</button>
                    <div>
                        {
                            materials.map((material) => (
                                <div key={material.id} className="shadow-sm mb-4 p-6 ">
                                    <h1 className="  font-bold text-black mb-2 ">{material.subject}</h1>
                                    <div className="flex gap-4 text-xs text-gray-500  ">
                                        <span>{material.topic}</span>
                                        <span className=" flex items-center text-xs">{material.downloads} {material.char}</span>
                                        <span>{material.date}</span>
                                        <span className="ml-230">{material.del}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}

            {upload &&
                <div className="fixed inset-0 items-center justify-center z-60">
                    <div className="justify-center items-center w-2/5 mt-32 ml-140 bg-gray-100 rounded-xl">
                        <div className="p-3 " >
                            <h1 className="text-2xl mt-1 font-bold">Ceate Announcement</h1>
                            <p className="text-gray-400 mb-4 ">send announcement to all users</p>

                            <label className="font-semibold">Title</label>
                            <br />
                            <input placeholder="Important Update here" className=" p-6 rounded-xl w-full h-15 border-2 border-blue-500" />
                        </div >


                        <div className="p-6 ">
                            <label className="font-semibold">description</label>
                            <br />
                            <textarea placeholder="write your announcement here ... " className="p-6  mb-4 rounded-xl w-full h-20 border-2 border-blue-500" />
                            <br></br>
                            <div className="flex gap-2">
                                <select
                                    className="w-1/2 shadow-md p-2 focus:outline-blue-500 rounded-md  text-md ">
                                    <option value="">Select subject</option>
                                    <option value="100 level">Englisj</option>
                                    <option value="200 level">Mathematics</option>
                                    <option value="300 level">Chemistry</option>
                                    <option value="400 level">Biology</option>
                                </select>

                                <select
                                    className="w-1/2 shadow-md p-2 focus:outline-blue-500 rounded-md text-md ">
                                    <option value="">Select your Level</option>
                                    <option value="100 level">100 level</option>
                                    <option value="200 level">200 level</option>
                                    <option value="300 level">300 level</option>
                                    <option value="400 level">400 level</option>
                                </select>

                            </div>

                            <input type="file" placeholder="choose the file" />
                            <div className="flex gap-2 justify-end p-3">
                                <div>
                                    <button onClick={() => setUpload(false)} className="border w-16 rounded-xl h-8">
                                        cancel
                                    </button>
                                </div>
                                <div className="border bg-blue-500 text-white p-1 h-9  rounded-xl w-16">
                                    publish
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>

            }
            {/* {anouncement} */}
            {active === "announcement" && (
                <div className="w-[80vw]  border-gray-100 p-4  shadow-2xl rounded-2xl ">

                    <h1 className="text-2xl mt-1 text-black font-semibold mb-2">Anouncement </h1>
                    <p className="text-gray-400 mb-6">Create Anouncement for All Users</p>
                    <button className=" bg-blue-500 w-50 h-10 p-2 text-white rounded-xl items-left" onClick={() => setClickEmail(prev => !prev)}>Create Announcement</button>
                    {/* <a href="#" className="text-blue-500  hover-underline cursor-pointer ml-170" onClick={() => setClickEmail(prev => !prev)}>
                Change Email
              </a> */}


                    <div className="h-80 shadow-sm mb-6">
                        <h1 className="text-2xl mt-1 text-black font-semibold mb-2 text-center">Announcement</h1>
                        <p  >Create your first anniuncement to notify all users about important update</p>

                    </div>

                </div>


            )}

            {clickEmail &&
                <div className="fixed inset-0 items-center justify-center z-60">
                    <div className="justify-center items-center w-2/5 mt-32 ml-140 bg-gray-100 rounded-xl">
                        <div className="p-3 " >
                            <h1 className="text-2xl mt-1 font-bold">Ceate Announcement</h1>
                            <p className="text-gray-400 mb-4">send announcement to all users</p>

                            <label className="font-semibold p-4">Title</label>
                            <br />
                            <input placeholder="Important Update here" className=" p-6 rounded-xl w-full h-15 border-2 border-blue-500" />
                        </div >


                        <div className="p-6">
                            <label className="font-semibold">Content</label>
                            <br />
                            <textarea placeholder="write your announcement here ... " className="p-6 rounded-sm w-full h-60 border-2 border-blue-500" />
                            <br></br>

                            <div className="flex gap-2 justify-end p-3">


                                <div>
                                    <button onClick={() => setClickEmail(false)} className="border w-16 rounded-xl h-8">
                                        cancel
                                    </button>
                                </div>
                                <div className="border bg-blue-500 text-white p-1 h-9  rounded-xl w-16">
                                    publish
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>

            }
            {/* Analytics */}
            {active === "analytics" && (
                <div className="flex items-center gap-2">
                    <div className="border-gray-100 p-4  shadow-2xl rounded-2xl h-100 w-1/2 ">
                        <h1 className="text-2xl mt-1 text-black font-semibold mb-2">User Growth </h1>
                    </div>
                    <div className="w-1/2 border-gray-100 p-4 h-100   shadow-2xl rounded-2xl">
                        <h1 className="text-2xl mt-1 text-black font-semibold mb-2">Popular Content</h1>

                        {
                            content.map((content) => (
                                <div key={content.id}>
                                    <h3 className="text-m mt-1 text-black font-semibold">{content.topic}</h3>
                                    <span className="flex items-center gap-110">
                                        <h5 className=" text-center mb-4 text-sm">{content.sunject}</h5>
                                        <h4 className=" text-center mb-4 border-1 p-1 text-xs flex rounded-xl " >{content.download}</h4>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}


        </div>
    )
};
export default OctAdmin;