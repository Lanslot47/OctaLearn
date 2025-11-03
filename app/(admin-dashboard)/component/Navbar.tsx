import { BiNotification } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="fixed md:static z-40 bg-white w-full border-b border-gray-300 px-4 py-3">
      <nav className="flex items-center justify-between md:justify-end">
        <BiNotification size={28} className="text-gray-600" />
        <h3 className="text-sm md:text-base font-semibold text-gray-700 ml-2 truncate">
          Amar Abdulmumin Hussaini
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
