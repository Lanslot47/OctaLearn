import Image from 'next/image'

const Footer = () => {
    return (
        <div className='p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
            <h1 className="text-sm text-blue-400 font-semibold font-sans flex items-center gap-2">
                <Image src="/Capture.PNG" height={30} width={30} alt='hsh' />
                <span>OctaLearn</span>
            </h1>

            <p className='text-xs sm:text-sm text-gray-500 font-sans text-center sm:text-left'>
                &copy; OctaLearn Empowering Student Across Nigeria
            </p>
        </div>
    )
}

export default Footer