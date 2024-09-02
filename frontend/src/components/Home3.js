// components/ThirdSection.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ThirdSection = () => {
    const analysisItems = [
        {
            title: "College Predictions",
            description: "Accurate predictions leveraging historical data and advanced algorithms.",
            icon: "🎓",
            link: "/collagepredictor"
        },
        {
            title: "Round Analysis",
            description: "Insights into rounds and strategies for better selection.",
            icon: "🔄",
            link: "/dataAnalysis"
        },
        {
            title: "Yearly Trends",
            description: "Explore trends based on yearly data to make informed decisions.",
            icon: "📅",
            link: "/dataAnalysis"
        },
        {
            title: "EDA Insights",
            description: "Key findings and conclusions through Exploratory Data Analysis.",
            icon: "🔍",
            link: "/eda-insights"
        }
    ];

    return (
        <section className="bg-sky-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Explore College Predictions and Analysis</h2>
                    <p className="mt-4 text-lg text-gray-600">Gain insights through comprehensive analysis and data exploration.</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 place-items-center justify-center">
                    {analysisItems.map((item, index) => (
                        <Link key={index} to={item.link} className="w-full">
                            <div className="bg-slate-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center lg:w-2/3 w-11/12 mx-auto transition duration-300 ease-in-out transform hover:scale-105">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-center">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
