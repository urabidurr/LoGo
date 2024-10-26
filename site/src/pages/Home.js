import React from "react"
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js"
// import BgImage from "../assets/bgimage.jpg"

function Home() {
    // const bgImage = {
    //     backgroundImage: `url(${BgImage})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh", 
    //     width: "100%"
    // };

    return (
        <>
            <head>
                <title>LoGo</title>
                <link rel="icon" type="image/png" href="./assets/logo.png" />
            </head>
            <div className="bg-green-50">
                <Navbar />
                <Hero />
            </div>
        </>
    );
}

export default Home;