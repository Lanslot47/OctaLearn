"use client"
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const Home = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [confirm_passowrd, setConfirm_password] = useState('')
    const [password, setPassword] = useState('')
    const [institution, setInstitution] = useState('')
    const [bio, setBio] = useState('')
    const [phone, setphone] = useState('')
    const [level, setLevel] = useState('')
    const [department, setDepartment] = useState('')
    const [error, setError] = useState('')
    const [course, setCourse] = useState('')
    const [name, setName] = useState('')
    const [interest, setInterest] = useState('')
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email, password, interest, level,
                    userName: name, institution, bio, phone,
                    department, course,
                    confirmPassword: confirm_passowrd
                })
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.message)
                throw new Error(data.error || "Email or userName has already been used")
            }

            setModal(`${data.message}. Redirecting....`)
            setError(data.message || "Account Created Successfully")
            router.push('../auth/Login')

        } catch (err) {
            const error = err as Error;
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="py-12 px-4 sm:px-6 md:px-8">
            <form className="font-sans w-full max-w-3xl mx-auto bg-white" onSubmit={handleSignup}>

                <div className="flex justify-center">
                    <img src="/Capture.PNG" height={50} width={50} alt="Logo" className="mb-5" />
                </div>

                <div className='space-y-4 mb-5'>
                    <h1 className="text-2xl sm:text-3xl text-center font-semibold">Join OctaLearn</h1>

                    <p className="text-sm sm:text-base text-gray-500 text-center">
                        Create your account and start your learning journey
                    </p>

                    {/* ALERT */}
                    <div className='border w-full p-2 rounded-md border-gray-500 text-center text-sm'>
                        {error && <p className='text-red-400'>{error}</p>}
                        {modal && <p className='text-blue-500'>{modal}</p>}
                    </div>

                    {/* INPUTS */}
                    <div className="space-y-4">

                        <div>
                            <label className="font-medium">Full Name</label><br />
                            <input type="text" onChange={(e) => setName(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                        </div>

                        <div>
                            <label className="font-medium">Email</label><br />
                            <input type="email" onChange={(e) => setEmail(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder="Institution"
                                onChange={(e) => setInstitution(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />

                            <input type="text" placeholder="Department"
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                        </div>

                        <input type="text" placeholder="Course"
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />

                        <div className="flex flex-col md:flex-row gap-4">
                            <select onChange={(e) => setLevel(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500">
                                <option value="">Level</option>
                                <option>100</option>
                                <option>200</option>
                                <option>300</option>
                                <option>400</option>
                            </select>

                            <input type="text" placeholder="Interest"
                                onChange={(e) => setInterest(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="number" placeholder="Phone"
                                onChange={(e) => setphone(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />

                            <input type="text" placeholder="Bio"
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                        </div>

                        <input type="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />

                        <input type="password" placeholder="Confirm Password"
                            onChange={(e) => setConfirm_password(e.target.value)}
                            className="w-full border p-2 rounded-md text-sm focus:outline-blue-500" />
                    </div>

                    <div className="text-center">
                        <button disabled={loading}
                            className={`p-2 w-full sm:w-[360px] mb-8 rounded-md text-white ${
                                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-400"
                            }`}>
                            {loading ? "Creating..." : "Create Account"}
                        </button>

                        <p className="mb-10 text-sm sm:text-base">
                            Already have an account?{" "}
                            <Link href="./Login">
                                <span className="text-blue-500 hover:text-gray-600 cursor-pointer">Sign in</span>
                            </Link>
                        </p>

                        <Link href="../">
                            <p className="flex justify-center items-center gap-2 hover:text-blue-500">
                                <BiArrowBack /> Back to home
                            </p>
                        </Link>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Home;