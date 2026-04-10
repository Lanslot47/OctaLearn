"use client";
import { SendIcon, FileArchiveIcon } from "lucide-react";
import React, { useState } from "react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

const AskAi = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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

      const res = await fetch(`${apiUrl}/api/ask-ai`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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
      const error = err as Error;
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-2 sm:px-4 md:px-6 py-4 transition-colors">
      <div className="flex flex-col w-full max-w-3xl gap-4">

        <div className="flex flex-col gap-3 p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md h-[400px] sm:h-[500px] overflow-y-auto border border-gray-100 dark:border-gray-800">
          {messages.length === 0 && (
            <p className="text-gray-400 dark:text-gray-500 text-center text-sm sm:text-base">
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
                className={`max-w-[85%] sm:max-w-[70%] p-2 sm:p-3 text-sm sm:text-base rounded-lg break-words shadow-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleAskAi}
          className="flex w-full items-center gap-2 sm:gap-3 bg-white dark:bg-gray-900 shadow-md p-2 sm:p-3 md:p-4 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors"
        >
          <FileArchiveIcon size={20} className="text-gray-500 dark:text-gray-400 shrink-0" />

          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 border border-blue-400 dark:border-blue-600 bg-transparent text-gray-900 dark:text-gray-100 rounded-md px-2 sm:px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white p-2 rounded-lg transition"
          >
            <SendIcon size={18} />
          </button>
        </form>

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        {loading && <p className="text-gray-500 dark:text-gray-400 text-center text-sm">Thinking...</p>}
      </div>
    </div>
  );
};

export default AskAi;