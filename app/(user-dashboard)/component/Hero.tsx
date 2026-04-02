"use client";

import { useEffect, useState } from "react";
import { IoNotificationsCircle } from "react-icons/io5";
import { BiMessage, BiBrain, BiBookOpen } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsFileText } from "react-icons/bs";


type Announcement = { _id: string; title: string; content: string; createdAt: string };
interface Activity { _id: string; message: string; createdAt: string; }
type Dashboard = {
  aiConversations: number;
  totalNotes: number;
  totalDownloads: number;
  totalConnections: number;
  announcements?: Announcement[];
  activities?: Activity[];
};

export default function Hero() {
   const apiUrl= process.env.NEXT_PUBLIC_API_URL
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [announcement, setAnnouncement] = useState<Announcement[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchDashboard = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/dashboard`, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to fetch dashboard");
        setDashboard(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    const fetchAnnouncements = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/admin/get-announcement`);
        if (!res.ok) throw new Error("Failed to fetch announcements");
        setAnnouncement(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    Promise.all([fetchDashboard(), fetchAnnouncements()]).finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20 text-gray-500 text-lg">Loading dashboard...</p>;

  const stats = [
    { title: "Ai Conversation", heading: dashboard?.aiConversations || 0, num: "+0", content: "this month", icon: <BiMessage size={20} className="text-blue-500" /> },
    { title: "Total Notes", heading: dashboard?.totalNotes || 0, num: "+0", content: "this week", icon: <BsFileText size={20} className="text-green-700" /> },
    { title: "Downloads", heading: dashboard?.totalDownloads || 0, num: "remaining", content: "this month", icon: <BiBookOpen size={20} className="text-yellow-500" /> },
    { title: "Study Connections", heading: dashboard?.totalConnections || 0, num: "+0", content: "this week", icon: <LiaUserFriendsSolid size={20} className="text-red-600" /> },
  ];

  const quickActions = [
    { icon: <BiBrain size={25} className="text-blue-500 mb-2" />, title: "Ask AI" },
    { icon: <BsFileText size={25} className="text-green-500 mb-2" />, title: "New Note" },
    { icon: <BiBookOpen size={25} className="text-yellow-500 mb-2" />, title: "Past Questions" },
    { icon: <LiaUserFriendsSolid size={25} className="text-red-500 mb-2" />, title: "Study Buddy" },
  ];

  return (
    <div className="font-sans px-4 md:px-6 mt-24 md:mt-6">
      <section className="mb-12">
        <h1 className="font-bold text-2xl mb-3">Dashboard</h1>
        <p className="text-gray-500 mb-10">Welcome back! Here is what is happening with your studies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="shadow-sm shadow-gray-300 rounded-md p-3">
              <div className="flex justify-between mb-4">
                <h2 className="font-semibold">{s.title}</h2>
                <span>{s.icon}</span>
              </div>
              <h1 className="font-bold text-2xl">{s.heading}</h1>
              <p className="text-sm"><span className="text-green-500">{s.num}</span> {s.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions & Announcements */}
      <section className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 rounded-md shadow shadow-gray-300 px-6 py-8">
          <h1 className="text-2xl font-semibold mb-2">Quick Actions</h1>
          <p className="text-gray-400 mb-8">Jump into your most used features</p>
          <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((a, i) => (
              <div key={i} className="shadow-sm shadow-gray-200 p-4 rounded-md text-center">
                <span>{a.icon}</span>
                <p className="font-bold text-sm mt-2">{a.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-md shadow shadow-gray-300 px-6 py-8">
          <h1 className="flex items-center gap-2 text-2xl font-semibold mb-2">
            <IoNotificationsCircle size={30} /> Announcements
          </h1>
          <p className="text-gray-400 mb-8">Latest updates and news</p>
          {announcement.length === 0 && <p className="text-gray-500">No announcements available</p>}
          {announcement.map((item) => (
            <div key={item._id} className="flex gap-4 mb-6">
              <div className="w-2 bg-blue-100 rounded"></div>
              <div>
                <nav className="flex justify-between mb-2">
                  <h1 className="font-bold">{item.title}</h1>
                  <button className="border border-gray-300 rounded-xl px-2 text-gray-500 text-xs font-medium">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </button>
                </nav>
                <p className="text-sm text-gray-500">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="border border-gray-300 rounded-md px-6 py-6">
        <h1 className="font-bold text-2xl mb-2">Recent Activity</h1>
        <p className="text-gray-500 text-sm mb-8">Your latest actions on OctaLearn</p>
        <div className="space-y-4">
          {dashboard?.activities?.length === 0 && <p className="text-gray-500 text-center text-lg">No Recent Activity</p>}
          {dashboard?.activities?.map((activity) => (
            <div key={activity._id} className="flex gap-4 mb-4">
              <div className="w-2 bg-blue-200 rounded"></div>
              <div>
                <p className="font-medium">{activity.message}</p>
                <p className="text-sm text-gray-400">{new Date(activity.createdAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}