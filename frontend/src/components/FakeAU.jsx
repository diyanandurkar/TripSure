import React from 'react';
import bg1 from '../../public/bg1.jpg'
import PackData from '../components/PackData'
import Navbar from '../components/Navbar';
import NavbarTwo from "../components/NavbarTwo";
import Footer from './Footer';
import ContactUs from './ContactUs';


const FakeAU = () => {
    return (
        <>
        <Navbar/>

            <div style={styles.container}>
                {/* <img src={bg1} alt="" /> */}
                {/* Hero Section */}
                <section style={styles.heroSection}>
                    {/* <h1 className='text-3xl md:text-5xl' style={styles.heroHeader}>Welcome to TripSure</h1> */}
                    <p style={styles.heroText}>
                        Your journey starts here. Discover the world with the guidance of travel enthusiasts who know how to turn dreams into reality.
                    </p>
                </section>

                {/* Founders Section */}
                <section style={styles.foundersSection}>
                    <h2 style={styles.subHeader}>Meet Our Founders</h2>
                    <div style={styles.foundersContainer}>
                        <div style={styles.founder}>
                            <img src={bg1} className='hover:scale-105 duration-1000 ease-in-out' alt="Founder 1" style={styles.founderImage} />
                            <h3 style={styles.founderName}>Jash Mistry</h3>
                            <p style={styles.founderRole}>Co-Founder & CEO</p>
                            <p style={styles.founderBio}>
                                Alice is a seasoned traveler with over 15 years of experience in the tourism industry. Her love for adventure and her knack for finding hidden gems around the world led her to create TripSure. Alice’s vision is to inspire others to explore the world through uniquely crafted journeys.
                            </p>
                        </div>
                        <div style={styles.founder}>
                            <img src={bg1} className='hover:scale-105 duration-1000 ease-in-out' alt="Founder 2" style={styles.founderImage} />
                            <h3 style={styles.founderName}>Kenil Ladd</h3>
                            <p style={styles.founderRole}>Co-Founder & Chief Travel Officer</p>
                            <p style={styles.founderBio}>
                                David’s expertise lies in curating bespoke travel experiences that cater to individual tastes. With a background in luxury travel and a passion for cultural immersion, David ensures that every TripSure itinerary is both personalized and memorable.
                            </p>
                        </div>

                    </div>
                    <div style={styles.foundersContainer}>
                        <div style={styles.founder}>
                            <img src={bg1} className='hover:scale-105 duration-1000 ease-in-out' alt="Founder 1" style={styles.founderImage} />
                            <h3 style={styles.founderName}>Diya Nandulkar</h3>
                            <p style={styles.founderRole}>Co-Founder & CEO</p>
                            <p style={styles.founderBio}>
                                Alice is a seasoned traveler with over 15 years of experience in the tourism industry. Her love for adventure and her knack for finding hidden gems around the world led her to create TripSure. Alice’s vision is to inspire others to explore the world through uniquely crafted journeys.
                            </p>
                        </div>
                        <div style={styles.founder}>
                            <img src={bg1} className='hover:scale-105 duration-1000 ease-in-out' alt="Founder 2" style={styles.founderImage} />
                            <h3 style={styles.founderName}>Riddhi</h3>
                            <p style={styles.founderRole}>Co-Founder & Chief Travel Officer</p>
                            <p style={styles.founderBio}>
                                David’s expertise lies in curating bespoke travel experiences that cater to individual tastes. With a background in luxury travel and a passion for cultural immersion, David ensures that every TripSure itinerary is both personalized and memorable.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section style={styles.philosophySection}>
                    <h2 style={styles.subHeader}>Our Philosophy</h2>
                    <p style={styles.paragraph}>
                        At TripSure, we believe travel is more than just visiting new places—it's about creating stories that last a lifetime. We are committed to offering our clients experiences that go beyond the ordinary, with a focus on personalization, sustainability, and cultural authenticity.
                    </p>
                </section>

                {/* Our Values Section */}
                <section style={styles.valuesSection}>
                    <h2 style={styles.subHeader}>Our Values</h2>
                    <ul style={styles.list}>
                        <li><strong>Personalization:</strong> We tailor each journey to the individual needs and desires of our clients, ensuring a unique and fulfilling experience.</li>
                        <li><strong>Sustainability:</strong> We are dedicated to promoting eco-friendly travel options and supporting local communities, making sure that tourism has a positive impact.</li>
                        <li><strong>Integrity:</strong> Honesty and transparency are at the core of everything we do, from planning trips to interacting with our clients.</li>
                    </ul>
                </section>

                {/* Testimonials Section */}
                <section className='' style={styles.testimonialsSection}>
                    <h2 style={styles.subHeader}>What Our Clients Say</h2>
                    <div style={styles.testimonial}>
                        <p style={styles.testimonialText}>
                            "TripSure planned the most amazing vacation for us! Every detail was perfect, and we felt truly taken care of from start to finish."
                        </p>
                        <p style={styles.testimonialAuthor}>- Sarah & Mike, New York</p>
                    </div>
                    <div style={styles.testimonial}>
                        <p style={styles.testimonialText}>
                            "Thanks to TripSure, our family trip to Japan was an unforgettable experience. The itinerary was perfectly balanced between sightseeing and relaxation."
                        </p>
                        <p style={styles.testimonialAuthor}>- The Watson Family, Texas</p>
                    </div>
                </section>
            </div>
            <Footer/>   

            </>

    );
};

const styles = {
    container: {
        opacity: '100%',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        padding: '20px',
        color: '#333',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    heroSection: {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '',
        borderRadius: '8px',
        marginBottom: '40px',
    },
    heroHeader: {
       
        color: 'white',
        marginBottom: '10px',
    },
    heroText: {
        fontSize: '18px',
        color: 'grey',
    },
    foundersSection: {
        marginBottom: '40px',
    },
    subHeader: {
        fontSize: '28px',
        marginBottom: '20px',
        color: 'white',
    },
    foundersContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    founder: {
        textAlign: 'center',
        maxWidth: '300px',
        marginBottom: '20px',
    },
    founderImage: {
        borderRadius: '0%',
        width: '300px',
        height: '200px',
        marginBottom: '15px',
    },
    founderName: {
        fontSize: '22px',
        marginBottom: '5px',
        color: 'white',
    },
    founderRole: {
        fontSize: '16px',
        marginBottom: '10px',
        color: '#7F8C8D',
    },
    founderBio: {
        fontSize: '16px',
        color: 'grey',
        padding: '0 10px',
    },
    philosophySection: {
        marginBottom: '40px',
    },
    paragraph: {
        fontSize: '18px',
        color: '#7F8C8D',
        marginBottom: '15px',
    },
    valuesSection: {
        marginBottom: '40px',
    },
    list: {
        paddingLeft: '20px',
        fontSize: '18px',
        color: '#7F8C8D',
        marginBottom: '15px',
    },
    testimonialsSection: {
        border: '2px solid grey',
        padding: '20px',
        borderRadius: '8px',
    },
    testimonial: {
        marginBottom: '20px',
    },
    testimonialText: {
        fontSize: '18px',
        fontStyle: 'italic',
        color: '#555',
    },
    testimonialAuthor: {
        fontSize: '16px',
        color: 'darkgrey',
        textAlign: 'right',
    },

};

export default FakeAU;
