import Link from "next/link"
const Num = () => {
    return (
        <div className="">
            <section className="flex items-center justify-between p-5 px-6 mb-16 ">
                <div className="font-sans ">
                    <h1 className="text-blue-500 text-3xl font-semibold">500K</h1>
                    <p className="text-gray-400 text-sm">Student helped</p>
                </div>
                <div>
                    <h1 className="text-blue-500 text-3xl font-semibold">10k+</h1>
                    <p className="text-gray-400 text-sm">Question answeres</p>
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
            <section className="font-sans text- w-full  text-center box-border p-7 py-17 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100">
                <h1 className=" text-3xl font-semibold mb-2">Ready to Transform Your Learning?</h1>
                <p className="text-md font-medium mb-5">Join thousand of student Already Using OctaLearn to Excel their Studies</p>
                <button className="border-none bg-white px-5 py-2 text-sm hover:bg-blue-400 font-sans rounded-sm hover:transform hover:translate-0.5  hover:duration-75 cursor-pointer"><Link href= "./auth/Signup">Get started-it's free</Link></button>
            </section>
        </div>
    )
}
export default Num