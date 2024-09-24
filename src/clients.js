import React from 'react';

const Clients = () => {
    return (
        <div className="clients-container py-10 px-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <h1 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
                Our Clients
            </h1>

            {/* Client One */}
            <div className="client-section mb-4 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">Karim Al Malki</h2>
                <a
                    href="https://karimalmalki.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    https://karimalmalki.com
                </a>
                <ul className="mt-2 list-disc list-inside">
                    <li>Personal portfolio showcasing projects and achievements.</li>
                </ul>
            </div>

            {/* Add more clients as needed */}
        </div>
    );
};

export default Clients;
