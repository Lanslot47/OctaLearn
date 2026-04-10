"use client";

import { Calendar, Download } from "lucide-react";
import { BiBookOpen, BiFilter } from "react-icons/bi";
import React, { useState, useEffect } from "react";

type Handout = {
  _id: string;
  title: string;
  content: string;
  subject: string;
  level: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const PastQ = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [courses, setCourses] = useState<Handout[]>([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (id: string, title: string) => {
    try {
      setDownloadingId(id);
      const res = await fetch(`${apiUrl}/api/admin/download/${id}`);
      if (!res.ok) throw new Error("Download failed. File may not exist.");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      setErr((error as Error).message);
    } finally {
      setDownloadingId(null);
    }
  };

  const fetchHandouts = async (endpoint: string) => {
    try {
      setLoading(true);
      setErr("");

      const res = await fetch(`${apiUrl}${endpoint}`);
      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      if (Array.isArray(data.handouts)) setCourses(data.handouts);
      else if (data.handout) setCourses([data.handout]);
      else setCourses([]);
    } catch (error) {
      setErr((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleFindBySubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
    if (!e.target.value) fetchHandouts("/api/admin/get-handout");
    else fetchHandouts(`/api/admin/find-handout-by-subject/${e.target.value}`);
  };

  const handleFindByLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value);
    if (!e.target.value) fetchHandouts("/api/admin/get-handout");
    else fetchHandouts(`/api/admin/find-handout-by-level/${e.target.value}`);
  };

  useEffect(() => {
    fetchHandouts("/api/admin/get-handout");
  }, []);

  return (
    <div className="font-sans max-w-[1400px] mx-auto mt-6 px-4 md:px-6 bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 transition-colors">

      {/* HEADER */}
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
        <BiBookOpen size={26} className="text-blue-500" />
        Past Questions & Handouts
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Access thousands of study materials from various institutions
      </p>

      {/* FILTERS */}
      <div className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 mb-6 transition-colors">

        <h2 className="text-xl md:text-2xl font-bold mb-3">
          Find Study Materials
        </h2>

        <div className="flex flex-col md:flex-row gap-3">

          <div className="flex items-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 gap-3 flex-1 p-2 rounded-md hover:border-blue-500 transition">
            <BiFilter size={18} className="text-gray-500 dark:text-gray-400" />

            <input
              type="text"
              placeholder="Search handouts and past questions..."
              className="border-0 w-full outline-none text-sm md:text-base text-gray-600 dark:text-gray-300 bg-transparent"
            />
          </div>

          <select
            className="p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md text-sm md:text-base text-gray-700 dark:text-gray-300"
            onChange={handleFindBySubject}
            value={selectedSubject}
          >
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="English">English</option>
            <option value="Economics">Economics</option>
            <option value="Biology">Biology</option>
          </select>

          <select
            className="p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md text-sm md:text-base text-gray-700 dark:text-gray-300"
            onChange={handleFindByLevel}
            value={selectedLevel}
          >
            <option value="">All Levels</option>
            <option value="100 level">100 level</option>
            <option value="200 level">200 level</option>
            <option value="300 level">300 level</option>
            <option value="400 level">400 level</option>
          </select>

        </div>
      </div>

      {/* STATUS */}
      {err && <p className="text-red-500 mb-4">{err}</p>}
      {loading && <p className="text-gray-500 dark:text-gray-400 mb-4">Loading courses...</p>}

      {!loading && courses.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          No study materials found. Try adjusting your filters.
        </p>
      )}

      {/* COURSES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((u) => (
          <div
            key={u._id}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-md p-5 flex flex-col justify-between hover:shadow-md dark:hover:shadow-black/30 transition"
          >

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-3">

                <div>
                  <h2 className="font-bold text-lg">{u.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {u.level}
                  </p>
                </div>

                <div className="h-6 w-20 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">PDF</span>
                </div>

              </div>

              <div
                className="text-gray-500 dark:text-gray-400 text-xs space-y-1 mb-3"
                dangerouslySetInnerHTML={{ __html: u.content }}
              />

              <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 dark:text-gray-400 mb-3 gap-2">

                <div className="flex gap-5">
                  <p>{u.subject}</p>
                  <p>{u.level}</p>
                </div>

                <p className="flex gap-0.5 items-center">
                  <Download size={15} /> 1,250
                </p>

              </div>

              <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 flex gap-1 items-center">
                <Calendar size={15} /> Added 1/14/2024
              </p>
            </div>

            <div className="mt-2">
              <button
                onClick={() => handleDownload(u._id, u.title)}
                disabled={downloadingId === u._id}
                className="w-full py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {downloadingId === u._id ? "Downloading..." : "Download Handout"}
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PastQ;