import Sidebar from "../component/Sidebar";
import { Crown, FlashlightIcon } from "lucide-react";

const Subscription = () => {
  return (
    <div>
      <nav>
        <Sidebar />
      </nav>
      <nav className="flex items-center justify-center mb-6">
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
      <div className=" grid grid-cols-3 p-4 gap-2 mx-3">
      <nav className="border p-5">
          <div className="ml-26 hover hover:shadow shadow-md-blue-500">
          <Crown size={35} className="text-blue-500 font-bold font-xl mb-5 " />
          <h1 className="text-2xl -mx-6 text-bold mb-4 ">Monthly</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">$2,000</h1>
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
        </div>
      </nav>
      <nav className="border border-blue-500 rounded-lg p-4">
          <div className="mx-28">
          <FlashlightIcon size={35} className="text-blue-500 font-bold font-xl mb-5 " />
          <h1 className="text-2xl -mx-12 text-bold mb-4 ">Semester</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">$2,000</h1>
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
            <button className="bg-blue-600 rounded-lg w-full mt-6 h-10 text-white font-bold">Subscribe</button>
          </nav>
        </div>
      </nav>
       <nav className="hover hover:border-gray-500  p-4">
         <div className="mx-28 rounded">
          <Crown size={35} className="text-blue-500 font-bold font-xl mb-5 " />
          <h1 className="text-2xl -mx-6 text-bold mb-4 ">Annual</h1>
          <p className="flex items-center gap-8 mx-5  mb-4 ">
            <h1 className=" -mx-23 font-bold text-4xl">$2,000</h1>
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
        </div>
       </nav>
      </div>
    </div>
  );
};
export default Subscription;
