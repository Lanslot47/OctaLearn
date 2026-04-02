"use client";
import { Shield, Crown } from "lucide-react";
import React, { useEffect, useState } from "react";

type User = {
  _id: string;
  userName: string;
  email: string;
  department: string;
  interest: string;
  institution: string;
  course: string;
  Bio: string;
  phone: string;
  level: string;
  plan: string;
};

type Announcement = {
  title: string;
  content: string;
};

type StatsType = {
  totalUsers: number;
  activeUsers: number;
  totalHandouts: number;
  proUsers: number;
};

type Handout = {
  _id: string,
  title: string
  content: string,
  subject: string,
  level: string
};

const OctAdmin = () => {
  const apiUrl= process.env.NEXT_PUBLIC_API_URL
  type AdminView = "users" | "handouts" | "announcement" | "analytics";

  const [active, setActive] = useState<AdminView>("users");
  const [user, setUser] = useState<User[]>([]);
  const [Stats, setStats] = useState<StatsType | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [contents, setContent] = useState("");
  const [level, setLevel] = useState("");
  const [announcement, setAnnouncement] = useState<Announcement[]>([]);
  const [handout, setHandout] = useState<Handout[]>([]);
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleGetUsers = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${apiUrl}/api/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ FIXED
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Fetch users failed [${res.status}]: ${data.message || JSON.stringify(data)}`);
      }

      setUser(data);
    } catch (err) {
      const error = err as Error; // ✅ FIXED
      console.error("handleGetUsers →", error.message);
    }
  };

  const handleStat = async () => {
    const token = localStorage.getItem('token')
    try {
      const res = await fetch(`${apiUrl}/api/admin/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // ✅ FIXED
        }
      });

      const data = await res.json();
      setStats(data);
      console.log(Stats)
    } catch (err) {
      console.error(err);
    }
  };
  const getAnnouncement = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/admin/get-announcement`);
      const data = await res.json();
      setAnnouncement(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAnnouncement = async () => {
    const token = localStorage.getItem('token')
    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/api/admin/announcement`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ FIXED
        },
        body: JSON.stringify({ title, content: contents }),
      });

      if (!res.ok) throw new Error("Failed");

      setTitle("");
      setContent("");
      getAnnouncement();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleHandout = async () => {
    const token = localStorage.getItem('token')
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", title);
      formData.append("content", contents);
      formData.append("subject", subject);
      formData.append("level", level);

      if (file) formData.append("file", file);

      const res = await fetch(`${apiUrl}/api/admin/handout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}` // ✅ FIXED
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(`Upload failed [${res.status}]: ${data.message || JSON.stringify(data)}`);
      }

      setUpload(false);
      setTitle("");
      setContent("");
      setFile(null);
      alert("Handout Created Successfully");

    } catch (err) {
      const error = err as Error; // ✅ FIXED
      console.error("handleHandout →", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUsers();
    getAnnouncement();
    handleStat();
    handleHandoutFetch()
  }, []);

  const handleHandoutFetch = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${apiUrl}/api/admin/get-handout`)
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setHandout(data)
    } catch (error) {
      const err = error as Error; // ✅ FIXED
      console.log(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="text-blue-500" />
        <h1 className="font-semibold text-lg">Admin Panel</h1>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Users", value: Stats?.totalUsers },
          { title: "Active", value: Stats?.activeUsers },
          { title: "Handouts", value: Stats?.totalHandouts },
          { title: "Pro", value: Stats?.proUsers },
        ].map((item, i) => (
          <div key={i} className="p-4 border rounded-xl shadow-sm">
            <p className="text-gray-400">{item.title}</p>
            <h2 className="text-xl font-semibold">{item.value || 0}</h2>
          </div>
        ))}
      </div>

      {/* NAV */}
      <div className="flex flex-wrap gap-2 mt-6 bg-gray-200 p-2 rounded-xl">
        {["users", "handouts", "announcement", "analytics"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab as AdminView)}
            className={`px-3 py-1 rounded-lg ${active === tab ? "bg-white" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* USERS */}
      {active === "users" && (
        <div className="mt-4 space-y-3">
          {user.map((u) => (
            <div key={u._id} className="p-4 border rounded-xl">
              <h3 className="font-bold">{u.userName}</h3>
              <p className="text-sm text-gray-500">{u.email}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm gap-2">
                <span>{u.institution}</span>
                <span className="flex gap-2 items-center">
                  <Crown size={14} /> {u.plan}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ANNOUNCEMENT */}
      {active === "announcement" && (
        <div className="mt-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            value={contents}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={handleAnnouncement}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? "Publishing..." : "Publish"}
          </button>

          <div className="mt-4 space-y-2">
            {announcement.map((a, i) => (
              <div key={i} className="border p-3 rounded">
                <h4 className="font-semibold">{a.title}</h4>
                <p className="text-sm">{a.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HANDOUT */}
      {active === "handouts" && (
        <div className="mt-4">
          <button
            onClick={() => setUpload(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload Handout
          </button>
          <div className="mt-4 space-y-2">
            {handout.map((a, i) => (
              <div key={i} className="border p-3 rounded">
                <h4 className="font-semibold">{a.title}</h4>
                <p className="text-sm">{a.content}</p>
              </div>
            ))}
          </div>
        </div>

      )}
      {upload && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full p-2 border rounded mb-2"
            />
            <textarea
              value={contents}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="w-full p-2 border rounded mb-2"
            />
            <select name="" id="" onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border rounded mb-2">
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
              <option value="Computer">Chemistry</option>
            </select>
            <select name="" id="" onChange={(e) => setLevel(e.target.value)} className="w-full p-2 border rounded mb-2">
              <option value="">Select Class</option>
              <option value="100 level">level 100</option>
              <option value="200 level">level 200</option>
              <option value="300 level">level 300</option>
              <option value="400 level">level 400</option>
            </select>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => setUpload(false)}>Cancel</button>
              <button
                onClick={handleHandout}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default OctAdmin;
