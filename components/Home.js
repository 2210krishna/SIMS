// Home.js
import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import studentImage from '../images/1604963783600.avif'; 
const Home = () => {
    const [showAboutInfo, setShowAboutInfo] = useState(false);
    const [showContactInfo, setShowContactInfo] = useState(false);

    return (
        <div className="home-container">
            <h1>Welcome to Students Info</h1>
            <p>Your journey to knowledge begins here!</p>
            <div className="top-buttons">
                <Link to="/login">
                    <button className="header-button">Login</button>
                </Link>
                <button className="header-button" onClick={() => setShowAboutInfo(true)}>About</button>
                <button className="header-button" onClick={() => setShowContactInfo(true)}>Contact</button>
                <button className="header-button" onClick={() => window.location = 'mailto:support@studentmanagement.com'}>Email</button>
            </div>

            <div className="media">
                <img
                    src={studentImage} 
                    alt="School"
                    className="home-image"
                />
            </div>

            {showAboutInfo && (
                <div className="about-info">
                    <button className="back-button" onClick={() => setShowAboutInfo(false)}>Back</button>
                    <h2>About Student Info</h2>
                    <p>Welcome to Student Info, a comprehensive platform designed to manage and track student data effectively.</p>
                </div>
            )}

            {showContactInfo && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowContactInfo(false)}>&times;</span>
                        <h3>Customer Care</h3>
                        <p>For any inquiries, please contact us at +1 234 567 890</p>
                        <button className="ok-button" onClick={() => setShowContactInfo(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

