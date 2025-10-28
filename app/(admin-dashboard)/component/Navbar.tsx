import { BiNotification } from "react-icons/bi"
const Navbar = () => {
    return (
        <div className="fixed z-50 bg-white w-full">
            <nav className="border-2 h-17 border-gray-300 mb-10  border-t-0 border-l-0 border-r-0 px-90 py-3.5">
                <div className="flex items-center ml-[400px]">
                    <BiNotification size={30} />
                    <h3 className="text-">Amar Abdulmumin Hussaini</h3>
                </div>
            </nav>
        </div>
    )
}
export default Navbar