import {PrinterIcon} from "lucide-react";
const NewNote = () => {
    return (
        <div className="w-149 mx-4 my-16 p-4 h-110 rounded-xl border  shadow shadow-md-gray-500">
            <nav>   
                <h1 className="font-semibold mb-2 ml-3">Create New Note</h1>
            <p className="text-sm mb-2 text-gray-500 ml-3">Create a new study note. You can export it to PDF later.</p>
            </nav>
             <input type="text" placeholder='Enter Note Title...' className='m-auto p-2 w-132 focus:outline-blue-500 rounded-md text-gray-500 mb-4 ml-4 text-sm' />
           <textarea
                placeholder="Tell others about yourself"
                className=" ml-4 border border-gray-300 hover:outline-blue-500 rounded-md rounded-md w-135 h-62 p-2 mb-3"
              ></textarea>
             <span className="flex items-center">
                 <button className="bg-blue-500 w-40 mx-97 h-8  text-white rounded-md hover hover:bg-blue-500 flex">
                <span className="flex items-center gap-2 text-sm p-2">
                    <PrinterIcon size={20} />
                Save Changes
                </span>
              </button>
              <button className="hover hover:text-blue-500 -ml-155">cancel</button>
             </span>
        </div>
    );
}
 
export default NewNote;