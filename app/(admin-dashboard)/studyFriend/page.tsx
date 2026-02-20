"use client";

import { useEffect, useState } from "react";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiFilter } from "react-icons/bi";

const API = "http://localhost:4000/api"; 

export default function BuddySection() {
  const [activeTab, setActiveTab] = useState("buddies");
  const [buddies, setBuddies] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [chats, setChats] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeChat, setActiveChat] = useState<any>(null);
  const [text, setText] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  useEffect(() => {
    fetchBuddies();
    fetchRequests();
    fetchChats();
  }, []);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const fetchBuddies = async () => {
    const res = await fetch(`${API}/users`, { headers });
    const data = await res.json();
    setBuddies(data);
  };

  const fetchRequests = async () => {
    const res = await fetch(`${API}/connections/requests`, { headers });
    const data = await res.json();
    setRequests(data);
  };

  const fetchChats = async () => {
    const res = await fetch(`${API}/connections/chats`, { headers });
    const data = await res.json();
    setChats(data);
  };


  const connectUser = async (userId: string) => {
    await fetch(`${API}/connections/connect`, {
      method: "POST",
      headers,
      body: JSON.stringify({ userId }),
    });
    alert("Request sent");
  };

  const respondRequest = async (requestId: string, action: string) => {
    await fetch(`${API}/connections/respond`, {
      method: "POST",
      headers,
      body: JSON.stringify({ requestId, action }),
    });
    fetchRequests();
    fetchChats();
  };

  const loadMessages = async (userId: string) => {
    setActiveChat(userId);
    const res = await fetch(`${API}/messages/get-message/${userId}`, {
      headers,
    });
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    await fetch(`${API}/messages/send-message`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        recipientId: activeChat,
        text,
      }),
    });

    setText("");
    loadMessages(activeChat);
  };



  return (
    <div className="max-w-[1400px] mx-auto mt-6 px-4">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LiaUserFriendsSolid size={30} className="text-blue-500" /> Study Buddy
      </h1>

      <div className="bg-gray-100 p-3 rounded-md mt-4">
        <div className="flex gap-2 mb-4">
          {["buddies", "request", "message"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 h-8 rounded-md font-semibold text-sm ${
                activeTab === tab ? "bg-white" : "bg-gray-200"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-md">


          {activeTab === "request" &&
            requests.map((r) => (
              <div
                key={r._id}
                className="flex justify-between border-b py-3"
              >
                <p>{r.requester.name}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => respondRequest(r._id, "accepted")}
                    className="bg-green-500 px-3 py-1 text-white rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => respondRequest(r._id, "rejected")}
                    className="bg-red-500 px-3 py-1 text-white rounded"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "message" && (
            <div className="grid grid-cols-3 gap-4">

              <div className="border rounded-md p-3 space-y-2">
                {chats.map((u) => (
                  <div
                    key={u._id}
                    onClick={() => loadMessages(u._id)}
                    className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                  >
                    {u.name}
                  </div>
                ))}
              </div>


              <div className="col-span-2 border rounded-md flex flex-col">
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  {messages.map((m) => (
                    <div
                      key={m._id}
                      className={`p-2 max-w-xs rounded ${
                        m.sender === activeChat
                          ? "bg-gray-200"
                          : "bg-blue-500 text-white ml-auto"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>

                <div className="flex border-t">
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 p-2 outline-none"
                    placeholder="Type message..."
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-blue-500 px-4 text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "buddies" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {buddies.map((u) => (
                <div
                  key={u._id}
                  className="border p-4 rounded-md bg-white"
                >
                  <h2 className="font-bold">{u.name}</h2>
                  <p className="text-sm text-gray-500">{u.department}</p>

                  <button
                    onClick={() => connectUser(u._id)}
                    className="mt-3 w-full py-2 bg-blue-500 text-white rounded-md"
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
