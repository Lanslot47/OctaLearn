"use client"
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const Home = () => {
    const router = useRouter()
    const [modal, setModal] = useState("")
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${apiUrl}/api/auth/login`, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            if (!res.ok) {
                setError(data.message)
                throw new Error(data.error || "Invalid Credentials")
            }
            setModal(`${data.message}. Redirecting....`)
            localStorage.setItem('token', data.token)
            router.push('../user')
        } catch (err) {
            const error = err as Error;
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="py-12 px-4 sm:px-6 md:px-8">
            <form className="font-sans w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-white">
                <h1 className="text-2xl sm:text-3xl text-center font-semibold">Welcome Back</h1>

                <p className="text-sm sm:text-base mb-5 text-gray-500 text-center">
                    Sign in to your OctaLearn Account
                </p>

                <div className="space-y-4 mb-5">

                    {/* ALERT */}
                        <div className='border w-full p-2 rounded-md border-gray-500 text-center text-sm'>
                        {error && <p className='text-red-400'>{error}</p>}
                        {modal && <p className='text-blue-500'>{modal}</p>}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="font-medium">Email</label><br />
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 focus:outline-blue-500 border rounded-md text-gray-500 text-sm"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="font-medium">Password</label><br />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        disabled={loading}
                        onClick={handleLogin}
                        className={`p-2 px-5 w-full sm:w-[360px] mb-8 rounded-md text-white transition ${
                            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"
                        }`}
                    >
                        {loading ? 'Signing...' : "Login"}
                    </button>

                    <p className="text-blue-500 hover:text-gray-600 cursor-pointer mb-8">
                        Forgot your password?
                    </p>

                    <p className="mb-10 text-sm sm:text-base">
                        Don’t have an account?{' '}
                        <Link href="./Signup">
                            <span className="text-blue-500 hover:text-gray-600 cursor-pointer">Sign up here</span>
                        </Link>
                    </p>

                    <Link href="../">
                        <p className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-blue-500">
                            <BiArrowBack /> Back to home
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Home;