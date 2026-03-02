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
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

<<<<<<< HEAD
    const [notes, setNotes] = useState<Note[]>([])
    const handleCreateNote = async () => {
        // e.preventDefault()
        setLoading(true)
        setError('')
=======
  // =========================
  // CREATE NOTE
  // =========================
  const handleCreateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
>>>>>>> 54e129e608f44ac18692aeedb1ec3e28231e9a74

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:4000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();

<<<<<<< HEAD
            // add newly created note to state
            setNotes((prev) => [data.note, ...prev])
            alert('note created')
            setClicked(false)
            console.log(notes.map(l =>(
                l.content
            )))

        } catch (err: any) {
            console.log(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
=======
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ADD NEW NOTE TO TOP (NOT MERGE)
      setNotes((prev) => [data.note, ...prev]);

      setTitle("");
      setContent("");
      setClicked(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
>>>>>>> 54e129e608f44ac18692aeedb1ec3e28231e9a74
    }
  };

<<<<<<< HEAD

    return (
=======
  // =========================
  // FETCH NOTES
  // =========================
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem("token");
>>>>>>> 54e129e608f44ac18692aeedb1ec3e28231e9a74

        const res = await fetch("http://localhost:4000/api/get-note", {
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
      } catch (err: any) {
        setError(err.message);
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
<<<<<<< HEAD
            <div className="flex mb-8">
             <button onClick={() => setClicked(prev => !prev)} className=" py-2 px-3 m  bg-blue-500 flex items-center ml-193 text-xl rounded-md text-white ">
                    < BsPlus size={30} color="white" />

                    New Note
                </button>
            </div>
            {clicked &&
                <div className="fixed inset-0 bg-black/60 z-50">
                    <div className="w-149 mx-4 my-16 p-4 h-110 rounded-xl ml-87 bg-white  shadow shadow-md-gray-500">
                        <nav>
                            <h1 className="font-semibold mb-2 ml-3">Create New Note</h1>
                            <p className="text-sm mb-2 text-gray-500 ml-3">Create a new study note. You can export it to PDF later.</p>
                        </nav>
                        <input type="text" placeholder='Enter Note Title...' onChange={(e) => setTitle(e.target.value)} className='m-auto p-2 w-132 focus:outline-blue-500 rounded-md text-gray-500 border border-gray-300 mb-4 ml-4 text-sm' />
                        <textarea
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Tell others about yourself"
                            className=" ml-4 border border-gray-300 hover:outline-blue-500 rounded-md w-135 h-62 p-2 mb-3"
                        ></textarea>
                        <span className="flex items-center">
                            <button className="bg-blue-500 w-40 mx-97 h-8  text-white rounded-md hover hover:bg-blue-500 flex">
                                <span className="flex items-center gap-2 text-sm p-2" onClick={handleCreateNote}>
                                    <PrinterIcon size={20} className="cursor-pointer" />
                                    Save Changes
                                </span>
                            </button>
                            <button className="hover hover:text-blue-500 -ml-155 cursor-pointer" onClick={() => setClicked(false)}>cancel</button>
                        </span>
                    </div>
                </div>
            }
            <div />
            <div className="p-1 ml-3">
                <div className="  border border-gray-300 w-222   h-18 rounded-md ">
                    <div className="p-4 px-3 ">

                        <div className="flex items-center border border-gray-300 rounded-md gap-3">
                            <BsSearch className="ml-2 " />
                            <input className="w-223 h-10   outline-none   " type="text  " placeholder="  Search your notes..." />

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <section className="flex p-4 gap-12 ml-1">

                    <div className="  h-25 w-64 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4"> <h1 className="text-2xl font-semibold " > 3 </h1>
                            <p className="text-gray-400">Total Notes</p>
                        </div>

                    </div>

                    <div className="  h-25 w-64 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4">
                            <h1 className="text-2xl  font-semibold"  > 0</h1>
                            <p className="text-gray-400">updated Today</p>
                        </div>
                    </div>



                    <div className=" h-25 w-70 p-2 rounded-xl border  border-gray-300">
                        <div className="p-4"> <h1 className="text-2xl font-semibold" > 1K </h1>
                            <p className="text-gray-400">Total Characters</p>
                        </div>

                    </div>
                </section>

                <section >
                    <div className="flex gap-12 p-3" >
                        <div className="border border-gray-300 h-72 w-67 rounded-md">

                            <div className="p-4 py-8  ">


                                <h1 className="font-semibold mb-3">Physics Lab Report- <br />    pendulum...</h1>




                                <p className="text-gray-400 mb-4">Objective: to determinee accleration due to gravity using a simple pendulmu.Metal bob - stopwacth-meter...</p>

                                <div className="flex items-center mb-3">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>
                                    <button className="w-19 h-5 rounded-xl  border border-blue text-sm ml-15 ">348 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans rounded-xl flex  hover:bg-blue-100  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>




                            </div>

                        </div>
                        <div className="border border-gray-300 h-72 w-67 rounded-md">
                            <div className="p-4 py-8">
                                <h1 className="font-semibold mb-3"> Data Structure- <br />    Binary Trees</h1>

                                <p className="text-gray-400 mb-4">Binary Trees Defination:A tree data structure where each node has most two childern - leftsubTree  value less than...  </p>
                                <div className="flex items-center mb-3">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>
                                    <button className="w-19 h-5 rounded-xl  border border-gray-400 text-sm ml-15 ">376 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans rounded-xl flex  hover:bg-gray-400  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-300 h-72 w-67 rounded-md">
                            <div className="p-4 py-8 ">
                                <h1 className="font-semibold mb-3"> Organic Chemistry <br />    Reaction...</h1>


                                <p className="text-gray-400 mb-4"> SN1 vs SN2 Reaction:SN1 (Subtitution Nuclephilic Unimolecular): Rate depends only on substrate - Forms...</p>
                                <div className="flex items-center mb-3 ">
                                    <h1 className="flex items-center gap-1 text-gray-500 text-sm  ">
                                        <IoCalendarOutline size={19} />
                                        10/11/2025
                                    </h1>

                                    <button className="w-19 h-5 rounded-xl  border border-gray-400 text-sm ml-15 ">391 chars</button>
                                </div>
                                <div>
                                    <div className="flex ">
                                        <button className="w-52 ml-3 h-9 font-sans hover:bg-gray-400 rounded-xl flex  items-center gap-3 text-center  border  border-gray-400 " >
                                            < BiDownload size={23} className="ml-10" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>



                    </div>
                </section>
            </div>
            <div>
            </div>
        </div>
            //   <div />
    )
}


export default Hero;
// 0813
=======
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
>>>>>>> 54e129e608f44ac18692aeedb1ec3e28231e9a74
