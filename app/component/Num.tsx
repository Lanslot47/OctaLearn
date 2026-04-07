import Link from "next/link"

const Num = () => {
    return (
        <div>
            <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 sm:px-6 py-8 mb-16">
                <div>
                    <h1 className="text-blue-500 text-2xl sm:text-3xl font-semibold">500K</h1>
                    <p className="text-gray-400 text-xs sm:text-sm">Student helped</p>
                </div>

                <div>
                    <h1 className="text-blue-500 text-2xl sm:text-3xl font-semibold">10k+</h1>
                    <p className="text-gray-400 text-xs sm:text-sm">Question answered</p>
                </div>

                <div>
                    <h1 className="text-blue-500 text-2xl sm:text-3xl font-semibold">500+</h1>
                    <p className="text-gray-400 text-xs sm:text-sm">Study groups</p>
                </div>

                <div>
                    <h1 className="text-blue-500 text-2xl sm:text-3xl font-semibold">99%</h1>
                    <p className="text-gray-400 text-xs sm:text-sm">Satisfaction rate</p>
                </div>
            </section>

            <section className="font-sans w-full text-center px-4 sm:px-7 py-12 sm:py-16 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
                    Ready to Transform Your Learning?
                </h1>

                <p className="text-sm sm:text-md font-medium mb-5">
                    Join thousands of students already using OctaLearn to excel in their studies
                </p>

                <button className="px-5 py-2 text-sm hover:bg-blue-400 font-sans rounded-sm hover:transform hover:translate-0.5 hover:duration-75 cursor-pointer">
                    <Link href="./auth/Signup">Get started — its free</Link>
                </button>
            </section>
        </div>
    )
}

export default Num