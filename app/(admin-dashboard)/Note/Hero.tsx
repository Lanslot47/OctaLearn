"use client"
import { PrinterIcon } from "lucide-react";
import { FiFileText } from "react-icons/fi"
// import { IoPulseSharp } from "react-icons/io5"
// import { PiPulse } from "react-icons/pi"
// import { BiPulse } from "react-icons/bi"
// import { FiDelete } from "react-icons/fi"
import { IoCalendarNumber, IoCalendarOutline } from "react-icons/io5"
import { BsPlus, } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { useState } from "react"
import { BiDownload } from "react-icons/bi"

// import { LuDelete } from "react-icons/lu"
const Hero = () => {
    const [clicked, setClicked] = useState(false)
    return (

        <div >
            <div className="p-4   ">

                <h1 className="text-2xl font-semibold flex items-center  gap-2 mb-2 ">
                    <FiFileText size={30} className="text-blue-500" />
                    MyNotes</h1>
                <p className=" text-gray-400">Create, organize, and sync your notes </p>


            </div>
            <div className="flex mb-8">
                <button onClick={() => setClicked(prev => !prev)} className=" py-2 px-3 m  bg-blue-500 flex items-center ml-193 text-xl rounded-md text-white ">
                    < BsPlus size={30} color="white" />

                    New Note
                </button>
            </div>
            {clicked &&
                <div className="fixed inset-0 bg-black/60 z-50">
                    <div className="w-149 mx-4 my-16 p-4 h-110 rounded-xl ml-87 bg-white  shadow shadow-md-gray-500">
                        <nav>
                            <h1 className="font-semibold mb-2 ml-3">Create New Note</h1>
                            <p className="text-sm mb-2 text-gray-500 ml-3">Create a new study note. You can export it to PDF later.</p>
                        </nav>
                        <input type="text" placeholder='Enter Note Title...' className='m-auto p-2 w-132 focus:outline-blue-500 rounded-md text-gray-500 border border-gray-300 mb-4 ml-4 text-sm' />
                        <textarea
                            placeholder="Tell others about yourself"
                            className=" ml-4 border border-gray-300 hover:outline-blue-500 rounded-md w-135 h-62 p-2 mb-3"
                        ></textarea>
                        <span className="flex items-center">
                            <button className="bg-blue-500 w-40 mx-97 h-8  text-white rounded-md hover hover:bg-blue-500 flex">
                                <span className="flex items-center gap-2 text-sm p-2">
                                    <PrinterIcon size={20} className="cursor-pointer" />
                                    Save Changes
                                </span>
                            </button>
                            <button className="hover hover:text-blue-500 -ml-155 cursor-pointer" onClick={()=>setClicked(false)}>cancel</button>
                        </span>
                    </div>
                </div>
            }
            <div />
            <div className="p-1 ml-3">
                <div className="  border border-gray-300 w-222   h-18 rounded-md ">
                    <div className="p-4 px-3 ">

                        <div className="flex items-center border border-gray-300 rounded-md gap-3">
                            <BsSearch className="ml-2 " />
                            <input className="w-223 h-10   outline-none   " type="text  " placeholder="  Search your notes..." />

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <section className="flex p-4 gap-12 ml-1">

                    <div className="  h-25 w-64 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4"> <h1 className="text-2xl font-semibold " > 3 </h1>
                            <p className="text-gray-400">Total Notes</p>
                        </div>

                    </div>

                    <div className="  h-25 w-64 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4">
                            <h1 className="text-2xl  font-semibold"  > 0</h1>
                            <p className="text-gray-400">updated Today</p>
                        </div>
                    </div>



                    <div className=" h-25 w-70 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4"> <h1 className="text-2xl font-semibold" > 1K </h1>
                            <p className="text-gray-400">Total Characters</p>
                        </div>

                    </div>
                </section>

                {/* <dddd></dddd> */}

                <section >
                    <div className="flex gap-12 p-3" >
                        <div className="border border-gray-300 h-72 w-67 rounded-md">

                            <div className="p-4 py-8  ">


                                <h1 className="font-semibold mb-3">Physics Lab Report- <br />    pendulum...</h1>




                                <p className="text-gray-400 mb-4">Objective: to determinee accleration due to gravity using a simple pendulmu.Metal bob - stopwacth-meter...</p>

                                <div className="flex items-center mb-3">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>
                                    <button className="w-19 h-5 rounded-xl  border border-blue text-sm ml-15 ">348 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans rounded-xl flex  hover:bg-blue-100  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>




                            </div>

                        </div>
                        <div className="border border-gray-300 h-72 w-67 rounded-md">
                            <div className="p-4 py-8">
                                <h1 className="font-semibold mb-3"> Data Structure- <br />    Binary Trees</h1>

                                <p className="text-gray-400 mb-4">Binary Trees Defination:A tree data structure where each node has most two childern - leftsubTree  value less than...  </p>
                                <div className="flex items-center mb-3">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>
                                    <button className="w-19 h-5 rounded-xl  border border-gray-400 text-sm ml-15 ">376 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans rounded-xl flex  hover:bg-gray-400  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-300 h-72 w-67 rounded-md">
                            <div className="p-4 py-8 ">
                                <h1 className="font-semibold mb-3"> Organic Chemistry <br />    Reaction...</h1>


                                <p className="text-gray-400 mb-4"> SN1 vs SN2 Reaction:SN1 (Subtitution Nuclephilic Unimolecular): Rate depends only on substrate - Forms...</p>
                                <div className="flex items-center mb-3 ">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>

                                    <button className="w-19 h-5 rounded-xl  border border-gray-400 text-sm ml-15 ">391 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans hover:bg-gray-400 rounded-xl flex  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>



                    </div>
                </section>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Hero
// 0813