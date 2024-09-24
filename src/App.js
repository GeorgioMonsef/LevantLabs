import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './welcome';
import Toolbar from './toolbar';
import Ottawa from './ottawa';
import Footer from './footer';
import Tools from './tools';
import Clients from './clients';
import AboutUs from './about';
import Contact from './contact'; // Import the Contact component
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <Router>
            <Toolbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Welcome />
                        <Ottawa />
                        <Tools />
                    </>
                } />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
