import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
// import Image from 'next/image'
// 
const Home = () => {
    return (
        <div className="py-12 px-4 sm:px-8">
            <form className="font-sans max-w-md sm:max-w-lg md:max-w-xl mx-auto bg-white">
                {/* Logo */}
                {/* Heading */}
                {/* <Image  src="/Capture.PNG" alt="img" ></Image> */}
                {/* <img src="Capture.PNG" alt="111" /> */}
                <div>
                 <img src="/Capture.PNG" height={50} width={50} alt="Logo" className="mx-auto mb-5" />
                          </div>
                <h1 className="text-2xl sm:text-3xl text-center font-semibold">Welcome Back</h1>
                <p className="text-sm sm:text-base mb-5 text-gray-500 text-center">
                    Sign in to your OctaLearn Account
                </p>
              {/* Form Inputs */}
                <div className="space-y-2  mb-5">
                    <div className='ml-20'>
                        <label className="font-medium ml-2">Email</label><br />
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className="w-4/5  p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                        />
                    </div>
                    <div className='ml-20'>
                        <label className="font-medium ml-2">Password</label><br />
                          <input
                            type="text"
                            placeholder="Enter Your password"
                            className="w-4/5  p-2 focus:outline-blue-500 rounded-md text-gray-500 text-sm"
                        />
                    </div>
                </div>

                {/* Buttons and Links */}
                <div className="text-center">
                    <button className="bg-blue-500 p-2  sm:w-[360px]  mb-8 rounded-md text-white hover:bg-blue-400 transition">
                        Sign in
                    </button>

                    <p className="text-blue-500 hover:text-gray-600 cursor-pointer mb-8">
                        Forgot your password?
                    </p>

                    <p className="mb-10 text-sm sm:text-base">
                        Don’t have an account?{' '}
                        <Link href="./Signup">
                            <span className="text-blue-500 hover:text-gray-600 cursor-pointer">Sign up here</span>
                        </Link>
                    </p>

                    <Link href="../">
                        <p className="flex items-center justify-center gap-2 text-sm sm:text-base hover:text-blue-500">
                            <BiArrowBack /> Back to home
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Home
