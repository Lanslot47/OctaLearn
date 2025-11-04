import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {

    return (
        <nav className="flex justify-between px-6 py-6 fixed w-full z-50 top-0 bg-blue-50">
            <h1 className="text-xl text-blue-400 font-semibold font-sans flex items-center gap-2">
                <Image src="/Capture.PNG" height={50} width={50} alt='hsh' />
                <span>OctaLearn</span>

            </h1>
            <div className="space-x-6 text-sm ">
                <button className="hover:text-blue-400 cursor-pointer font-semibold">
                    <Link href="./auth/Login">Login</Link>
                </button>
                <button className="bg-blue-400 px-6 py-2 rounded-md font-semibold font-sans text-white cursor-pointer hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75 ">
                    <Link href="./auth/Signup">Signup</Link>
                </button>
            </div>
        </nav>
    )
}
export default Navbar