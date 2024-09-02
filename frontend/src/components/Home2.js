// components/FeatureSection.js

import React from 'react';
import trendImage from '../assets/IITG.jpg'; // make sure this path is correct

const FeatureSection = () => {
    const features = [
        {
            title: "Explore Trends",
            description: "Get insights into trends based on year, rounds, and the best institutes for courses.",
            icon: "📈"
        },
        {
            title: "General Analysis",
            description: "Discover key findings and conclusions through our comprehensive analysis and Exploratory Data Analysis (EDA).",
            icon: "🔬"
        }
    ];

    return (
        <section className="relative bg-gray-50 text-blue-600 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-20">
                {/* Image */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img src={trendImage} alt="Trends" className="rounded-lg shadow-lg" />
                </div>
                {/* Text and features */}
                <div className="w-full md:w-1/2">
                    <div className="text-center md:text-left mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Why Choose JoSAA Insights?</h2>
                        <p className="mt-4 text-lg text-gray-600">Discover the key features and benefits of using our platform.</p>
                    </div>
                    <div className="flex flex-col space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="text-4xl mr-4">{feature.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
