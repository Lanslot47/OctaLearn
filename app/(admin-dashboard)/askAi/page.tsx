"use client"
import Router from "@/node_modules/next/router";
import { SendIcon, FileArchiveIcon } from "lucide-react";
import React, { useState } from "react";

const AskAi = () => {
  const [question, setQuestion] = useState('')
  const [error, setError] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [subject, setSubject] = useState('school subjects')
  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:4000/api/ask-ai', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question, subject })
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Invalid")
      }
      setResponse(data.answer || 'error fetching, check internet connection')
    }
    catch (err: any) {
      setError(err.message || "something went wrong")
    } finally {
      setLoading(false)
       
      Router.push("./")
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 md:p-6">
      <div className="flex flex-col items-center w-full max-w-3xl">
        <div>
          <p>{response}</p>
          
        </div>
        <div className="flex w-full items-center gap-3 bg-white shadow-md p-3 md:p-4 rounded-xl border border-gray-100 transition-all duration-300">
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
            onClick={handleAskAi}
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
