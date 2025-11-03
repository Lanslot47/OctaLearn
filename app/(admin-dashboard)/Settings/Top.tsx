import {
  BellIcon,
  SettingsIcon,
  CameraIcon,
  UploadIcon,
  User,
  SchoolIcon,
  Book,
  PrinterIcon,
  Shield,
} from "lucide-react";
import Image from "next/image";
const Top = () => {
  return (
    <div className="">
      <div className=" mt-2 gap-4 flex border fixed top-0 z-50  border-4-gray-500 border-t-transparent border-l-transparent border-r-transparent  h-18 w-full p-3 mb-2 ">
        <div>
          <span className="flex ml-230 gap-3 items-center">
            <BellIcon />
            <Image
              height={30}
              width={30}
              src="/Capture.PNG"
              alt="404"
              className="rounded-xl"
            />
            <h1 className="text-md  ">Amar Abdul mumin</h1>
          </span>
        </div>
      </div>
      <div>
        <div className="  ml-72 font-sans p-8 mt-16 -mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-4 mb-3">
            {" "}
            <SettingsIcon size={40} className="text-blue-500" />
            Settings
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Manage your Account Settings And preference
          </p>
        </div>
      </div>
      <nav className="flex gap-2">
        <section className="">
          <div className="ml-76 w-74 font-sans p-4 shadow shadow-gray-600 ">
            <h1 className="text-xl  flex items-center gap-4 mb-3 ">
              {" "}
              <CameraIcon size={20} className="text-sm" />
              Profile Picture
            </h1>
            <p className="text-sm text-gray-500 mb-10">
              Upload and manage your profile photo
            </p>
            <Image
              height={70}
              width={100}
              src="/Capture2.PNG"
              alt="404"
              className=" mb-6 ml-18 rounded-[50%]"
            />
            <span className="flex items-center gap-4 mx-12 text-sm">
              {" "}
              <UploadIcon size={20} /> <p>upload Photo</p>{" "}
            </span>
          </div>
        </section>
        <section className="">
          <div className="  ml-10 mb-14 font-sans p-8 shadow shadow-gray-600 w-11/12">
            <h1 className="text-xl  flex items-center gap-2 mb-3 ">
              {" "}
              <User size={20} className="text-sm" />
              Personal Information
            </h1>
            <p className="text-sm text-gray-500 mb-10">
              Update Your Personal Deatails and contact Information
            </p>
            <nav className="gap-4">
              <label htmlFor="Name" className="absolute -mt-8 -ml-2 text-md ">
                {" "}
                Full Name
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Enter your Full Name"
                className=" mb-2 border border-transparent focus:outline-none focus:border-blue-500 hover:border-blue-500 rounded-lg focus:rounded-md p-2 w-2/4"
              />
              <label htmlFor="Name" className="absolute -mt-8 -ml-2 text-md ">
                {" "}
                Phone Number:
              </label>
              <input
                type="number"
                id="Name"
                placeholder="Enter your Phone number"
                className=" mb-12 border border-transparent focus:outline-none focus:border-blue-500 hover:border-blue-500 rounded-lg focus:rounded-md p-2 w-2/4"
              />{" "}
              <br />
              <label htmlFor="Name" className="absolute -mt-8 -ml-2 text-md ">
                {" "}
                Bio:
              </label>
              <textarea
                id="Name"
                placeholder="Tell Others About Your Self"
                className=" mb-8 border border-transparent focus:outline-none focus:border-blue-500 hover:border-blue-500 rounded-lg focus:rounded-md p-2 w-4/4"
              />
              <h1 className="text-md  font-semibold flex items-center gap-2 mb-3 ">
                {" "}
                <SchoolIcon size={20} className="text-sm" />
                Academic Information
              </h1>
              <p className="text-sm text-gray-500 mb-10"></p>
              <div className="flex  items-center">
                <label htmlFor="Name" className="absolute -mt-26 text-md ">
                  Course/Major:
                </label>
                <input
                  type="email"
                  id="Password"
                  placeholder="Enter Your course or major"
                  className="  mb-8 border border-transparent focus:outline-none focus:border-blue-500 focus:rounded-md hover:border-blue-500 rounded-lg m-2 p-2 w-2/4"
                />{" "}
                <br />
                <label
                  htmlFor="Name"
                  className="absolute -mt-6 text-md ml-76 mb-20 ">
                  Level
                </label>
                <select
                  name="level"
                  arial-placeholder="select level"
                  className="mb-6 w-2/7 rounded-lg ml-14 border border-blue-500 h-10 ">
                  <option value="" disabled selected>
                    Select level:
                  </option>
                  <option value="100">100</option>
                  <option value="100">200</option>
                  <option value="100">300</option>
                  <option value="100">400</option>
                  <option value="100">500</option>
                </select>
                <label
                  htmlFor="Name"
                  className="absolute -mt-6  text-md  ml-2"></label>
              </div>
              <h1 className="text-md font-semibold  flex items-center gap-2 mb-4 ">
                {" "}
                <Book size={20} className="text-sm" />
                Intrest & Subjects
              </h1>
              <input
                type="text"
                id="Name"
                placeholder="Enter your Full Name"
                className=" mb-8 border border-transparent focus:outline-none focus:border-blue-500 hover:border-blue-500 rounded-lg focus:rounded-md p-2 w-4/6"
              />
              <button
                type="submit"
                className=" hover  hover:bg-blue-400 ml-4 rounded-lg w-14 h-10 ">
                Add
              </button>
              <button
                type="submit"
                className="bg-blue-400 hover ml-74 rounded-lg w-40 h-10 ">
                <span className="flex font-bold p-2 gap-2 items-center">
                  <PrinterIcon size={20} />
                  Save changes
                </span>
              </button>
            </nav>
          </div>
        </section>
      </nav>
      <div className="mx-78 p-6 border mb-10 w-8/11 shadow shadow-gray-600">
        <h1 className="text-xl flex items-center gap-2 mb-3 ">
          {" "}
          <Shield size={20} className="text-sm" />
          Account Information
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Update Your Personal Deatails and contact Information
        </p>

        <span className="flex gap-126 items-center mb-10">
          <nav>
            <h2 className="font-semibold  text-xl ">Email Address</h2>
            <p className="text-sm text-gray-500">amarhussaini72@gmail.com</p>
          </nav>
          <a href="#" className="items-end">
            Change Email
          </a>
        </span>
        <span className="flex gap-120 items-center mb-10">
          <nav>
            <h2 className="font-semibold  text-xl ">Passwords</h2>
            <p className="text-sm text-gray-500">Last Updated 30 days Ago</p>
          </nav>
          <a href="#" className="items-end">
            Change Password
          </a>
        </span>
        <span className="flex gap-98 items-center mb-10">
          <nav>
            <h2 className="font-semibold  text-xl mx-10 flex items-center gap-2 ">
              <BellIcon size={20} />
              Notifications
            </h2>
            <p className="text-sm text-gray-500 mx-10">
              Manage Your Notification preference
            </p>
          </nav>
          <a
            href="#"
            className="items-end border bg-blue-500 w-18 h-7.5 round">
            Configure
          </a>
        </span>
      </div>
    </div>
  );
};

export default Top;
