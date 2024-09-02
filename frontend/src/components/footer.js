import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold">JoSAA Insights</h3>
                    <p className="mt-2 text-gray-400">Providing insights and analysis for college admissions.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 mb-4">
                    <span>Developed with ❤️ by Sparrow.</span>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/rahul-kumar-436179239/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 12.394V6.169H2.542v6.225zm-1.2-7.212c.837 0 1.358-.554 1.358-1.248 0-.709-.52-1.248-1.342-1.248-.821 0-1.342.54-1.342 1.248 0 .694.521 1.248 1.327 1.248zm4.908 7.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 6.225 0 6.225z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/im-sparrow05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 .198a8 8 0 0 0-2.53 15.596c.4.074.547-.173.547-.384v-1.384c-2.225.485-2.69-1.073-2.69-1.073-.364-.925-.89-1.172-.89-1.172-.727-.497.056-.487.056-.487.803.056 1.226.827 1.226.827.714 1.223 1.872.87 2.329.665.073-.516.28-.872.508-1.073-1.777-.204-3.644-.889-3.644-3.96 0-.875.313-1.59.827-2.15-.083-.204-.36-1.025.078-2.136 0 0 .67-.215 2.2.82a7.608 7.608 0 0 1 2-.272c.676.003 1.353.093 2 .273 1.53-1.035 2.2-.82 2.2-.82.438 1.111.162 1.932.08 2.136.515.56.826 1.275.826 2.15 0 3.081-1.869 3.754-3.65 3.952.287.248.54.739.54 1.492v2.21c0 .213.146.46.55.383A8.002 8.002 0 0 0 8 .198z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600 my-4 w-1/2 mx-auto"/>
                <div className="text-gray-400">
                    &copy; {new Date().getFullYear()} JoSAA Insights. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
