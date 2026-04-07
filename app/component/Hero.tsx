import Link from "next/link"

const Hero = () => {
    return (
        <div className="text-center mt-24 sm:mt-32 px-4 sm:px-6 pt-16 pb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8">
                Your AI-Powered <span className="text-blue-400">Study Companion</span>
            </h1>

            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                connect with study buddies, access past questions, take smart notes, and get AI
                <br className="hidden sm:block" />
                assistance for all your academic needs. Built for Nigerian Students
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-400 px-6 py-2 rounded-md font-semibold font-sans text-white cursor-pointer hover:transform hover:-translate-0.5 hover:bg-blue-300 hover:duration-75">
                    <Link href="./auth/Signup">Start Learning</Link>
                </button>

                <button className="hover:text-blue-400 cursor-pointer">
                    <Link href="./auth/Login">I have an account</Link>
                </button>
            </div>
        </div>
    )
}

export default Hero