import React, { useEffect } from 'react';
import './styles.css'; // Import the CSS file
import image1 from './assets/analysis.png';
import image2 from './assets/analysis(1).png';
import image3 from './assets/analysis(2).png';
import image4 from './assets/analysis(3).png';
import image5 from './assets/calendar.png';
import image6 from './assets/predictive-chart.png';
import image7 from './assets/research.png';
import image8 from './assets/umang.jpg';
import image9 from './assets/aman.jpg';
import image10 from './assets/rahul.jpg';
import image11 from './assets/mohit.jpg';
import linkedin from './assets/linkedin.png';
import github from './assets/github-sign.png';
import insta from './assets/instagram.png';
const HomePage = () => {
  useEffect(() => {
    const interval1 = setInterval(() => {
        const column1 = document.querySelector('.image-column1');
        column1.scrollBy({
          top: column1.offsetHeight,
          left: 0,
          behavior: 'smooth'
        });
  
        if (column1.scrollTop >= column1.scrollHeight - column1.clientHeight) {
          setTimeout(() => {
            column1.scrollTo(0, 0);
          }, 1000);
        }
      }, 3000);
  
      const interval2 = setInterval(() => {
        const column2 = document.querySelector('.image-column2');
        column2.scrollBy({
          top: column2.offsetHeight,
          left: 0,
          behavior: 'smooth'
        });
  
        if (column2.scrollTop >= column2.scrollHeight - column2.clientHeight) {
          setTimeout(() => {
            column2.scrollTo(0, 0);
          }, 10000);
        }
      }, 4000);
  
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    }, []);

  return (
    <div style={styles.pageContainer}>
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to the Jossa Analysis Portal</h1>
        <p style={styles.subHeading}>Explore trends, predictions, and insights for college admission</p>
      </div>
      <div style={styles.imageWrapper}>
        <div className="image-column1" style={styles.imageColumn}>
          <img src={image1} style={styles.image} />
          <img src={image2} alt="Description 2" style={styles.image} />
          <img src={image3} alt="Description 3" style={styles.image} />
          <img src={image4} alt="Description 4" style={styles.image} />
        </div>
        <div className="image-column2" style={styles.imageColumn}>
          <img src={image2} alt="Description 1" style={styles.image} />
          <img src={image1} alt="Description 2" style={styles.image} />
          <img src={image4} alt="Description 3" style={styles.image} />
          <img src={image3} alt="Description 4" style={styles.image} />
        </div>
      </div>
    </div>
    <div style={styles.section}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Unlock your future with Jossa Analysis Portal</h1>
          <p style={styles.subHeading}>Here you can access powerful tools and insights to make informed decisions about college education</p>
        </div>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img src={image5} alt="Card 1" style={styles.cardImage} />
            <p style={styles.cardName}>College Predictor</p>
            <p style={styles.cardDescription}>Predict your chances of getting into your dream college based on your rank</p>
          </div>
          <div style={styles.card}>
            <img src={image6} alt="Card 2" style={styles.cardImage} />
            <p style={styles.cardName}>Yearly Trends</p>
            <p style={styles.cardDescription}>Explore trends in institute , program and branch preference over the years</p>
          </div>
          <div style={styles.card}>
            <img src={image7} alt="Card 3" style={styles.cardImage} />
            <p style={styles.cardName}>Round Trends</p>
            <p style={styles.cardDescription}>Analyze trends in institute ,program and branch preferences over the rounds </p>
          </div>
        </div>
      </div>
      <div style={styles.section}>
      <h2 style={styles.heading}>Meet our team</h2>
      <p style={styles.subHeading}>Get to know the talented individuals behind our portal</p>
      <div style={styles.teamGrid}>
        <div style={styles.member}>
          <img src={image8} alt="Team Member 1" style={styles.memberImage} />
          <p style={styles.memberName}>Umang Udbhav</p>
          <div style={styles.socialIcons}>
            <a href="linkedin-link"><img src={linkedin} alt="LinkedIn" style={styles.icon} /></a>
            <a href="github-link"><img src={github} alt="GitHub" style={styles.icon} /></a>
            <a href="insta-link"><img src={insta} alt="Instagram" style={styles.icon} /></a>
          </div>
        </div>
        <div style={styles.member}>
          <img src={image9} alt="Team Member 1" style={styles.memberImage} />
          <p style={styles.memberName}>Aman Kumar</p>
          <div style={styles.socialIcons}>
            <a href="linkedin-link"><img src={linkedin} alt="LinkedIn" style={styles.icon} /></a>
            <a href="github-link"><img src={github} alt="GitHub" style={styles.icon} /></a>
            <a href="insta-link"><img src={insta} alt="Instagram" style={styles.icon} /></a>
          </div>
        </div>
        <div style={styles.member}>
          <img src={image10} alt="Team Member 1" style={styles.memberImage} />
          <p style={styles.memberName}>Rahul Kumar</p>
          <div style={styles.socialIcons}>
            <a href="linkedin-link"><img src={linkedin} alt="LinkedIn" style={styles.icon} /></a>
            <a href="github-link"><img src={github} alt="GitHub" style={styles.icon} /></a>
            <a href="insta-link"><img src={insta} alt="Instagram" style={styles.icon} /></a>
          </div>
        </div>
        <div style={styles.member}>
          <img src={image11} alt="Team Member 1" style={styles.memberImage} />
          <p style={styles.memberName}>Mohit Raj</p>
          <div style={styles.socialIcons}>
            <a href="linkedin-link"><img src={linkedin} alt="LinkedIn" style={styles.icon} /></a>
            <a href="github-link"><img src={github} alt="GitHub" style={styles.icon} /></a>
            <a href="insta-link"><img src={insta} alt="Instagram" style={styles.icon} /></a>
          </div>
        </div>
        {/* Repeat similar structure for other team members */}
      </div>
    </div>
    </div>
    
  );
};

const styles = {
    pageContainer: {
        padding: '0 40px 0 0', // Equal padding from left and right
      },
    section: {
        padding: '10px 10px 100px 10px',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      width: '100vw',
      overflowY: 'hidden',
      padding: '10px 10px 10px 10px',
      backgroundColor: 'white',
      color: 'black',
      boxSizing: 'border-box'
    },
    textContainer: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
      padding: '20px',
      alignSelf: 'stretch', // Stretch to match height of image container
      alignItems: 'center', // Center horizontally
    },
    heading: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center' // Center text horizontally
    },
    subHeading: {
      fontSize: '20px',
      marginTop: '5px',
      color: 'black',
      textAlign: 'center' // Center text horizontally
    },
    imageWrapper: {
      flex: '1',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '20px'
    },
    imageColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'hidden',
      padding: '10px'
    },
    image: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around'
      },
    card: {
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      },
      cardImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px 10px 0 0',
        marginBottom: '10px'
      },
      cardName: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px'
      },
      cardDescription: {
        fontSize: '16px'
      },
      teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
        justifyContent: 'center'
      },
      member: {
        textAlign: 'center'
      },
      memberImage: {
        width: '200px',
        height: '200px',
        // objectFit: 'cover',
        borderRadius: '10px',
        marginBottom: '10px'
      },
      memberName: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px'
      },
      socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
      },
      icon: {
        width: '30px',
        height: '30px',
        margin: '0 10px',
        cursor: 'pointer'
      }

  };


export default HomePage;
