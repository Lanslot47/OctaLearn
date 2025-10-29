import { SendIcon, FileArchiveIcon } from "lucide-react";
import Sidebar from "../(admin-dashboard)/Component/Sidebar";
import Tops from "./Tops";

const AskAi = () => {
  return (
    <div>
      <nav className="mb-63">
        <Sidebar />
        <Tops />
      </nav>
      <div className="">
        <span className="flex gap-4 ml-70 mb-0.25 items-center shadow ">
          <FileArchiveIcon size={30} />
          <input
            type="text"
            id="Name"
            placeholder="Ask me anything about your studies..."
            className=" border border-blue-500 focus:outline-none focus:border-blue-500 border hover:border-blue-500  rounded-lg focus:border-blue-500 rounded-md p-2 mb-2 w-200"
          />
          <button type="submit" className="bg-blue-400 hover rounded-lg w-10 h-10 ">
            <SendIcon
              size={20}
              className="text-white-400 ml-2 text-md font-bold justify-center  "
            />
          </button>
        </span>
        <p className="ml-80 text-gray-400 text-sm ">supports Images,PDF's and Document, press Enter to send</p>
      </div>
    </div>
  );
};

export default AskAi;
