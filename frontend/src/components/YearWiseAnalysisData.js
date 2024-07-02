import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const YearWiseAnalysisChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    if (!data || data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full mt-10">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-lg text-center" role="alert">
                    <strong className="font-bold">No Data Available</strong>
                    <span className="block sm:inline"></span>
                </div>
            </div>
        );
    }


    // Assuming your data has 'Year', 'Closing Rank', and 'Opening Rank' properties
    const years = data.map(item => item.Year);
    const closingRanks = data.map(item => item['Closing Rank']);
    const openingRanks = data.map(item => item['Opening Rank']);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Closing Rank',
                data: closingRanks,
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Opening Rank',
                data: openingRanks,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointStyle: 'crossRot',
                pointRadius: 6,
                pointBorderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                pointHoverBorderWidth: 2,
            }
        ]
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                    font: {
                        size: 20, // Increase font size for the x-axis title
                        weight: 'bold',
                        family: 'Arial'
                    }
                }

            },
            y: {
                title: {
                    display: true,
                    text: 'Rank',
                    font: {
                        size: 20, // Increase font size for the x-axis title
                        weight: 'bold',
                        family: 'Arial'
                    }
                }
            }
        }
    };

    const screenWidth = window.innerWidth;

    // Determine width and height based on screen size
    const chartStyles = screenWidth > 768
        ?{ width: '80%', height: '400px' }:{}; // Default for larger screens


    return (
        <div className="bg-white chart-container mt-10 flex flex-col gap-10 justify-center items-center max-w-fit md:w-full rounded-lg border-fuchsia-500 border-solid shadow-fuchsia-200 border-2 p-3 shadow-xl">
            <h2 className='text-3xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Year Wise Analysis</h2>
            <Line style={chartStyles} ref={chartRef} data={chartData} options={options} />
        </div>
    );
};

export default YearWiseAnalysisChart;
