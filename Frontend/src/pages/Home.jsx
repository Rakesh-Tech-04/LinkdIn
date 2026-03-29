import { Navbar } from '../components/Navbar'
import { CiCamera } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";


export const Home = () => {
    return (
        <div className='bg-amber-50 min-h-screen '>
            <Navbar />
            <main className='items-start gap-2 lg:flex mx-4'>
                {/* profile section */}
                <div className='w-[90%] relative bg-white rounded-lg py-3 my-3 mx-auto lg:w-85'>
                    {/* background thumbnail */}
                    <div className='w-[95%] h-20 mx-auto mb-4 overflow-hidden rounded-md relative'>
                        <img src="https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png" alt="bgImg" className='h-full w-full' />
                        <CiCamera className='absolute z-20 top-5 right-6 text-2xl text-white' />
                    </div>

                    {/* profile logo */}
                    <div className='h-15 w-15 overflow-hidden rounded-[50%] absolute top-13 left-8'>
                        <img className='h-full w-full' src="https://static.vecteezy.com/system/resources/thumbnails/068/822/642/small/a-little-girl-with-big-eyes-looking-at-the-camera-photo.JPG" alt="" />
                    </div>
                    <FaCirclePlus className='absolute top-18 left-20 z-1000 -right-1 text-xl text-white' />

                    {/* user details */}
                    <div className='mx-8 mt-7'>
                        <h1 className='font-semibold text-2xl'>Rakesh Sahu</h1>
                        <h3 className='font-medium'>MERN DEVELOPER</h3>
                        <p className='text-sm'>India</p>
                    </div>

                    {/* edit profile */}

                    <button className='mx-auto flex items-center gap-2 border-2 w-[90%] justify-center rounded-2xl p-1 text-sky-400 mt-2 cursor-pointer'>Edit Profile <IoPencil /></button>
                </div>

                {/* create post */}
                <div className='bg-white flex gap-2 px-8 py-3 m-5 mx-auto rounded-xl w-[90%] lg:w-200'>
                    {/* profile logo */}
                    <div className='h-13 w-13 overflow-hidden rounded-[50%]'>
                        <img className='h-full w-full' src="https://static.vecteezy.com/system/resources/thumbnails/068/822/642/small/a-little-girl-with-big-eyes-looking-at-the-camera-photo.JPG" alt="" />
                    </div>
                    <input className='border-2 px-4 rounded-4xl w-[95%]' type="text" placeholder='start a post' />
                </div>

                {/* suggested users */}
                <div className='bg-white py-3 px-6 mx-auto w-[90%] lg:w-80'>
                    <h1 className='font-semibold text-3xl mb-4'>Suggested Users</h1>

                    {/* users */}

                    <div className='flex gap-3'>
                        {/* profile logo */}
                        <div className='h-13 w-13 overflow-hidden rounded-[50%]'>
                            <img className='h-full w-full' src="https://static.vecteezy.com/system/resources/thumbnails/068/822/642/small/a-little-girl-with-big-eyes-looking-at-the-camera-photo.JPG" alt="" />
                        </div>
                        {/* user detail */}
                        <div>
                            <h1 className='font-semibold text-xl'>Ayush sahu</h1>
                            <h3 className='font-medium'>MERN</h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
