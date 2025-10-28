import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image'
const Home = () => {
    return (
        <div className='py-12'>
            <form action="" className='font-sans'>
                <div className='justify-center '>
                    <Image src="/Capture.PNG" height={30} width={30} alt='hsh' className='mx-auto mb-5' />
                </div>
                <h1 className='text-2xl text-center'>Join OctaLearn</h1>
                <p className='text-sm mb-5 text-gray-500 text-center'>Create your account and start your learning journey</p>
                <div className='space-y-4 justify-center ml-[500px] mb-5'>
                    <div>
                        <label htmlFor="" className='font-medium'>Full Name</label><br />
                        <input type="text" placeholder='Enter Your Full Name' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium'>Email</label><br />
                        <input type="text" placeholder='Enter Your Email address' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <label htmlFor="" className='font-medium'>School/Institution</label><br />
                            <input type="text" placeholder='Enter Your Institution Name' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-medium'>Department</label><br />
                            <input type="text" placeholder='Enter Your Department' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium'>Course/Major</label><br />
                        <input type="text" placeholder='Enter Your Course or Major' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <label htmlFor="" className='font-medium'>Level</label><br />
                            <select name="" id="" className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm'>
                                <option value="">Select your Level</option>
                                <option value="">100 level</option>
                                <option value="">200 level</option>
                                <option value="">300 level</option>
                                <option value="">400 level</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='font-medium'>Interests</label><br />
                            <input type="text" placeholder='Enter Your Academic interests' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="" className='font-medium'>Phone(Optional)</label><br />
                            <input type="number" placeholder='Enter Your Phone Number' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-medium'>Bio(Optional)</label><br />
                            <input type="text" placeholder='Brief Description About you' className=' m-auto p-2 w-70 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium'>Password</label><br />
                        <input type="password" placeholder='Enter Your Password' className=' m-auto p-2 w-90 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                    <div>
                        <label htmlFor="" className='font-medium'>Confirm Password</label><br />
                        <input type="password" placeholder='Re-enter your Password' className=' m-auto p-2 w-90 focus:outline-blue-500 rounded-md text-gray-500 text-sm' />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-500 p-1 w-[360px] mb-8 rounded-md text-white hover:transform hover:translate-0.5  hover:duration-75 hover:bg-blue-400 cursor-pointer'>Create Account</button>
                    <p className='mb-16'>Already have an account ? <Link href="./Login"><span className='text-blue-500 hover:text-gray-600 cursor-pointer'>sign in here</span></Link></p>

                    <Link href="../"> <p className='cursor-pointer flex items-center text-center gap-3 ml-[620px] hover:text-blue-500'><BiArrowBack /> Back to home </p></Link>
                </div>
            </form>
        </div>
    )
}
export default Home