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
import { useState, useEffect, useRef } from 'react'
import Image from "next/image";
// import { User } from "lucide-react";


const API = "http://localhost:5000";

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

  // ---------------- FETCH USER SETTINGS ----------------
  useEffect(() => {
    const fetchSettings = async () => {
      if (!token) return;

      try {
        const res = await fetch(`${API}/api/settings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch settings");

        setForm({
          ...data,
          interests: data.interests?.join(", ") || "",
        });

        setAvatar(data.avatar);
      } catch (err: any) {
        console.error(err);
      }
    };

    fetchSettings();
  }, [token]);

  // ---------------- HANDLE INPUT CHANGE ----------------
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ---------------- SAVE SETTINGS ----------------
  const handleSave = async (): Promise<void> => {
    if (!token) return;

    const payload = {
      ...form,
      interests: form.interests.split(",").map((i) => i.trim()),
    };

    try {
      const res = await fetch(`${API}/api/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to save settings");

      alert("Settings Updated Successfully");
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  // ---------------- IMAGE UPLOAD ----------------
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!token) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch(`${API}/api/settings/avatar`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to upload avatar");

      setAvatar(data.avatar);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to upload avatar");
    }
  };

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="fixed top-0 z-50 w-full border-b p-3 flex justify-end items-center gap-3 bg-white">
        <BellIcon />
        <Image
          height={30}
          width={30}
          src={avatar ? `${API}${avatar}` : "/Capture.PNG"}
          alt="profile"
          className="rounded-full"
        />
        <h1 className="text-sm font-medium">{form.fullName}</h1>
      </div>

      {/* Page Title */}
      <div className="mt-16 px-6">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <SettingsIcon size={30} />
          Settings
        </h1>
      </div>

      {/* Main Sections */}
      <div className="flex flex-col lg:flex-row gap-6 px-6 mt-6">
        {/* Profile Picture */}
        <section className="flex-1 shadow-md rounded-md p-6">
          <h1 className="font-semibold flex items-center gap-2">
            <CameraIcon />
            Profile Picture
          </h1>

          <div className="flex flex-col items-center mt-4">
            <Image
              height={100}
              width={100}
              src={avatar ? `${API}${avatar}` : "/Capture.PNG"}
              alt="Profile"
              className="rounded-full mb-4"
            />

            <label className="flex items-center gap-2 text-blue-600 cursor-pointer">
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

        {/* Personal Info */}
        <section className="flex-[2] shadow-md rounded-md p-6">
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
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                <option>500</option>
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
                className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2"
              >
                <PrinterIcon size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Account Info */}
      <div className="mt-10 px-6">
        <section className="shadow-md rounded-md p-6">
          <h1 className="font-semibold flex items-center gap-2">
            <Shield />
            Account Information
          </h1>
        </section>
      </div>



    </div>
  );
}