import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => {
    return (
        <header className="lg:px-16 px-4 bg-gray-900 flex flex-wrap items-center py-4 shadow-lg">
            <div className="flex-1 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent hover:underline transition duration-300 ease-in-out"
                >
                    Levant Labs
                </Link>

                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg
                        className="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <title>menu</title>
                        <path d="M0 3h24v2H0V3zm0 6h24v2H0V9zm0 6h24v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-300 pt-4 md:pt-0">
                            <li>
                                <Link
                                    className="md:p-4 py-2 px-0 block hover:text-blue-500 transition duration-200 rounded-md hover:bg-gray-800"
                                    to="/about" // Updated link to /about
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:p-4 py-2 px-0 block hover:text-blue-500 transition duration-200 rounded-md hover:bg-gray-800"
                                    to="/clients"
                                >
                                    Our Clients
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="md:p-4 py-2 px-0 block hover:text-blue-500 transition duration-200 rounded-md hover:bg-gray-800"
                                    to="/contact" // Add this link if you have a Contact Us page
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Toolbar;
