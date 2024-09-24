import React from 'react';

const Tools = () => {
    return (
        <div className="flex h-screen bg-gradient-to-l from-black to-gray-800 via-gray-900 overflow-hidden">
            {/* Left Section: Tools We Use */}
            <div className="w-1/3 flex flex-col items-start justify-start p-10">
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full mb-10">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-4">
                        Tools We Use
                    </h2>
                    <p className="text-lg text-teal-300 mb-4">
                        At Levant Labs, we leverage a variety of modern technologies to bring your vision to life:
                    </p>
                </div>
                <ul className="list-inside text-teal-200">
                    <li className="bullet-point">React: For building dynamic user interfaces</li>
                    <li className="bullet-point">JavaScript: The backbone of our web applications</li>
                    <li className="bullet-point">CSS: For styling and layout to make your site visually appealing</li>
                    <li className="bullet-point">HTML: The foundation of all web content</li>
                    <li className="bullet-point">Node.js: For backend services and APIs</li>
                    <li className="bullet-point">Git: For version control and collaboration</li>
                </ul>
            </div>

            {/* Middle Section: Our Equipment */}
            <div className="w-1/3 flex flex-col items-start justify-start p-10">
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full mb-10">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-4">
                        Our Equipment
                    </h2>
                    <p className="text-lg text-teal-300 mb-4">
                        We utilize top-notch equipment to ensure quality service:
                    </p>
                </div>
                <ul className="list-inside text-teal-200">
                    <li className="bullet-point">High-performance laptops</li>
                    <li className="bullet-point">Dual monitors for enhanced productivity</li>
                    <li className="bullet-point">Graphics tablets for design work</li>
                    <li className="bullet-point">Professional audio equipment for clear communication</li>
                    <li className="bullet-point">Professional audio equipment for clear communication</li>
                    <li className="bullet-point">Professional audio equipment for clear communication</li>
                    <li className="bullet-point">Professional audio equipment for clear communication</li>

                </ul>
            </div>

            {/* Right Section: Hours of Operation */}
            <div className="w-1/3 flex flex-col items-start justify-start p-10">
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full mb-10">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-4">
                        Hours of Operation
                    </h2>
                    <p className="text-lg text-teal-300 mb-4">
                        We're here to serve you during the following hours:
                    </p>
                </div>
                <ul className="list-inside text-teal-200">
                    <li className="bullet-point">Monday: 24 hours. </li>
                    <li className="bullet-point">Tuesday: 24 hours. </li>
                    <li className="bullet-point">Wednesday: 24 hours. </li>
                    <li className="bullet-point">Thursday: 24 hours. </li>
                    <li className="bullet-point">Friday: 24 hours. </li>
                    <li className="bullet-point">Saturday: 24 hours. </li>
                    <li className="bullet-point">Sunday: Closed</li>
                </ul>
            </div>
        </div>
    );
};

export default Tools;
