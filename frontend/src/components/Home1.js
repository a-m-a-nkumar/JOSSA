// components/HeroSection.js

import React from 'react';
import Carousel from './Carousel';
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
    return (
        <section className="relative bg-sky-100 text-blue-600 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
                {/* Text and navigation */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to JoSAA Insights</h1>
                    <TypingAnimation/>
                </div>

                {/* Carousel images */}
                <div className="md:w-1/2 absolute right-0 top-0 md:relative md:top-auto md:right-auto md:bottom-0">
                    <Carousel />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
