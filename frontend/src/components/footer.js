// components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold">JoSAA Insights</h3>
                    <p className="mt-2 text-gray-400">Providing insights and analysis for college admissions.</p>
                </div>
                <div className="text-gray-400">
                    &copy; {new Date().getFullYear()} JoSAA Insights. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
