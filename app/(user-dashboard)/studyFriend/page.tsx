"use client";

import { io, Socket } from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { LiaUserFriendsSolid } from "react-icons/lia";

const apiUrl= process.env.NEXT_PUBLIC_API_URL
const url = "https://octalearnapi-9qjm.onrender.com"
interface User {
  _id: string;
  userName: string;
  department?: string;
  level?: string;
}

interface Message {
  _id: string;
  sender: string;
  recipient: string;
  content: string;
  createdAt?: string;
}

interface Request {
  _id: string;
  requester: {
    userName: string;
    _id?: string;
  };
}

export default function BuddySection() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [activeTab, setActiveTab] = useState("buddies");
  const [buddies, setBuddies] = useState<User[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [chats, setChats] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [text, setText] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const activeChatRef = useRef<string | null>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : "";

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Socket setup
  useEffect(() => {
    if (!userId) return;

    const s = io(url.replace("/api", ""), { transports: ["websocket"] });

    s.emit("join", userId);

    s.on("newMessage", (message: Message) => {
      // Append only if relevant
      if (
        message.sender === activeChatRef.current ||
        message.recipient === activeChatRef.current
      ) {
        setMessages((prev) => {
          if (prev.find((m) => m._id === message._id)) return prev;
          return [...prev, message].sort(
            (a, b) =>
              new Date(a.createdAt || 0).getTime() -
              new Date(b.createdAt || 0).getTime()
          );
        });
      }

      // Update chat preview locally
      setChats((prevChats) =>
        prevChats.map((c) =>
          c._id === message.sender || c._id === message.recipient
            ? { ...c }
            : c
        )
      );
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [userId]);

  // Fetch data once
  useEffect(() => {
    fetchBuddies();
    fetchRequests();
    fetchChats();
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchBuddies = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/getAllUser`, { headers });
      const data = await res.json();
      setBuddies(Array.isArray(data.users) ? data.users : []);
    } catch {
      setBuddies([]);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await fetch(`${apiUrl}/requests`, { headers });
      const data = await res.json();
      setRequests(Array.isArray(data) ? data : []);
    } catch {
      setRequests([]);
    }
  };

  const fetchChats = async () => {
    try {
      const res = await fetch(`${apiUrl}/chats`, { headers });
      const data = await res.json();
      setChats(Array.isArray(data) ? data : []);
    } catch {
      setChats([]);
    }
  };

  const connectUser = async (id: string) => {
    await fetch(`${apiUrl}/connect`, {
      method: "POST",
      headers,
      body: JSON.stringify({ userId: id }),
    });
    alert("Request sent");
  };

  const respondRequest = async (requestId: string, action: string) => {
    await fetch(`${apiUrl}/respond`, {
      method: "POST",
      headers,
      body: JSON.stringify({ requestId, action }),
    });
    await fetchRequests();
    await fetchChats();
    setActiveTab("message");
  };

  const loadMessages = async (user: User) => {
    setActiveChat(user._id);
    activeChatRef.current = user._id;
    setActiveUser(user);

    try {
      const res = await fetch(`${apiUrl}/get-message/${user._id}`, { headers });
      const data = await res.json();
      const sortedMessages = (data.messages || []).sort(
        (a: Message, b: Message) =>
          new Date(a.createdAt || 0).getTime() -
          new Date(b.createdAt || 0).getTime()
      );
      setMessages(sortedMessages);
    } catch {
      setMessages([]);
    }
  };

  const sendMessage = async () => {
    if (!text.trim() || !activeChat) return;

    try {
      const res = await fetch(`${apiUrl}/send-message`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          recipientId: activeChat,
          content: text,
        }),
      });
      const data = await res.json();

      if (data?.message) {
        setMessages((prev) => {
          if (prev.find((m) => m._id === data.message._id)) return prev;
          return [...prev, data.message].sort(
            (a, b) =>
              new Date(a.createdAt || 0).getTime() -
              new Date(b.createdAt || 0).getTime()
          );
        });
      }

      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto mt-6 px-4">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LiaUserFriendsSolid size={30} className="text-blue-500" />
        Study Buddy
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
              <div key={r._id} className="flex justify-between border-b py-3">
                <p>{r.requester?.userName}</p>
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
            <div className="grid grid-cols-3 gap-4 h-[500px]">
              <div className="border rounded-2xl p-3 space-y-2 bg-white shadow-sm overflow-y-auto">
                {chats.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center mt-4">
                    No connections yet
                  </p>
                ) : (
                  chats.map((u) => (
                    <div
                      key={u._id}
                      onClick={() => loadMessages(u)}
                      className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-xl transition"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold shadow">
                        {u.userName?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{u.userName}</p>
                        <p className="text-xs text-gray-400">{u.department}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="col-span-2 flex flex-col rounded-2xl overflow-hidden shadow-md bg-[#efeae2]">
                {!activeChat ? (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    Select a user to start chatting 💬
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                          {activeUser?.userName?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            {activeUser?.userName}
                          </p>
                          <p className="text-xs text-green-500">Online</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {messages.map((m) => {
                        const isMe = m.sender === userId;
                        return (
                          <div
                            key={m._id}
                            className={`flex ${
                              isMe ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`px-4 py-2 max-w-[70%] text-sm shadow-md ${
                                isMe
                                  ? "bg-blue-500 text-white rounded-2xl rounded-br-none"
                                  : "bg-white text-gray-800 rounded-2xl rounded-bl-none border"
                              }`}
                            >
                              <p>{m.content}</p>
                              {m.createdAt && (
                                <span className="block text-[10px] mt-1 opacity-70 text-right">
                                  {new Date(m.createdAt).toLocaleTimeString(
                                    [],
                                    { hour: "2-digit", minute: "2-digit" }
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef}></div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 bg-white border-t">
                      <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        className="flex-1 px-4 py-2 text-sm border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Type a message..."
                      />
                      <button
                        onClick={sendMessage}
                        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white text-sm rounded-full shadow"
                      >
                        Send
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "buddies" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {buddies.map((u) => (
                <div key={u._id} className="border p-4 rounded-md bg-white">
                  <h2 className="font-bold">{u.userName}</h2>
                  <p className="text-sm text-gray-500">{u.department}</p>
                  <p className="text-sm text-gray-400">{u.level}</p>
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