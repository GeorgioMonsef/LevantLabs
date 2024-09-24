import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black flex pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="flex mt-6 lg:mb-0 mb-6">
                            <a
                                href="https://www.instagram.com/levantsolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="mailto:admin@levantsolutionsinc.com"
                                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link
                                            className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            to="/about"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            to="/contact"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                                Copyright © <span id="get-current-year">2024</span> by{' '}
                            </span>
                            <a
                                href="https://levantsolutionsinc.com"
                                className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent hover:text-gray-800 font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Levant Solutions Inc.
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
