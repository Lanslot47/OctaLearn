import { SendIcon, FileArchiveIcon } from "lucide-react";

const AskAi = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-3 md:p-6">
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
          >
            <SendIcon size={18} className="md:size-5" />
          </button>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mt-3 text-center max-w-md">
          Supports images, PDFs, and documents. Press Enter to send.
        </p>
      </div>
    </div>
  );
};

export default AskAi;
