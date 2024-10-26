import React from "react";
import Logo from "../assets/logo.png";

const PCNav = [
    {
        name: "Home",
        href: "/home",
        className: "bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
    },
    {
        name: "About",
        href: "/about",
        className: "bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
    },
    {
        name: "Contact",
        href: "/contact",
        className: "bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
    },
    // {
    //     name: "Get Started",
    //     href: "/map",
    //     className: "bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
    // },
];

const Navbar = () => {
    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-shadow duration-300">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="https://logo-2-me.web.app/" className="text-black font-bold text-3xl flex items-center">
                    <img src={Logo} alt="Logo" className="h-10 inline mr-2" />
                    LoGo
                </a>

                {/* PC DISPLAY */}
                <div className="hidden sm:block">
                    <ul className="flex justify-center items-center gap-8">
                        {PCNav.map((menu) => (
                            <li key={menu.name} className="relative group">
                                <a 
                                    href={menu.href} 
                                    className={`text-gray-800 font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-lg ${menu.className}`}>
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PHONE DISPLAY */}
                <div className="sm:hidden block">
                    <ul>
                        <li>
                            <a 
                                href="https://www.youtube.com/" 
                                className="text-gray-800 font-semibold transition duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-gray-200 hover:shadow-lg transform hover:scale-105">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;