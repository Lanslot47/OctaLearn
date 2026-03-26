"use client";
import {
  BellIcon,
  SettingsIcon,
  CameraIcon,
  UploadIcon,
  User,
  SchoolIcon,
  Book,
  PrinterIcon,
  Shield,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const API = "http://localhost:4000";

type SettingsForm = {
  fullName: string;
  phone: string;
  bio: string;
  course: string;
  level: string;
  interests: string;
};

export default function SettingsPage() {
  const [form, setForm] = useState<SettingsForm>({
    fullName: "",
    phone: "",
    bio: "",
    course: "",
    level: "",
    interests: "",
  });

  const [avatar, setAvatar] = useState<string>("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // ================= FETCH SETTINGS =================
  useEffect(() => {
    const fetchSettings = async () => {
      if (!token) return;

      try {
        const res = await fetch(`${API}/api/get-settings`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }

        const data = await res.json();

        setForm({
          fullName: data.userName || "",
          phone: data.phone || "",
          bio: data.Bio || "",
          course: data.course || "",
          level: data.level || "",
          interests: data.interest || "",
        });

        setAvatar(data.avatar || "");
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchSettings();
  }, [token]);

  // ================= HANDLE INPUT =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= SAVE SETTINGS =================
  const handleSave = async () => {
    if (!token) return;

    try {
      const res = await fetch(`${API}/api/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          interests: form.interests
            .split(",")
            .map((i) => i.trim())
            .filter((i) => i !== ""),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update");
      }

      alert("Settings Updated Successfully");
    } catch (err: any) {
      alert(err.message);
    }
  };

  // ================= UPLOAD AVATAR =================
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!token) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch(`${API}/api/avatar`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setAvatar(data.avatar);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="font-sans">
      {/* TOP BAR */}
      <div className="fixed top-0 z-50 w-full border-b p-3 flex justify-end items-center gap-3 bg-white">
        <BellIcon />

        <Image
          height={34}
          width={34}
          unoptimized
          src={avatar ? `${API}${avatar}` : "/Capture.PNG"}
          alt="profile"
          className="rounded-full object-cover border shadow"
        />

        <h1 className="text-sm font-medium">{form.fullName}</h1>
      </div>

      <div className="mt-16 px-6">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <SettingsIcon size={30} />
          Settings
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-6 mt-6">
        {/* PROFILE PICTURE */}
        <section className="flex-1 shadow-md rounded-xl p-6 bg-white">
          <h1 className="font-semibold flex items-center gap-2">
            <CameraIcon />
            Profile Picture
          </h1>

          <div className="flex flex-col items-center mt-6">
            <Image
              height={120}
              width={120}
              unoptimized
              src={avatar ? `${API}${avatar}` : "/Capture.PNG"}
              alt="Profile"
              className="rounded-full object-cover border-4 border-gray-200 shadow-lg hover:scale-105 transition mb-4"
            />

            <label className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
              <UploadIcon size={18} />
              Upload Photo
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </section>

        {/* PERSONAL INFO */}
        <section className="flex-[2] shadow-md rounded-xl p-6 bg-white">
          <h1 className="font-semibold flex items-center gap-2">
            <User />
            Personal Information
          </h1>

          <div className="space-y-4 mt-4">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="border w-full p-2 rounded"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border w-full p-2 rounded"
            />

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="border w-full p-2 rounded"
            />

            <h2 className="font-semibold flex items-center gap-2">
              <SchoolIcon /> Academic Info
            </h2>

            <div className="flex gap-4">
              <input
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="Course"
                className="border w-full p-2 rounded"
              />

              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="border w-full p-2 rounded"
              >
                <option value="">Select level</option>
                <option value="100 level">100</option>
                <option value="200 level">200</option>
                <option value="300 level">300</option>
                <option value="400 level">400</option>
              </select>
            </div>

            <h2 className="font-semibold flex items-center gap-2">
              <Book /> Interests
            </h2>

            <input
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="Web dev, AI, Backend..."
              className="border w-full p-2 rounded"
            />

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <PrinterIcon size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ACCOUNT INFO */}
      <div className="mt-10 px-6 pb-10">
        <section className="shadow-md rounded-xl p-6 bg-white">
          <h1 className="font-semibold flex items-center gap-2">
            <Shield />
            Account Information
          </h1>

          <p>Name: {form.fullName}</p>
          <p>Bio: {form.bio}</p>
          <p>Interest: {form.interests}</p>
          <p>Phone: {form.phone}</p>
        </section>
      </div>
    </div>
  );
}
