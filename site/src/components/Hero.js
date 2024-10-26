import React, { useState } from "react";

const Hero = () => {
    const [selectedOption, setSelectedOption] = useState("Exploring");
    const [isHoveredOption, setIsHoveredOption] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const options = [
        { label: "Exploring", path: "/map" },
        { label: "Planning", path: "/calendar" },
        { label: "Notifying", path: "/notify" },
    ];

    const handleOptionHover = (option) => {
        setIsHoveredOption(option);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsHoveredOption(""); // Reset hover state
        setIsDropdownVisible(false); // Hide dropdown after selection
    };

    // Determine the path based on the selected option
    const selectedPath = options.find(option => option.label === selectedOption)?.path;

    return (
        <main>
            <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
                <h1 className="md:w-[550px] text-center text-4xl sm:text-6xl md:text-8xl text-black">
                    Let's go {isHoveredOption || selectedOption}.
                </h1>
                <p className="text-black">Find Fellowship Near You</p>
                <div className="relative">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                onMouseEnter={() => setIsDropdownVisible(true)}
                                onMouseLeave={() => setIsDropdownVisible(false)}
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                {selectedOption}
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {isDropdownVisible && (
                            <div 
                                className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                onMouseEnter={() => setIsDropdownVisible(true)}
                                onMouseLeave={() => setIsDropdownVisible(false)}
                            >
                                <div className="py-1 flex flex-col items-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {options.map((option) => (
                                        <button
                                            key={option.label}
                                            onMouseEnter={() => handleOptionHover(option.label)}
                                            onClick={() => handleOptionSelect(option.label)}
                                            className={`block w-full text-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 ${isHoveredOption === option.label ? 'bg-gray-100' : ''}`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <a href={selectedPath} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                    Start
                </a>
            </div>
        </main>
    );
}

export default Hero;