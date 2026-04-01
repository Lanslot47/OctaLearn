"use client";
import { SendIcon, FileArchiveIcon } from "lucide-react";
import React, { useState } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

const AskAi = () => {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("school subjects");

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");

    const userMessage: Message = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:4000/api/ask-ai", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ FIXED
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question, subject }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid request");
      }

      const aiMessage: Message = {
        sender: "ai",
        text: data.answer || "",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setQuestion("");
    } catch (err) {
      const error = err as Error; // ✅ FIXED
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 md:p-6">
      <div className="flex flex-col w-full max-w-3xl gap-4">

        <div className="flex flex-col gap-3 p-4 bg-white rounded-xl shadow-md h-[500px] overflow-y-auto">
          {messages.length === 0 && (
            <p className="text-gray-400 text-center">
              Start the conversation by asking a question.
            </p>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleAskAi} className="flex w-full items-center gap-3 bg-white shadow-md p-3 md:p-4 rounded-xl border border-gray-100">
          <FileArchiveIcon size={22} className="text-gray-500 shrink-0" />

          <input
            type="text"
            placeholder="Ask me anything about your studies..."
            className="flex-1 border border-blue-400 rounded-md px-3 py-2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
          />

          <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded-lg">
            <SendIcon size={18} />
          </button>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-gray-500 text-center">Thinking...</p>}
      </div>
    </div>
  );
};

export default AskAi;