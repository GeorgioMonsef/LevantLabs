import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container py-10 px-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
            <h1 className="text-center text-4xl font-bold mb-6">Contact Us</h1>
            <div className="contact-info text-center">
                <p className="text-lg mb-4">For inquiries, please reach out to us:</p>
                <p className="text-xl font-semibold">Phone: <a href="tel:6136009723" className="text-blue-400 hover:underline">613-600-9723</a></p>
                <p className="text-xl font-semibold">Email: <a href="mailto:admin@levantsolutionsinc.com" className="text-blue-400 hover:underline">admin@levantsolutionsinc.com</a></p>
            </div>
        </div>
    );
};

export default Contact;
