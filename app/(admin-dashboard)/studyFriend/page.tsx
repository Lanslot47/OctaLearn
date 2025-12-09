"use client";
import { PiGoodreadsLogo } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";

export default function BuddySection() {
  const [activeTab, setActiveTab] = useState("buddies");

  return (
    <div className="font-sans max-w-[1400px] mx-auto mt-6 px-4 md:px-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LiaUserFriendsSolid size={30} className="text-blue-500" /> Study Buddy
      </h1>
      <p className="text-gray-500 mb-4">connect with classmates, form study groups, and learn together</p>

      <div className="w-full rounded-md p-3">
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTab("buddies")}
            className={`px-4 h-8 rounded-md font-semibold text-sm ${activeTab === "buddies" ? "bg-white text-black" : "bg-gray-200 text-gray-600"}`}
          >
            Find Buddies
          </button>
          <button
            onClick={() => setActiveTab("request")}
            className={`px-4 h-8 rounded-md font-semibold text-sm ${activeTab === "request" ? "bg-white text-black" : "bg-gray-200 text-gray-600"}`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab("message")}
            className={`px-4 h-8 rounded-md font-semibold text-sm ${activeTab === "message" ? "bg-white text-black" : "bg-gray-200 text-gray-600"}`}
          >
            Messages
          </button>
        </div>

        <div className="w-full rounded-md  p-4">
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
              <div className="w-full rounded-md border border-gray-300 p-4 mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Study Partners</h2>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex items-center border gap-3 flex-1 p-2 rounded-md border-gray-300 hover:border-blue-500">
                    <BiFilter size={18} />
                    <input type="text" placeholder="Search by name, courses, school, interest" className="border-0 w-full outline-none text-sm text-gray-500" />
                  </div>

                  <select className="p-2 border border-gray-300 rounded-md">
                    <option value="">All Departments</option>
                    <option>Computer science</option>
                    <option>Computer engineering</option>
                    <option>English</option>
                    <option>Nursing</option>
                    <option>Political science</option>
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
              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <div key={idx} className="border p-4 rounded-md border-gray-300 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-3 items-center mb-3">
                        <div className="h-10 w-10  rounded-full flex items-center justify-center">
                          <span className="font-semibold text-blue-600">DA</span>
                        </div>
                        <div>
                          <h2 className="font-bold text-lg">Dawood Ahmad</h2>
                          <p className="text-sm text-gray-500">100 level</p>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm space-y-1 mb-3">
                        <p>computer science</p>
                        <p>Programming</p>
                      </div>
                      <p className="font-semibold text-sm mb-2">Interest:</p>
                      <div className="inline-block mb-4  rounded-full px-3 py-1">
                        <p className="text-sm">Programming</p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <button className="w-full py-2 rounded-md text-white bg-blue-500">Connect</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
