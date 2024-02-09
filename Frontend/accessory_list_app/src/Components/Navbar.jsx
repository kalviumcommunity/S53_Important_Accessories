import { Button } from 'flowbite-react';
const Navbar = ()=> {
    return (
        <div>
            <div className="nav-container">
            <div className="flex justify-around items-center w-full md:w-6/12 mx-auto py-[2vh]">
                <p>Home</p>
                <p>List</p>
                <p>About</p>
                <button className="btn btn-xs sm:btn-sm md:btn-md bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Sign-In</button>
            </div>
        </div>
        </div>
    )
}
export default Navbar;