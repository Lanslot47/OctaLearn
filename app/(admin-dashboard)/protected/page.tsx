"use client"
import { BiBookOpen } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsFileText } from "react-icons/bs";
import { Shield } from "lucide-react"

import { Crown, Trash2, Download } from "lucide-react"
import React, { useEffect, useState } from "react";

type User = {
    _id: string;
    userName: string;
    email: string;
    department: string;
    interest: string;
    institution: string;
    course: string;
    Bio: string;
    phone: string;
    level: string;
    plan: string;
}
type Announcement = {
    title: string;
    content: string
}
type Handout = {
    file: String,
    title: String,
    content: String,
    Level: String,

}
const OctAdmin = () => {
    type AdminView = "users" | "handouts" | "announcement" | "analytics";
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState<AdminView>("users");
    const [clickEmail, setClickEmail] = useState(false)
    const [upload, setUpload] = useState(false)
    const [user, setUser] = useState<User[]>([])
    const [title, setTitle] = useState('')
    const [level, setLevel] = useState('')
    const [subject, setSubject] = useState('')
    const [contents, setContent] = useState('')
    const [announcement, setAnnouncement] = useState<Announcement[]>([])
    const [file, setFile] = useState<File | null>(null)
    // const [loading, setLoading] = useState(false)
    useEffect(() => {
        handleGetUsers()
        handleAnnouncement()
    }, [])
    const token = localStorage.getItem('token')
    const handleGetUsers = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/admin/users', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text);
            }

            const data = await res.json();
            setUser(data.users)
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleAnnouncement = async () => {
        try {
            const res = await fetch("http://localhost:4000/api/admin/announcement", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content: contents })
            })
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }
            setAnnouncement(data.announcement)

        }
        catch (err) {

        }
        finally {
            setLoading(false);
        }
    }
    // const uploadFile = async (e:React.ChangeEvent<HTMLInputElement>)=>{
    //     e.preventDefault()
    //     const file = e.target.files?.[0];
    //     if (!file) return;
    //     const data = new FormData()
    //     data.append('file', file)
    //     const res = await fetch('')
    // }
    const handleHandout = async () => {
        try {
            setLoading(true)

            const formData = new FormData()
            formData.append("title", title)
            formData.append("content", contents)
            formData.append("subject", subject)
            formData.append("level", level)
            if (file) {
                formData.append("file", file)
            }

            const res = await fetch("http://localhost:4000/api/admin/handout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            })

            const data = await res.json()

            if (!res.ok) {
                console.log(data.error)
                throw new Error(data.error || "Something went wrong")
            }

            console.log(data)

            setUpload(false)

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    // const data = [
    //     { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: " grand pro", details: "view details", id: 1 },
    //     { name: "sarah", email: "user@gmail.com", university: "unijos", date: " jooined . 12/feb/2026", plan: " grand pro", details: "view details", id: 2 },
    //     { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: "grand pro", details: "view details", id: 3 },
    //     { name: "sarah", email: "user@gmail.com", university: "unijos", date: " joined . 12/feb/2026", plan: "grand pro", details: "view details", id: 4 }
    // ]
    const stats = [
        { title: "Total Users", heading: 1247, icon: <LiaUserFriendsSolid size={40} className="text-blue-500" />, id: 1 },
        { title: "Active Users", heading: 892, content: "this week", icon: <BsFileText size={40} className="text-green-700" />, id: 2 },
        { title: "Total Handout", heading: 156, icon: <BiBookOpen size={40} className="text-yellow-500" />, id: 3 },
        { title: "Pro Users", heading: 120, icon: <LiaUserFriendsSolid size={40} className="text-red-600" />, id: 4 },
    ];
    const materials = [
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15} />, date: "12/43/2028", id: 1 },
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15} />, date: "12/43/2028", id: 2 },
        { topic: "Linear Algebra", subject: "Maths", level: "200 level", char: 1289, del: <Trash2 className="text-red-600" />, downloads: <Download size={15} />, date: "12/43/2028", id: 3 }
    ];
    const content = [
        { topic: "data structure note", sunject: "compute", download: "2100 downloads", id: 1 },
        { topic: "data structure note", sunject: "compute", download: "2100 downloads", id: 2 },
        { topic: "data structure note", sunject: "compute", download: "2102 downloads", id: 3 }
    ]

    const getdata = async () => {
        try {
            const res = await fetch('localhost:5000/api/admin', {
                method: 'post',
                body: JSON.stringify({
                    email: "email"
                }),
                headers: ({
                    "content-type": "application/json"
                }),

            })
            const data = await res.json();
            if (!data.ok) {
            console.log("success")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-4 via-none">
            <span className="flex gap-2 mb-3"><Shield size={30} className="text-blue-500" /><h1 className=" mt-1 font-semibold">Admin Panel</h1></span>
            <p className="text-gray-400 mb-4">manage users , content , and system settings</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((list) => (
                    <div key={list.id} className="shadow-sm shadow-gray-300 rounded-md p-3 border border-gray-100">
                        <div className="flex justify-between ">
                            <h3 className="font-light text-gray-400">{list.title}</h3>
                            <span>{list.icon}</span>
                        </div>
                        <h1 className="font-light ">{list.heading}</h1>
                        <p className="text-xs">
                        </p>
                    </div>
                ))}
                <div className=" flex gap-40  items-center  w-[73vw] h-10 rounded-2xl p-4 mr-8 mb-4 bg-gray-200 font-light">
                    <button
                        onClick={() => setActive("users")}
                        className={active === "users" ? "bg-white p-1 rounded-xl" : "p-1"}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => setActive("handouts")}
                        className={active === "handouts" ? "bg-white p-1 rounded-xl" : "p-1"}
                    >
                        Handouts
                    </button>
                    <button
                        onClick={() => setActive("announcement")}
                        className={active === "announcement" ? "bg-white p-1 rounded-xl" : "p-1"}
                    >
                        announcement
                    </button>
                    <button
                        onClick={() => setActive("analytics")}
                        className={active === "analytics" ? "bg-white p-1 rounded-xl" : "p-1"}
                    >
                        analytics
                    </button>
                </div>
            </div>
            {/* USERS */}
            {active === "users" && (
                <div className="w-[72vw]  border-gray-100 p-4  shadow-2xl rounded-2xl">
                    <h1 className="text2-l mt-1 text-black font-semibold mb-2">Recent Users </h1>
                    <p className="text-gray-400 mb-4">manage users account and supscriptions</p>
<<<<<<< HEAD
                    {data.map((list) => (
                        <div key={list.id} className="shadow-md w-[70vw]  rounded-2xl  border-sm mb-6 bg-gray-10 p-4">
                            <h2 className="  font-sans text-black ">{list.name}</h2>
                            <p className="text-gray-500 mb-2 ">{list.email}</p>
                            <div className=" flex items-center gap-120">
                                <span className=" flex items-center mb-2 text-gray-500  gap-2">{list.university} <ul>{list.date}</ul></span>
                                <span className="flex items-center  gap-5 text-xs"><a href="#" className="border rounded-2xl p-2 flex items-center text-xs gap-1 hover:bg-blue-200"> < Crown size={10} />{list.plan}</a> <a href="./Settings" className="border rounded-2xl p-1.5 hover:bg-blue-200 ">{list.details}</a></span>
=======
                    {/* {user.map((list) => (
                        <div key={list._id} className="shadow-md w-[75vw] ml-5 rounded-2xl  border-sm mb-6 bg-gray-10 p-4">
                            <h2 className="  font-bold text-black ">{list.userName}</h2>
                            <p className="text-gray-500 mb-2 ">{list.email}</p>
                            <div className=" flex items-center gap-190">
                                <span className=" flex items-center mb-2 text-gray-500  gap-2">{list.institution} <ul>{12 / 3 / 2010}</ul></span>
                                <span className="flex items-center gap-6 text-xs"><a href="#" className="border rounded-2xl p-2 flex items-center text-xs gap-1 hover:bg-blue-200"> < Crown size={10} />{list.plan}</a> <a href="./Settings" className="border rounded-2xl p-1.5 hover:bg-blue-200 ">{list.Bio}</a></span>
>>>>>>> 619b96d88f2477ec6594f1a5322a8c546c664f77

                            </div>

                        </div>
                    )) */}

                    {/* } */}
                </div>
            )}

            {/* Handouts */}
            {active === "handouts" && (
                <div className="w-[72vw]  border-gray-100 p-4  shadow-2xl rounded-2xl ">
                    <h1 className="text-xl mt-1 text-black font-semibold mb-2">Manage Handouts </h1>
                    <p className="text-gray-400 mb-4">Uploads and manage study materials</p>
                    <button onClick={() => setUpload(prev => !prev)} className=" bg-blue-500 w-50 h-10 p-2 text-white rounded-xl items-left">uploads handout</button>
                    <div>
                        {
                            materials.map((material) => (
                                <div key={material.id} className="shadow-sm mb-4 p-6 ">
                                    <h1 className="  font-semibold text-black mb-2 ">{material.subject}</h1>
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
<<<<<<< HEAD
                            <h1 className="text-xl mt-1 font-semibold">Ceate Announcement</h1>
                            <p className="text-gray-400 mb-4 ">send announcement to all users</p>
=======
                            <h1 className="text-2xl mt-1 font-bold">Create Handout</h1>
                            <p className="text-gray-400 mb-4 ">send handout to all users</p>
>>>>>>> 619b96d88f2477ec6594f1a5322a8c546c664f77

                            <label className="font-semibold">Title</label>
                            <br />
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Important Update here"
                                className=" p-6 rounded-xl w-full h-15 border-2 border-blue-500"
                            />
                        </div >


                        <div className="p-6 ">
                            <label className="font-semibold">description</label>
                            <br />
                            <textarea
                                value={contents}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="write your handout here ... "
                                className="p-6 mb-4 rounded-xl w-full h-20 border-2 border-blue-500"
                            />
                            <br></br>
                            <div className="flex gap-2">
                                <select onChange={(e) => setSubject(e.target.value)}
                                    className="w-1/2 shadow-md p-2 focus:outline-blue-500 rounded-md  text-md ">
                                    <option value="">Select subject</option>
                                    <option value="English">English</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                </select>

                                <select onChange={(e) => setLevel(e.target.value)}
                                    className="w-1/2 shadow-md p-2 focus:outline-blue-500 rounded-md text-md ">
                                    <option value="">Select your Level</option>
                                    <option value="100 level">100 level</option>
                                    <option value="200 level">200 level</option>
                                    <option value="300 level">300 level</option>
                                    <option value="400 level">400 level</option>
                                </select>

                            </div>

                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setFile(e.target.files[0])
                                    }
                                }}
                            />
                            <div className="flex gap-2 justify-end p-3">
                                <div>
                                    <button onClick={() => setUpload(false)} className="border w-15 rounded-xl h-9">
                                        cancel
                                    </button>
                                </div>
<<<<<<< HEAD
                                <div className="border bg-blue-500 text-white p-1 h-7  rounded-xl w-12">
                                    publish
                                </div>
=======
                                <button onClick={handleHandout} className="border bg-blue-500 cursor-pointer text-white p-1 h-9 rounded-xl w-16">{loading ? "Publishing" : "Publish "}</button>
>>>>>>> 619b96d88f2477ec6594f1a5322a8c546c664f77
                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>

            }
            {/* {anouncement} */}
            {active === "announcement" && (
                <div className="w-[72vw]  border-gray-100 p-4  shadow-2xl rounded-2xl ">

                    <h3 className="text-xl mt-1 text-black font-semibold mb-2">Anouncement </h3>
                    <p className="text-gray-400 mb-6">Create Anouncement for All Users</p>
                    <button className=" bg-blue-500 w-40 h-10 p-2 text-white rounded-xl items-left" onClick={() => setClickEmail(prev => !prev)}>Create Announcement</button>
                    {/* <a href="#" className="text-blue-500  hover-underline cursor-pointer ml-170" onClick={() => setClickEmail(prev => !prev)}>
                Change Email
              </a> */}


                    <div className="h-80 shadow-sm mb-6">
                        <h1 className="text-xl mt-1 text-black font-semibold mb-2 text-center">Announcement</h1>
                        <p  >Create your first anniuncement to notify all users about important update</p>

                    </div>

                </div>


            )}

            {clickEmail &&
                <div className="fixed inset-0 items-center justify-center z-60">
                    <div className="justify-center items-center w-2/5 mt-32 ml-140 bg-gray-100 rounded-xl">
                        <div className="p-3 " >
                            <h1 className="text-xl mt-1 font-bold">Ceate Announcement</h1>
                            <p className="text-gray-400 mb-4">send announcement to all users</p>

                            <label className="font-semibold p-4">Title</label>
                            <br />
                            <input placeholder="Important Update here" onChange={(e) => setTitle(e.target.value)} value={title} className=" p-6 rounded-xl w-full h-15 border-2 border-blue-500" />
                        </div >


                        <div className="p-6">
                            <label className="font-semibold">Content</label>
                            <br />
                            <textarea placeholder="write your announcement here ... " onChange={(e) => setContent(e.target.value)} className="p-6 rounded-sm w-full h-60 border-2 border-blue-500" />
                            <br></br>

                            <div className="flex gap-2 justify-end p-3">


                                <div>
                                    <button onClick={() => setClickEmail(false)} className="border w-16 rounded-xl h-8">
                                        cancel
                                    </button>
                                </div>
                                <button onClick={handleAnnouncement} disabled={loading} className="cursor-pointer border bg-blue-500 text-white p-1 h-9  rounded-xl w-16">
                                    {loading ? "Publishing" : "Publish"}
                                </button>
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
                        <h1 className=" mt-1 text-black font-semibold mb-2">User Growth </h1>
                    </div>
                    <div className="w-1/2 border-gray-100 p-4 h-100   shadow-2xl rounded-2xl">
                        <h1 className=" mt-1 text-black font-semibold mb-2">Popular Content</h1>

                        {
                            content.map((content) => (
                                <div key={content.id}>
                                    <span className=" mt-1 text-black font-semibold">{content.topic}</span>
                                    <span className="flex items-center gap-110">
                                        <span className=" text-center mb-4 text-sm">{content.sunject}</span>
                                        <span className=" text-center mb-4 border-1 p-1 text-xs flex rounded-xl " >{content.download}</span>
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