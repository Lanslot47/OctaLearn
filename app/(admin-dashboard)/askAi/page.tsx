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

  // Load persisted messages
  useEffect(() => {
    const saved = localStorage.getItem("chatMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Persist messages
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleChat = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    const currentQuestion = question;
    setQuestion("");

    try {
      const res = await fetch("http://localhost:5000/api/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion }),
      });

      if (!res.ok) throw new Error("AI request failed");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Failed to get AI response" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-3 md:p-6">
      {/* Messages */}
      <div className="w-full max-w-3xl flex flex-col gap-3 mb-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
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

      {/* Input */}
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-3 shadow-md p-3 md:p-4 rounded-xl border border-gray-100">
          <FileArchiveIcon size={22} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Ask me anything about your studies..."
            className="flex-1 border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="button"
            onClick={handleChat}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-lg"
          >
            <SendIcon size={18} />
          </button>
        </div>

        <p className="text-gray-400 text-xs md:text-sm mt-3 text-center">
          Supports images, PDFs, and documents. Press Enter to send.
        </p>
      </div>
    </div>
  );
};

export default AskAi;
