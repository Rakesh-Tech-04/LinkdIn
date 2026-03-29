import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { MdHome } from "react-icons/md";

export const Navbar = () => {

    return (
        <div className="flex justify-around py-4 border-b-2 bg-white">
            {/* left part */}
            <div className="flex gap-3">
                {/* Logo */}
                <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-29-2023-popular-social-media-logo-icon-linkedin-vector-design-realistic-editorial-sign_545793-1682.jpg?semt=ais_incoming&w=740&q=80" alt="logo" className="h-10" />

                {/* search bar */}
                <div className="relative bg-amber-50 rounded-lg">
                    <IoSearch className="absolute top-3 left-2" />
                    <input className="py-2
                    px-10 outline-none" type="text" placeholder="search" />
                </div>
            </div>

            {/* right part */}
            <div className="flex gap-4">
                {/* features */}
                <div className="hidden flex-col items-center cursor-pointer lg:flex">
                    <MdHome />
                    <span>Home</span>
                </div>
                <div className=" flex-col items-center cursor-pointer hidden lg:flex">
                    <MdPeopleAlt />
                    <span>My Networks</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <FaBell />
                    <span>Notifications</span>
                </div>

                {/* profile logo */}
                <div className="h-11 w-11 rounded-[50%] overflow-hidden flex justify-center items-center cursor-pointer">
                    <img className="h-11" src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_incoming&w=740&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}
