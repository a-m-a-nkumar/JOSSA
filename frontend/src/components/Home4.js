// components/MeetTheTeam.js

import React from 'react';
import rahulAvatar from '../assets/rahul.png';
import mohit from '../assets/mohit.png';
import aman from '../assets/aman.png'
import umang from '../assets/umang.png'

const teamMembers = [
    {
        name: "Rahul Kumar",
        role: "Web developer",
        avatar: rahulAvatar,
        socialMedia: {
            twitter: "https://x.com/rahulku02411763",
            linkedin: "https://www.linkedin.com/in/rahul-kumar-436179239/",
            github: "https://github.com/im-sparrow05"
        }
    },
    {
        name: "Aman Kumar",
        role: "App developer",
        avatar: aman,
        socialMedia: {
            twitter: "https://twitter.com/amankumar",
            linkedin: "https://www.linkedin.com/in/amankumar",
            github: "https://github.com/amankumar"
        }
    },
    {
        name: "Mohit Raj",
        role: "Data Analyst",
        avatar: mohit, 
        socialMedia: {
            twitter: "https://twitter.com/mohitraj",
            linkedin: "https://www.linkedin.com/in/mohitraj",
            github: "https://github.com/mohitraj"
        }
    },
    {
        name: "Umang Udbhav",
        role: "Product Manager",
        avatar: umang,
        socialMedia: {
            twitter: "https://twitter.com/umangudbhav",
            linkedin: "https://www.linkedin.com/in/umangudbhav",
            github: "https://github.com/umangudbhav"
        }
    }
];

const MeetTheTeam = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600">Get to know the talented individuals behind JoSAA Insights.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
                            <img className="rounded-full mb-4" src={member.avatar} alt={member.name} style={{ width: '150px', height: '150px' }} />
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.role}</p>
                            <div className="flex space-x-4">
                                <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.46 4.73c-.74.33-1.54.55-2.37.65a4.12 4.12 0 0 0 1.81-2.28c-.8.47-1.68.81-2.62 1a4.1 4.1 0 0 0-7 3.73c-.34 0-.68.02-1.02.05a11.65 11.65 0 0 1-8.47-4.3c-.36.62-.56 1.33-.56 2.1 0 1.45.74 2.73 1.86 3.48a4.1 4.1 0 0 1-1.86-.5v.05c0 2.03 1.45 3.72 3.37 4.1a4.18 4.18 0 0 1-1.84.07c.52 1.6 2.03 2.77 3.8 2.8a8.36 8.36 0 0 1-5.03 1.72c-.32 0-.63-.02-.94-.06a11.73 11.73 0 0 0 6.32 1.84c7.57 0 11.73-6.28 11.73-11.73 0-.18 0-.35-.01-.53a8.36 8.36 0 0 0 2.06-2.13c-.75.33-1.56.55-2.4.65a4.16 4.16 0 0 0 1.81-2.28"></path>
                                    </svg>
                                </a>
                                <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                         <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                </a>
                                <a href={member.socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.174 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.876-.013-1.719-2.782.605-3.37-1.345-3.37-1.345-.455-1.155-1.112-1.464-1.112-1.464-.908-.62.068-.608.068-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.527 2.34 1.087 2.91.83.09-.645.35-1.087.636-1.338-2.23-.255-4.574-1.115-4.574-4.953 0-1.096.39-1.988 1.03-2.688-.103-.256-.448-1.274.098-2.655 0 0 .845-.27 2.76 1.03.8-.223 1.654-.334 2.505-.338.85.004 1.705.115 2.505.338 1.915-1.3 2.76-1.03 2.76-1.03.548 1.381.203 2.399.1 2.655.64.7 1.03 1.592 1.03 2.688 0 3.847-2.348 4.695-4.584 4.945.36.31.68.922.68 1.858 0 1.34-.012 2.419-.012 2.75 0 .27.18.585.688.485 3.968-1.316 6.832-5.072 6.832-9.49C22 6.477 17.523 2 12 2z" clip-rule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MeetTheTeam;
