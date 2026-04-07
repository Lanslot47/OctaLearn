import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-blue-100 px-4 sm:px-6 py-4 sm:py-6 fixed w-full z-50 top-0">
            <h1 className="text-lg sm:text-xl text-blue-400 font-semibold font-sans flex items-center gap-2">
                <Image src="/Capture.PNG" height={40} width={40} alt='capture' />
                <span>OctaLearn</span>
            </h1>

            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <button className="hover:text-blue-400 cursor-pointer font-semibold">
                    <Link href="./auth/Login">Login</Link>
                </button>

                <button className="bg-blue-400 px-3 sm:px-6 py-2 rounded-md font-semibold font-sans text-white cursor-pointer hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75">
                    <Link href="./auth/Signup">Signup</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar