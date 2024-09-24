import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us-container py-10 px-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
            <h1 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                About Us
            </h1>
            <p className="text-lg mb-4">
                At Levant Labs, we are dedicated to providing innovative web solutions that bring your ideas to life. Our team of experienced professionals is committed to excellence and driven by a passion for technology.
            </p>
            <p className="text-lg mb-4">
                We specialize in custom web design, development, and digital marketing strategies tailored to meet the unique needs of our clients. Whether you are a startup or an established business, we have the tools and expertise to help you succeed online.
            </p>
            <p className="text-lg">
                Join us on this journey, and let’s create something extraordinary together!
            </p>
        </div>
    );
};

export default AboutUs;
