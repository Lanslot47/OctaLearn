"use client";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [interest, setInterest] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState("")
  const router = useRouter();
  const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
    const res = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        userName,
        department,
        interest,
        phone,
        school,
        course,
        level
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert("invalid email or password");
      throw new Error(data.error || "Invalid");
      console.log(data.message);
       localStorage.setItem("token" , data.token);
    }
    alert("Signup Successfully");
    router.push("../admin");
  };
  return (
    <div className="py-12 px-4 sm:px-8">
      <form className="font-sans max-w-3xl mx-auto bg-white">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/Capture.PNG"
            height={50}
            width={50}
            alt="Logo"
            className="mx-auto mb-5"
          />
        </div>

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl text-center font-semibold">
          Join OctaLearn!
        </h1>
        <p className="text-sm sm:text-base mb-5 text-gray-500 text-center">
          Create your account and start your learning journey
        </p>

        {/* Form Fields */}
        <div className="space-y-4 mb-5">
          <div>
            <label className="font-medium">Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email address"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-medium">School/Institution</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Institution Name"
                className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label className="font-medium">Department</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Department"
                className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Course/Major</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Course or Major"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-medium">Level</label>
              <br />
              <select
                className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm" onChange={(e)=>setLevel(e.target.value)}
                   value={level}
                >
                <option value="">Select your Level</option>
                <option value="100 level">100 level</option>
                <option value="200 level">200 level</option>
                <option value="300 level">300 level</option>
                <option value="400 level">400 level</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="font-medium">Interests</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Academic interests"
                className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                onChange={(e) => setInterest(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Phone (Optional)</label>
            <br />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Bio (Optional)</label>
            <br />
            <input
              type="text"
              placeholder="Brief Description About you"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Confirm Password</label>
            <br />
            <input
              type="password"
              placeholder="Re-enter your Password"
              className="w-full p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
           <button
            className="bg-blue-500 p-2  sm:w-[360px] mb-8 rounded-md text-white hover:bg-blue-400 transition"
            onClick={handleSignup}>
            Sign in
          </button>

          <p className="mb-10 text-sm sm:text-base">
            Already have an account?{" "}
            <Link href="./Login">
              <span className="text-blue-500 hover:text-gray-600 cursor-pointer">
                Sign in here
              </span>
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
