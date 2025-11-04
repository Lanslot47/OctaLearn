import { BiBell } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="fixed md:static z-40 bg-white w-full border-b border-gray-300 px-2 py-4">
      <nav className="flex items-center justify-between gap-1 md:justify-end">
        <BiBell size={28} className="text-gray-600  " />
        <div className="h-9 w-9 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="font-semibold ">A</span>
        </div>
        <h3 className="text-sm md:text-base font-semibold text-gray-700 ml-2 truncate">
          Amar Abdulmumin Hussaini
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
