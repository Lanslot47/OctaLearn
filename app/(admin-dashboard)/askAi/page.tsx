import { BiSend } from "react-icons/bi";
import { FaFileArchive } from "react-icons/fa";

const AskAi = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center p-4 md:p-10">
        <div className="flex w-full max-w-2xl items-center gap-3 bg-white shadow-sm p-3 rounded-lg">
          <FaFileArchive size={24} className="text-gray-500" />
          <input
            type="text"
            placeholder="Ask me anything about your studies..."
            className="flex-1 border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
          >
            <BiSend size={18} />
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
