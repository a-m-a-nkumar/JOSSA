import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import HeroSection from '../components/Home1';
import FeatureSection from '../components/Home2';
import ThirdSection from '../components/Home3';
import MeetTheTeam from '../components/Home4';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <HeroSection/>
            <FeatureSection/>
            <ThirdSection/>
            {/* <MeetTheTeam/> */}
            <Footer/>
            {/* Additional sections or components can be added here */}
        </div>
    );
}

export default Home;
