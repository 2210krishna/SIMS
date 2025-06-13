import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate(); 

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <div className="about-us">
            <h2>About Our School</h2>
            <p>
                Welcome to Elite high school, a place dedicated to nurturing young minds and fostering a love for learning...
            </p>
            <p>
                At Elite high school, we offer a range of programs and extracurricular activities designed to cater to the diverse interests and needs of our students. Our experienced faculty and staff are dedicated to helping each student achieve their full potential.
            </p>
            <p>
                We believe in the importance of community and collaboration, and we work closely with parents and guardians to support the holistic development of our students.
            </p>
            <p>
                For more information about our school, please feel free to contact us or visit our website.
            </p>
            <button onClick={handleBack} className="back-button">Back to Dashboard</button>
        </div>
    );
};

export default AboutUs;
