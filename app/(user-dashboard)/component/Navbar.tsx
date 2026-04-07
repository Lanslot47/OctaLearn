"use client";
import { LogOut } from "lucide-react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { io } from "socket.io-client";

const Navbar = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [showDropDown, setShowDropDown] = useState(false);
  const [character, setCharacter] = useState("");
  const [name, setName] = useState("");
  const [notifications, setNotifications] = useState({ requests: 0, messages: 0 });

  // ✅ use simple string (NO null issues)
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  // ✅ SAFE localStorage access
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedToken = localStorage.getItem("token");

    if (storedUserId) setUserId(storedUserId);
    if (storedToken) setToken(storedToken);
  }, []);

  // ✅ SOCKET CONNECTION
  useEffect(() => {
    if (!userId) return;

    const socket = io(apiUrl || "");

    socket.emit("join", userId);

    socket.on("notification", (data: { type: string }) => {
      if (data.type === "request") {
        setNotifications((prev) => ({
          ...prev,
          requests: prev.requests + 1,
        }));
      }

      if (data.type === "message") {
        setNotifications((prev) => ({
          ...prev,
          messages: prev.messages + 1,
        }));
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, apiUrl]);

  // ✅ FETCH USER DATA
  useEffect(() => {
    if (!token) return;

    const fetchName = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/getname`, {
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
  }, [token, apiUrl]);

  const totalNotifications = notifications.requests + notifications.messages;

  return (
    <div className="fixed md:static z-40 w-full h-16 sm:h-20 border-b px-3 sm:px-4 flex items-center bg-white shadow-sm">
      <nav className="flex justify-between md:justify-end items-center gap-3 sm:gap-6 w-full">

        {/* 🔔 Notifications */}
        <div className="relative cursor-pointer">
          <IoNotificationsCircleSharp size={30} className="text-gray-600" />
          {totalNotifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
              {totalNotifications}
            </span>
          )}
        </div>

        {/* 👤 Profile */}
        <div
          onClick={() => setShowDropDown((prev) => !prev)}
          className="relative cursor-pointer"
        >
          <div className="flex items-center gap-2 sm:gap-3 p-2 hover:bg-gray-100 rounded-lg">

            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-500">
              <h3 className="text-white font-semibold">{character}</h3>
            </div>

            <h3 className="text-xs sm:text-sm md:text-base font-semibold truncate max-w-[100px] sm:max-w-none">
              {name}
            </h3>
          </div>

          {showDropDown && (
            <div className="absolute right-0 mt-2 w-44 sm:w-48 p-2 rounded-xl bg-white shadow-lg z-50">

              <Link
                href="./Settings"
                className="flex items-center gap-2 p-2 hover:bg-blue-100"
              >
                <LiaUserFriendsSolid size={20} /> Profile
              </Link>

              <Link
                href="./Settings"
                className="flex items-center gap-2 p-2 hover:bg-blue-100"
              >
                <CiSettings size={20} /> Settings
              </Link>

              <Link
                href="/auth/Login"
                className="flex items-center gap-2 p-2 hover:bg-red-100 text-red-500"
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