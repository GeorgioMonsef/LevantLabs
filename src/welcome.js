import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './welcome.css';

const Welcome = () => {
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
        phone_number: '',
        user_email: '',
        availability: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_p0v4zi6', 'template_a7t6yc9', {
            to_name: formData.to_name,
            from_name: formData.from_name,
            message: formData.message,
            phone_number: formData.phone_number,
            user_email: formData.user_email,
            availability: formData.availability
        }, 'InmWL440O0zU4EVCd')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
                setFormData({
                    to_name: 'Georgio Monsef',
                    from_name: '',
                    message: '',
                    phone_number: '',
                    user_email: '',
                    availability: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black flex">
            <div className="w-1/2 h-full flex flex-col items-start justify-center p-10 text-left">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500 animate-text drop-shadow-lg leading-tight">
                    Simplicity.<br />
                    Consultation.<br />
                    Hosted.<br />
                    72 hours.
                </h1>
                <p className="mt-4 text-xl text-gray-300 drop-shadow-md max-w-md">
                    Consultation, hosted, 48 hours. Let us help you bring your vision to life!
                </p>
                <p className="mt-4 text-lg text-gray-300 drop-shadow-md max-w-md">
                    At Simplicity, we believe in creating seamless digital experiences that not only look stunning but also drive results.
                </p>
                <ul className="mt-8 list-disc list-inside text-gray-300">
                    <li className="animate-pulse">Custom Web Design</li>
                    <li className="animate-pulse">Responsive & Mobile-Friendly</li>
                    <li className="animate-pulse">SEO Optimization</li>
                    <li className="animate-pulse">Fast & Secure Hosting</li>
                    <li className="animate-pulse">E-commerce Solutions</li>
                    <li className="animate-pulse">Brand Identity Development</li>
                </ul>
                <p className="mt-4 text-lg text-gray-300 drop-shadow-md max-w-md">
                    Let’s connect and create something exceptional together!
                </p>
            </div>

            <div className="flex flex-col items-start justify-center h-full p-10 w-1/2">
                <form onSubmit={handleSubmit} className={`bg-gray-700 p-8 rounded-lg shadow-lg mt-10 w-full ${submitted ? 'scale-95' : 'scale-100'}`}>
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Create Your Website</h2>

                    <input type="text" name="from_name" placeholder="Your Name" value={formData.from_name} onChange={handleChange} className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full mb-4" required />
                    <textarea name="message" placeholder="Description of your project" value={formData.message} onChange={handleChange} className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full mb-4" rows="4" required></textarea>
                    <input type="tel" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full mb-4" required />
                    <input type="email" name="user_email" placeholder="Email Address" value={formData.user_email} onChange={handleChange} className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full mb-4" required />
                    <input type="text" name="availability" placeholder="Time of Availability" value={formData.availability} onChange={handleChange} className="border border-gray-600 bg-gray-800 text-white p-2 rounded w-full mb-4" required />

                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold p-2 rounded w-full mt-4">Submit</button>
                    {submitted && <div className="mt-4 text-green-400 text-center">Thank you for your submission!</div>}
                </form>
            </div>
        </div>
    );
};

export default Welcome;
