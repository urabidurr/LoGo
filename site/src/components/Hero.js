import React from "react";

const Hero = () => {
    return(
        <>
            <main>
                <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
                    <h1 className="md:w-[550px] text-center font-chakra text-4xl sm:text-6xl md:text-8xl text-black mix-blend-color-burn">Search</h1>
                    <p className="text-black">Try where others have tried.</p>
                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-1 px-4 rounded-full">Get Started</button>
                </div>
            </main>
        </>
    )
}

export default Hero