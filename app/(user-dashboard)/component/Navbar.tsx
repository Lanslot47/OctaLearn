"use client";
import { LogOut } from "lucide-react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { io } from "socket.io-client";

const API = "http://localhost:4000";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [character, setCharacter] = useState('');
  const [name, setName] = useState('');
  const [notifications, setNotifications] = useState({ requests: 0, messages: 0 });
  const [socket, setSocket] = useState<any>(null);

  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : "";
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // ================= SOCKET.IO =================
  useEffect(() => {
    if (!userId) return;

    const s = io(API);

    s.emit("join", userId);

    // 🔥 FIXED notification handling (IMPORTANT)
    s.on("notification", (data: any) => {
      console.log("NOTIFICATION:", data);

      if (data.type === "request") {
        setNotifications(prev => ({
          ...prev,
          requests: prev.requests + 1
        }));
      }

      if (data.type === "message") {
        setNotifications(prev => ({
          ...prev,
          messages: prev.messages + 1
        }));
      }

      if (data.type === "connection") {
        alert(data.message);
      }
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [userId]);

  // ================= FETCH USER INFO =================
  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch(`${API}/api/getname`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setName(data.username);
        setCharacter(data.character);
      } catch (err) {
        console.error(err);
      }
    };
    fetchName();
  }, [token]);

  const totalNotifications = notifications.requests + notifications.messages;

  return (
    <div className="fixed md:static z-40 w-full h-20 border-b border-gray-300 px-4 py-3 flex items-center bg-white shadow-sm">
      <nav className="flex justify-between gap-6 md:justify-end w-full">

        {/* Notification Icon */}
        <div className="relative mt-2 cursor-pointer group">
          <IoNotificationsCircleSharp 
            size={34} 
            className="text-gray-600 group-hover:text-green-500 transition duration-200" 
          />

          {/* 🔥 WhatsApp-style badge */}
          {totalNotifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {totalNotifications}
            </span>
          )}
        </div>

        {/* Profile dropdown */}
        <div onClick={() => setShowDropDown(prev => !prev)} className="relative cursor-pointer">
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition">
            
            {/* Avatar */}
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500 shadow-sm">
              <h3 className="text-white font-semibold">{character}</h3>
            </div>

            {/* Name */}
            <h3 className="text-sm md:text-base font-semibold text-gray-700 truncate">
              {name}
            </h3>
          </div>

          {showDropDown && (
            <div className="absolute right-0 mt-2 border border-gray-200 font-sans p-2 w-48 space-y-2 rounded-xl bg-white shadow-lg z-50 animate-fadeIn">
              
              <h1 className="font-semibold text-gray-700 px-2">My Account</h1>

              <div className="flex flex-col gap-1">
                <Link 
                  href="./Settings" 
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 text-gray-700 transition"
                >
                  <LiaUserFriendsSolid size={20} /> Profile
                </Link>

                <Link 
                  href="./Settings" 
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 text-gray-700 transition"
                >
                  <CiSettings size={20} /> Settings
                </Link>
              </div>

              <hr className="border-gray-200" />

              <Link 
                href="/auth/Login" 
                className="flex items-center gap-2 p-2 rounded-md hover:bg-red-100 text-red-500 transition"
              >
                <LogOut size={20} /> Logout
              </Link>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;