import Link from "next/link"
const Hero =()=>{
    return(
        <div className="justify-center text-center m-30 px-6 pt-24 pb-16">
            <h1 className="text-6xl mb-8">Your AI-Powered <span className = "text-blue-400">Study Companion</span></h1>
            <p className="text-gray-400 mb-8">connect with study buddies, access past questions, take smart notes, and get AI <br></br> assistance for all your academic nedds. Build for Nigerian Students</p>
            <div className="space-x-4">
                <button className="bg-blue-400 px-6 py-2 rounded-md font-semibold font-sans text-white cursor-pointer hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75 "><Link href="./auth/Signup">Start Learning</Link></button>
                <button className="hover:text-blue-400 cursor-pointer"> <Link href="./auth/Login">I have an account</Link></button>
            </div>
        </div>
    )
}
export default Hero