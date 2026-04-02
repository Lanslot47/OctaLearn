"use client";
import { PrinterIcon } from "lucide-react";
import { FiFileText } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt?: string;
};

const Hero = () => {
  const apiUrl= process.env.NEXT_PUBLIC_API_URL
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  // =========================
  // CREATE NOTE
  // =========================
  const handleCreateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${apiUrl}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ADD NEW NOTE TO TOP (NOT MERGE)
      setNotes((prev) => [data.note, ...prev]);

      setTitle("");
      setContent("");
      setClicked(false);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // FETCH NOTES
  // =========================
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${apiUrl}/api/get-note`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        setNotes(data.notes);
      } catch (err) {
  const error = err as Error;
  setError(error.message);
}
    };

    fetchNotes();
  }, []);

  // =========================
  // STATS
  // =========================
  const totalCharacters = notes.reduce(
    (acc, note) => acc + note.content.length,
    0
  );

  return (
    <div>
      {/* HEADER */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2 mb-2">
          <FiFileText size={30} className="text-blue-500" />
          MyNotes
        </h1>
        <p className="text-gray-400">
          Create, organize, and sync your notes
        </p>
      </div>

      {/* NEW NOTE BUTTON */}
      <div className="flex mb-8">
        <button
          onClick={() => setClicked(true)}
          className="py-2 px-4 bg-blue-500 flex items-center gap-2 text-lg rounded-md text-white ml-4"
        >
          <BsPlus size={24} />
          New Note
        </button>
      </div>

      {/* MODAL */}
      {clicked && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="w-[500px] bg-white p-6 rounded-xl shadow-lg">
            <h2 className="font-semibold mb-2">Create New Note</h2>

            <input
              type="text"
              placeholder="Enter Note Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />

            <textarea
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-md mb-4 h-32"
            />

            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <div className="flex justify-between items-center">
              <button
                onClick={() => setClicked(false)}
                className="text-gray-500 hover:text-blue-500"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateNote}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <PrinterIcon size={18} />
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH */}
      <div className="p-4">
        <div className="flex items-center border rounded-md px-3">
          <BsSearch />
          <input
            className="w-full p-2 outline-none"
            type="text"
            placeholder="Search your notes..."
          />
        </div>
      </div>

      {/* STATS */}
      <section className="flex gap-6 p-4 flex-wrap">
        <div className="border rounded-md p-4 w-60">
          <h1 className="text-2xl font-semibold">{notes.length}</h1>
          <p className="text-gray-400">Total Notes</p>
        </div>

        <div className="border rounded-md p-4 w-60">
          <h1 className="text-2xl font-semibold">
            {totalCharacters}
          </h1>
          <p className="text-gray-400">Total Characters</p>
        </div>
      </section>

      {/* NOTES LIST */}
      <section className="flex gap-6 p-4 flex-wrap">
        {notes.map((note) => (
          <div
            key={note._id}
            className="border border-gray-300 h-72 w-72 rounded-md p-4"
          >
            <h2 className="font-semibold mb-2">{note.title}</h2>

            <p className="text-gray-500 mb-4 line-clamp-3">
              {note.content}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <IoCalendarOutline size={16} />
                {note.createdAt
                  ? new Date(note.createdAt).toLocaleDateString()
                  : new Date().toLocaleDateString()}
              </span>

              <span>{note.content.length} chars</span>
            </div>

            <button className="w-full h-9 rounded-md flex items-center justify-center gap-2 border hover:bg-gray-100">
              <BiDownload size={18} />
              Download
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hero;
