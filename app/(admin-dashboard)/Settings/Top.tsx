"use client";
import {
  BellIcon,
  SettingsIcon,
  CameraIcon,
  UploadIcon,
  User,
  SchoolIcon,
  Book,
  PrinterIcon,
  Shield,
} from "lucide-react";
import { useState } from 'react'
import Image from "next/image";

const Top = () => {
  const [clickEmail, setClickEmail] = useState(false)
  const [clickPassword, setClickPassword] = useState(false)
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="fixed top-0 z-50 w-full border-b border-gray-300 p-3 flex justify-end items-center gap-3">
        <BellIcon className="text-gray-700" />
        <Image
          height={30}
          width={30}
          src="/Capture.PNG"
          alt="profile"
          className="rounded-full"
        />
        <h1 className="text-sm sm:text-base font-medium text-gray-700">
          Amar Abdul Mumin
        </h1>
      </div>

      {/* Page Title */}
      <div className="mt-6 px-4 sm:px-8">
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-3 mb-2">
          <SettingsIcon size={30} className="text-blue-500" />
          Settings
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mb-4">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Main Sections */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-8">
        {/* Profile Picture */}
        <section className="flex-1 shadow-md shadow-gray-300 rounded-md p-6">
          <h1 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <CameraIcon size={20} />
            Profile Picture
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Upload and manage your profile photo
          </p>
          <div className="flex flex-col items-center mb-4">
            <Image
              height={100}
              width={100}
              src="/Capture.PNG"
              alt="Profile Image"
              className="mb-4"
            />
            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
              <UploadIcon size={18} />
              Upload Photo
            </button>
          </div>
        </section>

        {/* Personal Info */}
        <section className="flex-[2] shadow-md shadow-gray-300 rounded-md p-6">
          <h1 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <User size={20} />
            Personal Information
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Update your personal details and contact information
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 focus:border-blue-500 outline-none rounded-md w-full p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="border border-gray-300 focus:border-blue-500 outline-none rounded-md w-full p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Bio</label>
              <textarea
                placeholder="Tell others about yourself"
                className="border border-gray-300 focus:border-blue-500 outline-none rounded-md w-full p-2"></textarea>
            </div>

            <h2 className="text-md font-semibold flex items-center gap-2 mt-6">
              <SchoolIcon size={20} /> Academic Information
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium">
                  Course/Major
                </label>
                <input
                  type="text"
                  placeholder="Enter your course or major"
                  className="border border-gray-300 focus:border-blue-500 outline-none rounded-md w-full p-2"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium">Level</label>
                <select className="border border-gray-300 focus:border-blue-500 outline-none rounded-md w-full p-2">
                  <option value="" disabled selected>
                    Select level
                  </option>
                  <option>100</option>
                  <option>200</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                </select>
              </div>
            </div>

            <h2 className="text-md font-semibold flex items-center gap-2 mt-6">
              <Book size={20} /> Interests & Subjects
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="text"
                placeholder="Enter your interests or subjects"
                className="border border-gray-300 focus:border-blue-500 outline-none rounded-md p-2 w-full sm:w-3/4"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Add
              </button>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 font-semibold">
                <PrinterIcon size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Account Information */}
      <div className="mt-10 px-4 sm:px-8 pb-10">
        <section className="shadow-md shadow-gray-300 rounded-md p-6">
          <h1 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Shield size={20} />
            Account Information
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Manage your login and notification settings
          </p>

          <div className="space-y-2">
            <div className=" flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="font-semibold text-lg">Email Address</h2>
                <p className="text-sm text-gray-500">
                  alfaisibrahim3@gmail.com
                </p>
              </div>
              <a href="#" className="text-blue-500  hover-underline cursor-pointer ml-170" onClick={() => setClickEmail(prev => !prev)}>
                Change Email
              </a>
            </div>
            {clickEmail &&
              <div className="fixed inset-0 bg-black/58 z-60">
                <div className="h-60 mx-auto mt-32 w-79 bg-white rounded-sm"> 
                <div className="p-3 ml-1 " >
                  <label htmlFor="" className="font-semibold">old email</label>
                  <br/>
                  <input type="email" 
                  //  placeholder="old email"
                     className="w-71 h-7 rounded-sm border border-gray-300"
                     />
                </div >
                <div className="w-75 ml-2 h-30 border border-red-200 rounded-sm">

<div className="p-2"> 
 <label htmlFor="">New email</label> 
 <br />
 <input type="email" className="w-70 mb-1  border border-gray-300 rounded-sm" />
<br></br>
 <label htmlFor="">Confim email</label>
 <br></br>
 <input type="text"  className="w-70 border border-gray-300 rounded-sm" />
     <div className="flex gap-2 justify-end p-3">
        
             
               <div>
                <button onClick={() => setClickEmail(false) }>
                  cancel
                </button>
               </div>
               <div>

                Save 
               </div>
      </div>
</div>

  


                </div>
                </div>
<div>

</div>
                
              </div>

            }
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="font-semibold text-lg">Password</h2>
                <p className="text-sm text-gray-500">
                  Last updated 30 days ago
                </p>
              </div>
              <a href="#" className="text-blue-500 hover:underline" onClick={() => setClickPassword(pass => !pass)}>
                Change Password
              </a>
              {clickPassword &&
                <div>

                </div>
              }
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <BellIcon size={18} /> Notifications
                </h2>
                <p className="text-sm text-gray-500">
                  Manage your notification preferences
                </p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600">
                Configure
              </button>
            </div>
          </div>
        </section>
      </div>



    </div>
  );
};
export default Top;
