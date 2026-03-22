"use client"
import { Calendar, Download } from "lucide-react";
import { BiBookOpen, BiFilter } from "react-icons/bi";
import React, { useState, useEffect } from 'react'

const Home = () => {
    const [subject, setSubject] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [sub, setSub] = useState('')
    const [err, setErr] = useState('')

    const handleCourse = async () => {
        if (!subject) return 
        try {
            const res = await fetch('http://localhost:4000/api/courses', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ subject }) 
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Invalid")
            }
            setTitle(data.title)
            setDescription(data.description)
            setSub(data.sub)
        }
        catch (err: any) {
            console.log(err.message || "something went wrong" || err)
            setErr(err.message)
        }
    }


    useEffect(() => {
        handleCourse()
    }, [subject])

    return (
        <div className="font-sans max-w-[1400px] mx-auto mt-6 px-4 md:px-6 ">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <BiBookOpen size={26} className="text-blue-500" /> Past Questions & Handouts
            </h1>
            <p className="text-gray-500 mb-4">Access thousands of study materials from various institutions</p>

            {/* Filters */}
            <div className="w-full rounded-md border border-gray-300 p-4 mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Study Partners</h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex items-center border gap-3 flex-1 p-2 rounded-md border-gray-300 hover:border-blue-500">
                        <BiFilter size={18} />
                        <input type="text" placeholder="Search handouts and past questions..." className="border-0 w-full outline-none text-sm text-gray-500" />
                    </div>

                    <select className="p-2 border border-gray-300 rounded-md" onChange={(e) => setSubject(e.target.value)}>
                        <option value="">All Subjects</option>
                        <option value={'mathematics'}>Mathematics</option>
                        <option value={'physics'}>Physics</option>
                        <option value={'English'}>English</option>
                        <option value={'Economics'}>Economics</option>
                        <option value={'Biology'}>Biology</option>
                    </select>

                    <select className="p-2 border border-gray-300 rounded-md">
                        <option>All Levels</option>
                        <option>100 level</option>
                        <option>200 level</option>
                        <option>300 level</option>
                        <option>400 level</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border p-5 rounded-md border-gray-300 bg-white flex flex-col justify-between">
                    <div>
                        <div className="flex gap-3 mb-3">
                            <div>
                                <h2 className="font-bold text-lg">{title}</h2>
                                <p className="text-sm text-gray-500">100 level</p>
                            </div>
                            <div className="h-6 w-20 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-xs">PDF</span>
                            </div>
                        </div>
                        <div className="text-gray-500 text-xs space-y-1 mb-3">
                            <p>{description}</p>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 font-sans mb-3">
                            <div className="flex gap-5">
                                <p>{sub}</p>
                                <p>200 level</p>
                            </div>
                            <p className="flex gap-0.5 items-center">
                                <span><Download size={15} /></span>1,250
                            </p>
                        </div>
                        <p className="text-xs text-gray-400 mb-2 flex gap-1 items-center">
                            <span><Calendar size={15} /></span>Added 1/14/2024
                        </p>
                    </div>
                    <div className="mt-2">
                        <button className="w-full py-2 rounded-md text-white bg-blue-300">Subscribe to Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home