// components/Navbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from React Router

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Use useLocation to get the current path

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            closeMenu();
        }
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className="text-white text-2xl font-bold">JoSAA Insights</span>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white focus:outline-none focus:text-gray-200"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className="hidden md:flex md:space-x-8">
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={handleHomeClick}>Home</Link>
                        <Link to="/collagepredictor" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Predictions</Link>
                        <Link to="/dataAnalysis" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Trends</Link>
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Insights</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={handleHomeClick}>Home</Link>
                    <Link to="/collagepredictor" className="block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Predictions</Link>
                    <Link to="/dataAnalysis" className="block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Trends</Link>
                    <Link to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-gray-200 hover:bg-blue-600" onClick={closeMenu}>Insights</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
