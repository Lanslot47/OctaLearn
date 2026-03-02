"use client"
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
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
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     email:email, password:password, interest,level, userName:name, institution, bio, phone, department, course, confirmPassword:confirm_passowrd
                     })
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data.error || "Invalid")
            }
            alert("Account created successfully")
            setError(data.message || "Account Created Successfully")
            router.push('../auth/Login')
        }
        catch (err: any) {
            setError(err.message || "something went wrong")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="py-12 px-4 sm:px-8">
            <form className="font-sans max-w-3xl mx-auto bg-white" onSubmit={handleSignup}>
                <div className="flex justify-center">
                    <Image src="/Capture.PNG" height={50} width={50} alt="Logo" className="mx-auto mb-5" />
                </div>
                <div className='space-y-4 justify-center ml-[100px] mb-5'>
                    <h1 className="text-2xl sm:text-3xl text-center font-semibold">Join OctaLearn</h1>
                    <p className="text-sm sm:text-base mb-5 text-gray-500 text-center">
                        Create your account and start your learning journey
                    </p>
                    <div className="space-y-4 mb-5">

                        <div>

                            <label className="font-medium">Full Name</label><br />
                            <input
                                type="text"
                                placeholder="Enter Your Full Name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                            />
                        </div>

                        <div>
                            <label className="font-medium">Email</label><br />
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email address"
                                className="w-full p-2 focus:outline-blue-500 border border-gray-300 rounded-md text-gray-500 text-sm"
                            />
                        </div>

                        <div className="md:flex-row gap-4">
                            <div className="flex gap-2  ">
                                <div className="flex-1">
                                    <label className="font-medium">School/Institution</label><br />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Institution Name"
                                        onChange={(e) => setInstitution(e.target.value)}
                                        className="w-full p-2 focus:outline-blue-500 border border-gray-300 rounded-md text-gray-500 text-sm"
                                    />
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="" className='font-medium'>Department</label><br />
                                    <input type="text" placeholder='Enter Your Department'
                                        onChange={(e) => setDepartment(e.target.value)} className='border border-gray-300 m-auto p-2 w-full  focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium">Course/Major</label><br />
                                <input
                                    type="text"
                                    placeholder="Enter Your Course or Major"
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full border border-gray-300 p-2  focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                                />
                            </div>

                            <div className="md:flex-row gap-4">
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label className="font-medium">Level</label><br />
                                        <select onChange={(e) => setLevel(e.target.value)} className="w-full p-2 focus:outline-blue-500 border border-gray-300 rounded-md text-gray-500 text-sm">
                                            <option value="">Select your Level</option>
                                            <option value="100 level">100 level</option>
                                            <option value="200 level">200 level</option>
                                            <option value="300 level">300 level</option>
                                            <option value="400 level">400 level</option>
                                        </select>
                                    </div>

                                    <div className="flex-1">
                                        <label htmlFor="" className='font-medium '>Interests</label><br />
                                        <input type="text" onChange={(e) => setInterest(e.target.value)} placeholder='Enter Your Academic interests' className='border border-gray-300 m-auto p-2 w-full focus:outline-blue-500 rounded-md text-gray-500 text-sm' />


                                    </div>
                                </div>
                                <div className="md:flex-row gap-4">
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <label className="font-medium">Phone (Optional)</label><br />
                                            <input
                                                type="number"
                                                onChange={(e) => setphone(e.target.value)}
                                                placeholder="Enter Your Phone Number"
                                                className="border border-gray-300 w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="font-medium">Bio (Optional)</label><br />
                                            <input
                                                type="text"
                                                onChange={(e) => setBio(e.target.value)}
                                                placeholder="Brief Description About you"
                                                className="border border-gray-300 w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-medium">Password</label><br />
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Your Password"
                                        className="border border-gray-300 w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                                    />
                                </div>

                                <div className='mb-5'>
                                    <label className="font-medium">Confirm Password</label><br />
                                    <input
                                        type="password"
                                        onChange={(e) => setConfirm_password(e.target.value)}
                                        placeholder="Re-enter your Password"
                                        className="border border-gray-300 w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                                    />
                                </div>
                            </div>
                            <div className="text-center">

                                <button disabled={loading} onClick={handleSignup} className={`p-2 w-full sm:w-[360px] mb-8 rounded-md text-white cursor-pointer transition ${loading ?"bg-blue-300 cursor-not-allowed" :"bg-blue-500  hover:bg-blue-400"}`}>
                                    {loading ?"Creating Account..":"Create Account"}
                                </button>

                                <p className="mb-10 text-sm sm:text-base">
                                    Already have an account?{" "}
                                    <Link href="./Login">
                                        <span className="text-blue-500 hover:text-gray-600 cursor-pointer">Sign in here</span>
                                    </Link>
                                </p>

                                <Link href="../">
                                    <p className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-blue-500">
                                        <BiArrowBack /> Back to home
                                    </p>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>
            </form>
        </div>
  );
};

export default Home;
