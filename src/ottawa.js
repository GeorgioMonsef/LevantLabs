import React from 'react';
import ottawa from './ottawa.png'; // Adjust the path if needed
import './ottawa.css';

const Ottawa: React.FC = () => {
    return (
        <div className="flex h-screen bg-gradient-to-l from-black to-gray-800 via-gray-900 overflow-hidden">
            {/* Left Side: Text Content */}
            <div className="flex flex-col items-start justify-start w-1/2 p-10">

                {/* Location Box */}
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full mb-10">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mb-4">
                        Located in the Heart of the Nation's Capital
                    </h2>
                    <p className="text-lg text-teal-300 mb-4">
                        Discover the beauty and culture of Ottawa:
                    </p>
                    <ul className="list-inside text-teal-200">
                        <li className="bullet-point">Stunning architecture of Parliament Hill</li>
                        <li className="bullet-point">Picturesque Rideau Canal</li>
                        <li className="bullet-point">Rich cultural festivals and events</li>
                        <li className="bullet-point">Beautiful parks and green spaces</li>
                    </ul>
                </div>


                {/* Types of Websites Section */}
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full mb-10">
                    <h3 className="text-2xl font-bold mb-2">Types of Websites We Create</h3>
                    <ul className="list-inside">
                        <li className="bullet-point">E-commerce Platforms</li>
                        <li className="bullet-point">Business Websites</li>
                        <li className="bullet-point">Personal Portfolios</li>
                        <li className="bullet-point">Blogs & Content Sites</li>
                        <li className="bullet-point">Landing Pages</li>
                    </ul>
                </div>

                {/* Mission Section */}
                <div className="bg-gray-700 p-5 rounded-lg shadow-lg text-gray-300 w-full">
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p>
                        At Levant Labs, we strive to create the seamless and easiest possible web creation service. Provide us with a simple description, and we turn it into a reality within 72 business hours.
                    </p>
                </div>
            </div>

            {/* Right Side: Image */}
            <img src={ottawa} alt="Ottawa" className="object-cover w-1/2 h-full" />
        </div>
    );
};

export default Ottawa;
