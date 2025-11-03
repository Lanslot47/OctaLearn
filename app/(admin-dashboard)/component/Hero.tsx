import { IoNotificationsCircle } from "react-icons/io5";
import { BiMessage, BiBrain, BiBookOpen } from "react-icons/bi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsFileText } from "react-icons/bs";

const Hero = () => {
  const first = [
    { title: "Ai Conversation", heading: 5, num: "+0", content: "this month", icon: <BiMessage size={20} className="text-blue-500" />, id: 1 },
    { title: "Total Notes", heading: 0, num: "+0", content: "this week", icon: <BsFileText size={20} className="text-green-700" />, id: 2 },
    { title: "Downloads", heading: 0, num: "10 remaining", content: "this month", icon: <BiBookOpen size={20} className="text-yellow-500" />, id: 3 },
    { title: "Study Connections", heading: 4, num: "+0", content: "this week", icon: <LiaUserFriendsSolid size={20} className="text-red-600" />, id: 4 },
  ];

  const sec = [
    { icon: <BiBrain size={25} className="text-blue-500 mb-2" />, title: "Ask AI" },
    { icon: <BsFileText size={25} className="text-green-500 mb-2" />, title: "New Note" },
    { icon: <BiBookOpen size={25} className="text-yellow-500 mb-2" />, title: "Past Questions" },
    { icon: <LiaUserFriendsSolid size={25} className="text-red-500 mb-2" />, title: "Study Buddy" },
  ];

  return (
    <div className="font-sans px-4 md:px-6 mt-24 md:mt-28">
      <section className="mb-12">
        <h1 className="font-bold text-2xl mb-3">Dashboard</h1>
        <p className="text-gray-500 mb-10">Welcome back! Here's what's happening with your studies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {first.map((list) => (
            <div key={list.id} className="shadow-sm shadow-gray-300 bg-white rounded-md p-4">
              <div className="flex justify-between mb-4">
                <h2 className="font-semibold">{list.title}</h2>
                <span>{list.icon}</span>
              </div>
              <h1 className="font-bold text-2xl">{list.heading}</h1>
              <p className="text-sm">
                <span className="text-green-500">{list.num}</span> {list.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 rounded-md shadow shadow-gray-300 bg-white px-6 py-8">
          <h1 className="text-2xl font-semibold mb-2">Quick Actions</h1>
          <p className="text-gray-400 mb-8">Jump into your most used features</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {sec.map((lists, i) => (
              <div key={i} className="shadow-sm shadow-gray-200 p-4 rounded-md text-center">
                <span>{lists.icon}</span>
                <p className="font-bold text-sm">{lists.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-md shadow shadow-gray-300 bg-white px-6 py-8">
          <h1 className="flex items-center gap-2 text-2xl font-semibold mb-2">
            <IoNotificationsCircle size={30} /> Announcements
          </h1>
          <p className="text-gray-400 mb-8">Latest updates and news</p>

          {[1, 2, 3].map((a) => (
            <div key={a} className="flex gap-4 mb-6">
              <div className="w-2 bg-blue-100 rounded"></div>
              <div>
                <nav className="flex justify-between mb-2">
                  <h1 className="font-bold">New AI Feature</h1>
                  <button className="border border-gray-300 rounded-xl px-2 text-gray-500 text-xs font-medium">8/29/2025</button>
                </nav>
                <p className="text-sm text-gray-500">Explore our new AI and study buddy features to collaborate better.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-gray-300 bg-white rounded-md px-6 py-6">
        <h1 className="font-bold text-2xl mb-2">Recent Activity</h1>
        <p className="text-gray-500 text-sm mb-8">Your latest actions on OctaLearn</p>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="h-8 w-8 rounded-full border flex items-center justify-center">
                <BiMessage size={20} />
              </div>
              <div>
                <p className="font-medium">Asked, hssksksksk</p>
                <p className="text-sm text-gray-500">10/15/2025, 4:17:07</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
