"use client"
import { Calendar, Download } from "lucide-react";
import { BiBookOpen, BiFilter } from "react-icons/bi";
import React, { useState, useEffect } from "react";

type Handout = {
    _id: string,
    title: string
    content: string,
    subject: string,
    level: string
};

const Home = () => {

    const [selectedSubject, setSelectedSubject] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("")
    const [courses, setCourses] = useState<Handout[]>([])
    // const [handout, setHandout] = useState<Handout[]>([])
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(false)


    const handleFindBySubject = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            console.log(e.target.value)
            setLoading(true)
            setErr("")
            setSelectedSubject(e.target.value)

            const res = await fetch(`http://localhost:4000/api/admin/find-handout-by-subject/${e.target.value}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({ subject: e.target.value }),
            }
            )



            if (!res.ok) {
                throw new Error("Something went wrong")
            }
            const data = await res.json()
            setCourses([data.handout])
            console.log(data)
            console.log(courses)


        } catch (error: any) {

            console.log(error)
            // console.log(data.err)
            setErr(error.message)

        } finally {
            setLoading(false)
        }
    }
    const handleFindByLevel = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            console.log(e.target.value)
            setLoading(true)
            setErr("")
            setSelectedLevel(e.target.value)

            const res = await fetch(`http://localhost:4000/api/admin/find-handout-by-level/${e.target.value}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({ subject: e.target.value }),
            }
            )



            if (!res.ok) {
                throw new Error("Something went wrong")
            }
            const data = await res.json()
            setCourses([data.handout])
            console.log(data)
            console.log(courses)


        } catch (error: any) {

            console.log(error)
            // console.log(data.err)
            setErr(error.message)

        } finally {
            setLoading(false)
        }
    }
    const handleHandout = async () => {
    try {
        setLoading(true)

        const res = await fetch('http://localhost:4000/api/admin/get-handout')

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Something went wrong");
        }

        setCourses(data)

    } catch (error: any) {
        console.log(error.message)
    } finally {
        setLoading(false)
    }
}
    useEffect(() => {
    handleHandout()
    }, [])

    return (
        <div className="font-sans max-w-[1400px] mx-auto mt-6 px-4 md:px-6 ">

            <h1 className="text-2xl font-bold flex items-center gap-2">
                <BiBookOpen size={26} className="text-blue-500" /> Past Questions & Handouts
            </h1>

            <p className="text-gray-500 mb-4">
                Access thousands of study materials from various institutions
            </p>

            {/* Filters */}

            <div className="w-full rounded-md border border-gray-300 p-4 mb-6">

                <h2 className="text-2xl font-bold mb-3">Find Study Materials</h2>

                <div className="flex flex-col md:flex-row gap-3">

                    <div className="flex items-center border gap-3 flex-1 p-2 rounded-md border-gray-300 hover:border-blue-500">
                        <BiFilter size={18} />
                        <input
                            type="text"
                            placeholder="Search handouts and past questions..."
                            className="border-0 w-full outline-none text-sm text-gray-500"
                        />
                    </div>

                    <select
                        className="p-2 border border-gray-300 rounded-md"
                        onChange={handleFindBySubject} value={selectedSubject}
                    >
                        <option value="" onClick={handleHandout}>All Subjects</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="English">English</option>
                        <option value="Economics">Economics</option>
                        <option value="Biology">Biology</option>
                    </select>

                    <select className="p-2 border border-gray-300 rounded-md" onChange={handleFindByLevel} value={selectedLevel}>
                        <option>All Levels</option>
                        <option value="100 level">100 level</option>
                        <option value="200 level">200 level</option>
                        <option value="300 level">300 level</option>
                        <option value="400 level">400 level</option>
                    </select>

                </div>

            </div>

            {/* Error */}

            {err && (
                <p className="text-red-500 mb-4">{err}</p>
            )}

            {/* Loading */}

            {loading && (
                <p className="text-gray-500">Loading courses...</p>
            )}

            {/* Courses */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {courses.map((u) => (

                    <div
                        className="border p-5 rounded-md border-gray-300 bg-white flex flex-col justify-between"
                    >

                        <div>

                            <div className="flex gap-3 mb-3">

                                <div>
                                    <h2 className="font-bold text-lg">
                                        {u.title}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        {u.level}
                                    </p>
                                </div>

                                <div className="h-6 w-20 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xs">PDF</span>
                                </div>

                            </div>

                            <div
                                className="text-gray-500 text-xs space-y-1 mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: u.content
                                }}
                            />

                            <div className="flex justify-between text-sm text-gray-500 font-sans mb-3">

                                <div className="flex gap-5">
                                    <p>{u.subject}</p>
                                    <p>{u.level}</p>
                                </div>

                                <p className="flex gap-0.5 items-center">
                                    <Download size={15} />1,250
                                </p>

                            </div>

                            <p className="text-xs text-gray-400 mb-2 flex gap-1 items-center">
                                <Calendar size={15} />Added 1/14/2024
                            </p>

                        </div>

                        <div className="mt-2">
                            <button className="w-full py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">
                                Subscribe to Download
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Home