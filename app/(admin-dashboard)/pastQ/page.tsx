import { Calendar } from "lucide-react";
import { Download } from "lucide-react";
import { BiBookOpen } from "react-icons/bi"
import { BiFilter } from "react-icons/bi";
const Home = () => {
    return (
        <div className="font-sans max-w-[1400px] mx-auto mt-6 px-4 md:px-6 ">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <BiBookOpen size={26} className="text-blue-500" /> Past Questions & Handouts
            </h1>
            <p className="text-gray-500 mb-4">Access thousands of study materials from various institutions</p>
           <div className="border border-red-400 bg-red-50 h-19  cursor-pointer  rounded-md   mb-14">
            <div className="p-3 ">
                
                <h1 className="font-b">Subscription Required</h1>
                <p className="text-gray-400">Subscribe to download past questions and study materials</p>
             
                <button  className="h-11  w-30  rounded-xl text-white bg-blue-500 ml-170">View Plans

                    
                </button>
            </div>

           </div>
            <div className="w-full rounded-md border border-gray-300 p-4 mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Study Partners</h2>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex items-center border gap-3 flex-1 p-2 rounded-md border-gray-300 hover:border-blue-500">
                        <BiFilter size={18} />
                        <input type="text" placeholder="Search handouts and past questions..." className="border-0 w-full outline-none text-sm text-gray-500" />
                    </div>

                    <select className="p-2 border border-gray-300 rounded-md">
                        <option value="">All Subjects</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>English</option>
                        <option>Economics</option>
                        <option>Biology</option>
                    </select>

                    <select className="p-2 border border-gray-300 rounded-md">
                        <option>All Levels</option>
                        <option>100 level</option>
                        <option>200 level</option>
                        <option>300 level</option>
                        <option>400 level</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <div key={idx} className="border p-5 rounded-md border-gray-300 bg-white flex flex-col justify-between">
                        <div>
                            <div className="flex gap-3 mb-3">
                                <div>
                                    <h2 className="font-bold text-lg">Linear Algebra Past Questions 2020-2023</h2>
                                    <p className="text-sm text-gray-500">100 level</p>
                                </div>
                                <div className="h-6 w-20 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-xs">PDF</span>
                                </div>
                            </div>
                            <div className="text-gray-500 text-xs space-y-1 mb-3">
                                <p>Comprehensive collection of linear algebra past questions with</p>

                            </div>
                            <div className="flex justify-between text-sm text-gray-500 font-sans mb-3">
                                <div className="flex gap-5">
                                    <p>Mathematices</p>
                                    <p>200 level</p>
                                </div>
                                <p className="flex gap-0.5 items-center"> <span><Download size={15} /></span>
                                    1,250                                </p>
                            </div>
                            <p className=" text-xs text-gray-400 mb-2 flex gap-1 items-center"><span><Calendar size={15} /></span>Added 1/14/2024</p>
                        </div>

                        <div className="mt-2">
                            <button className="w-full py-2 rounded-md text-white bg-blue-300   ">Subscribe to Download</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home