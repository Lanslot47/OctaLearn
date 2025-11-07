import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image'
const Home = () => {
    return (
        <div className='py-12'>
            {/* <div></div> */}
            <form action="" className='font-sans '>
                <div className='justify-center '>
                    <Image src="/Capture.PNG" height={30} width={30} alt='hsh' className='mx-auto mb-5' />
                </div>
                <h1 className='text-2xl text-center'>Welcome Back</h1>
                <p className='text-sm mb-5 text-gray-500 text-center'>Sign in to your OctaLearn Account</p>
                <div className='space-y-4 justify-center ml-[437px] mb-5'>
                    <div>
                        <label htmlFor="" className='font-medium' >Email</label><br />
                        <input type="text" placeholder='Enter Your Email Address' className=' m-auto p-2 w-90 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label><br />
                        <input type="password" placeholder='Enter Your Password' className='m-auto p-2 w-90 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-500 p-1 w-[353px] mb-8 rounded-md text-white hover:transform hover:translate-0.5  hover:duration-75 hover:bg-blue-400 cursor-pointer'>Sign in</button>
                    <p className='text-blue-500 hover:text-gray-600 cursor-pointer mb-8'>Forgot your password ?</p>
                    <p className='mb-16'>don't have an account ? <Link href="./Signup"><span className='text-blue-500 hover:text-gray-600 cursor-pointer'>sign up here</span></Link></p>

                    <Link href="../"> <p className='cursor-pointer flex items-center text-center gap-3 ml-[620px] hover:text-blue-500'><BiArrowBack /> Back to home </p></Link>
                </div>
            </form>
        </div>
    )
}
export default Home