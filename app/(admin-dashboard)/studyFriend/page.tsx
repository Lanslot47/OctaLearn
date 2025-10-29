"use client";
import { PiGoodreadsLogo } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
export default function BuddySection() {
    const [activeTab, setActiveTab] = useState("buddies");

    return (
        <div className=" mt-20 font-sans ml-8">
            <h1 className="text-2xl font-bold"><LiaUserFriendsSolid size={30} /> Study Buddy</h1>
            <p className="text-gray-500 mb-8">connect with classmates, form study groups, and learn together</p>
            <div className="flex flex-col  w-[77.8vw] h-10 bg-gray-200 rounded-md">
                <div className="flex space-x-4 mb-6 px-2 py-1.5">
                    <button
                        onClick={() => setActiveTab("buddies")}
                        className={`px-4 h-7 rounded-md font-semibold w-84 text-sm cursor-pointer ${activeTab === "buddies"
                            ? "bg-white text-black"
                            : "bg-gray-200 text-gray-500"
                            }`}
                    >
                        Find Buddies
                    </button>
                    <button
                        onClick={() => setActiveTab("request")}
                        className={`px-4 h-7 rounded-md font-semibold w-84 text-sm cursor-pointer ${activeTab === "request"
                            ? "bg-white text-black"
                            : "bg-gray-200 text-gray-500"
                            }`}
                    >
                        Request
                    </button>

                    <button
                        onClick={() => setActiveTab("message")}
                        className={`px-4 h-7 rounded-md font-semibold w-84 text-sm cursor-pointer ${activeTab === "message"
                            ? "bg-white text-black"
                            : "bg-gray-200 text-gray-500"
                            }`}
                    >
                        Messages
                    </button>


                </div>

                <div className="w-full   rounded-lg  bg-white">
                    {activeTab === "request" && (
                        <div>
                            <h2 className="text-xl font-bold mb-2">Requests</h2>
                            <p>Here you can view and manage your connection requests.</p>
                        </div>
                    )}

                    {activeTab === "message" && (
                        <div>
                            <h2 className="text-xl font-bold mb-2">Messages</h2>
                            <p>Chat with your friends or new connections here.</p>
                        </div>
                    )}

                    {activeTab === "buddies" && (
                        <section>
                            <div className="w-[77.8vw] rounded-md  border border-gray-300 p-6 mb-8">
                                <h2 className="text-2xl font-bold mb-2"> Find Study Partners</h2>
                                <div className="flex items-center gap-3 ">
                                    <div className="flex items-center border gap-3 flex-1 p-2 rounded-md border-gray-300 hover:border-blue-500">
                                        <span><BiFilter size={20} /></span>
                                        <input type="text" placeholder="Search by name, courses, school, interest" className="border-0 w-full outline-none text-sm text-gray-500" />
                                    </div>
                                    <select name="" id="" className="p-1.5 border border-gray-300 rounded-md focus:outline-blue-500">
                                        <option value=""><PiGoodreadsLogo />All Departments</option>
                                        <option value="">Computer science</option>
                                        <option value="">computer engineer</option>
                                        <option value="">english</option>
                                        <option value="">nursing</option>
                                        <option value="">epolitical science</option>
                                    </select>
                                    <select className="p-1.5 border border-gray-300 rounded-md focus:outline-blue-500" id="" name="">
                                        <option value="">All Levels</option>
                                        <option value="">100 level</option>
                                        <option value="">200 level</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 space-x- space-y-4 w-[77.8vw]">
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                                <div className="border p-6 h-70 w-85 rounded-md border-gray-300">
                                    <div className="flex gap-3 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-3xl text-center">
                                            <h1 className="mt-2 font-semibold text-blue-500">DA</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-xl">Dawood Ahmad</h2>
                                            <p className="text-sm text-gray-500">1 level</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-500 text-sm space-y-1 mb-3    ">
                                        <p>computer science</p>
                                        <p>Programming</p>
                                    </div>
                                    <p className="font-semibold text-sm">Interest: </p>
                                    <div className="mb-7 bg-blue-100 rounded-2xl w-30">
                                       <p className="text-center text-sm">Programming</p>
                                    </div>
                                    <button className="py-2 cursor-pointer px-26 rounded-md text-white bg-blue-500">Connect</button>

                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
