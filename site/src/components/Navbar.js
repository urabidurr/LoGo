import React from "react";
import Logo from "../assets/logo.png";


const PCNav = [
    {
        name: "Home",
        href: "https://logo-2-me.web.app/", 
        //links
    },
    {
        name: "About",
        href: "https://logo-2-me.web.app/",
    },
    {
        name: "Contact",
        href: "https://logo-2-me.web.app/",
    },
    {
        name: "Login",
        href: "https://logo-2-me.web.app/",
    },
    
]



const Navbar = () => {
    return <header className="bg-white/80 shadow-lg">
        <div className="container">
            <nav className="flex justify-between items-center">
                <a href="https://logo-2-me.web.app/" className="text-black-500 font-bold text-3xl">
                    <img src={Logo} alt ="Logo" className="h-10 inline mr-1" />
                    Welcome
                </a>
            
            </nav>
        </div>

    {/*PC DISPLAY */}
    <div className="hidden sm:block">
        <ul className="flex justify-center items-center gap-4">
            {PCNav.map((menu) => ( 
                 <li><a href= {menu.href} 
                 className="text-gray-900 px-4 py-4 inline-block select-none">{menu.name}</a></li>
            ))}


    
            
        </ul>
    </div>


    {/*PHONE DISPLAY */}
    <div className="sm:hidden block">
            <ul>
                <li>
                    <a href="https://www.youtube.com/" className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none font-semibold text-xl">
                        Login
                    </a>
                </li>
            </ul>
    </div>
    
    </header>
};

export default Navbar;