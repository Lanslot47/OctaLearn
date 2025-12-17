"use client";
import { SendIcon, FileArchiveIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

const AskAi = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Load persisted messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Persist messages whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleChat = async () => {
    if (!question.trim()) return;

    setLoading(true);

    // append user message
    setMessages(prev => [...prev, { role: "user", text: question }]);
    const currentQuestion = question; // keep a copy for fetch
    setQuestion("");

    try {
      const res = await fetch("http://localhost:2000/api/ask-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: currentQuestion }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "AI request failed");
      }

      const data = await res.json();
      console.log("AI Response:", data);

      // append AI response
      setMessages(prev => [...prev, { role: "ai", text: data.answer }]);
    } catch (error) {
      console.log(error);
      setMessages(prev => [...prev, { role: "ai", text: "Failed to get AI response" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <div className="flex flex-col gap-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} p-4`}
=======
    <div className="min-h-screen  flex items-center justify-center p-3 ">
      <div className="flex flex-col items-center w-full max-w-3xl">
        <div className="flex w-full items-center gap-3 shadow-md p-3 md:p-4 rounded-xl border border-gray-100 transition-all duration-300">
          <FileArchiveIcon size={22} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Ask me anything about your studies..."
            className="flex-1 border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-lg transition-colors duration-300"
>>>>>>> 15a04247178bdd5ab9d670051cccb4738e898f5e
          >
            <p
              className={`px-4 py-2 rounded-lg max-w-[75%] break-words whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-red-500 text-white"
                  : "bg-blue-100 text-blue-900"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div className="min-h-screen flex items-center justify-center p-3 md:p-6">
        <div className="flex flex-col items-center w-full max-w-3xl">
          <div className="flex w-full items-center gap-3 shadow-md p-3 md:p-4 rounded-xl border border-gray-100 transition-all duration-300">
            <FileArchiveIcon size={22} className="text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Ask me anything about your studies..."
              className="flex-1 border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base placeholder:text-gray-400"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button
              type="submit"
              onClick={handleChat}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-lg transition-colors duration-300"
            >
              <SendIcon size={18} className="md:size-5" />
            </button>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mt-3 text-center max-w-md">
            Supports images, PDFs, and documents. Press Enter to send.
          </p>
        </div>
<<<<<<< HEAD
=======
        <p className="text-gray-400 text-xs md:text-sm mt-3 text-center ">
          Supports images, PDFs, and documents. Press Enter to send.
        </p>
>>>>>>> 15a04247178bdd5ab9d670051cccb4738e898f5e
      </div>
    </div>
  );
};

export default AskAi;
