import Sidebar from "../component/Sidebar";
import { Crown, Zap } from "lucide-react";

const Subscription = () => {
  return (
    <div>
      <nav>
        <Sidebar />
      </nav>
      <nav className="flex items-center justify-center mb-6 ">
        <span className="flex items-center text-sm">
          <Crown size={15} className=" " /> premium Access
        </span>
      </nav>
      <section className="">
        <h1 className=" flex items-center justify-center text-blue-500 font-bold text-5xl mb-4">
          Choose Your Plan
        </h1>
        <p className="flex items-center justify-center text-md text-gray-500 mb-8 text-semibold">
          Your Trail has Ended. Subscribe to continue accessing preemium content
        </p>
      </section>
      <div className="grid grid-cols-1 p-3  gap-2 mx-3 space-y-9 lg:grid lg:grid-cols-3 justify-center">
      <nav className="hover:border border-blue-500 rounded-lg p-3 pl-20 lg:pl-10">
          <div className="ml-25 hover hover:shadow shadow-md-blue-500">
          <Crown size={35} className="text-blue-500 font-bold font-xl mb-5 " />
          <h1 className="text-2xl -mx-6 text-bold mb-4 ">Monthly</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">#2,000</h1>
            <sub className="text-gray-500 text-md mx-15"> /month</sub>{" "}
          </p>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-23 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
           <button className="hover:text-white cursor-pointer rounded-lg w-full -mx-18 mt-6 h-10 text-gray-600 font-bold hover hover:bg-blue-500 text-white-500 ">Subscribe</button>
        </div>
      </nav>
      <nav className="border h-138 lg:h-126 -mt-6 border-blue-500 items-center rounded-lg p-4 w-[410px] lg:w-76 pl-20 lg:pl-9 ">
          <div className="mx-28">
          <nav className=" flex items center">
            {/* <p className="">most popular</p> */}
            <Zap size={35} className="text-white w-13 h-13 rounded-full bg-blue-500 font-bold p-2 -mx-4 mb-5 " />
          </nav>
          <h1 className="text-2xl -mx-12 text-bold mb-4 ">Semester</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">#10,000</h1>
            <sub className="text-gray-500 text-md mx-15"> /month</sub>{" "}
          </p>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs mb-18">
              Get Unlimited Access To Past Questions
            </span>
            <button className="bg-blue-600 rounded-lg w-full mt-6 h-10 text-white font-bold hover -ml-9 lg:ml-0 hover:bg-blue-400">Subscribe</button>
          </nav>
        </div>
      </nav>
       <nav className="hover hover:border h-138 lg:h-120 border-blue-500 rounded-lg pl-50 lg:pl-10   p-3">
         <div className="mx-28  rounded">
          <Crown size={35} className="text-blue-500 font-bold font-xl mb-5 " />
          <h1 className="text-2xl -mx-6 text-bold mb-4 ">Annual</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">#20,000</h1>
            <sub className="text-gray-500 text-md mx-15"> /month</sub>{" "}
          </p>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <nav className="-mx-30 p-1.5 gap-4">
            <i className="w-22 h-6 bg-blue-200 text-blue-600 rounded-full text-xs">
              &#10003;
            </i>{" "}
            <span className="text-xs">
              Get Unlimited Access To Past Questions
            </span>
          </nav>
          <button className=" rounded-lg w-26 cursor-pointer hover:text-white -mx-12 mt-6 h-10 text-gray-600 font-bold hover hover:bg-blue-500 text-white-500">Subscribe</button>
        </div>
       </nav>
       <nav className="  shadow-md-gray-500 lg:w-[920px]  sm:w-[400px] shadow-lg shadow-gray-300 ">
       <div className="p-4">
         <h1 className="font-bolde text-2xl mb-4">Why Subscribe ?</h1>
        <p className="text-gray-500 text-sm mb-5">
          Get unlimited Access to Quality study Material and resources
        </p>
      <nav className="lg:flex gap-4 sm:grid grid-cols-1 ">
          <div>
          <h1 className="flex items-center juistiify center gap-2 mb-4"> <i className="text-blue-300 text-md font-semibold">&#10003;</i> <span className="text-md font-semibold">Comprehensive resources</span></h1>
          <p className="mb-6 text-gray-500 text-sm">Access to thousands of past questions, note and handout from Top Nigerian universities </p>
        </div>
        <div>
          <h1 className="flex items-center juistiify center gap-2 mb-4"> <i className="text-blue-300 text-md font-semibold">&#10003;</i> <span className="text-md font-semibold">AI-Powered Learning</span></h1>
          <p className="mb-6 text-gray-500 text-sm">Get personalist study reconmendations and instant answers to you study questions</p>
        </div>
      </nav>
      <div>
         <nav className="lg:flex gap-8 sm:grid grid-cols-1">
          <div>
          <h1 className="flex items-center juistiify center gap-2 mb-4"> <i className="text-blue-300 text-md font-semibold">&#10003;</i> <span className="text-md font-semibold">Study-Buddy Network</span></h1>
          <p className="mb-6 text-gray-500 text-sm">Connect with peers from study Groups and collaborate on projects</p>
        </div>
        <div>
          <h1 className="flex items-center juistiify center gap-2 mb-4"> <i className="text-blue-300 text-md font-semibold">&#10003;</i> <span className="text-md font-semibold">Regular Updates</span></h1>
          <p className="mb-6 text-gray-500 text-sm">New Materials Added weekly.Stay ahead with the latest exams patterns and questions </p>
        </div>
      </nav>
      </div>
       </div>
       </nav>
      </div>
    </div>
  );
};
export default Subscription;
