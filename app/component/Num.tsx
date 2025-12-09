import Link from "next/link"

const Num = () => {
    return (
        <div className="">
            <section className="lg:flex items-center justify-between p-5 px-26 mb-16 md:grid grid-cols-2 space-y-4 mx-8 sm:block">
                <div className="font-sans">
                    <h1 className="text-blue-500 text-3xl font-semibold">500K</h1>
                    <p className="text-gray-400 text-sm">Student helped</p>
                </div>
                <div>
                    <h1 className="text-blue-500 text-3xl font-semibold">10k+</h1>
                    <p className="text-gray-400 text-sm">Question answered</p>
                </div>
                <div>
                    <h1 className="text-blue-500 text-3xl font-semibold">500+</h1>
                    <p className="text-gray-400 text-sm">Study groups</p>
                </div>
                <div>
                    <h1 className="text-blue-500 text-3xl font-semibold">99%</h1>
                    <p className="text-gray-400 text-sm">Satisfaction rate</p>
                </div>
            </section>

            <section className="font-sans w-full text-center box-border p-7 py-17 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100">
                <h1 className="text-3xl font-semibold mb-2">Ready to Transform Your Learning?</h1>
                <p className="text-md font-medium mb-5">Join thousands of students already using OctaLearn to excel in their studies</p>
                <button className="border-none bg-white px-5 py-2 text-sm hover:bg-blue-400 font-sans rounded-sm hover:transform hover:translate-0.5 hover:duration-75 cursor-pointer">
                    <Link href="./auth/Signup">Get started — it's free</Link>
                </button>
            </section>
        </div>
    )
}

export default Num