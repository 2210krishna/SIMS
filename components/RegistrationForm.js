import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = ({ addStudent }) => {
    const [id, setId] = useState(''); // Add id state
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [place, setPlace] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!nameRegex.test(name)) {
            setError('Name must contain only characters and spaces.');
            return;
        }

        if (!id || !name || !age || !studentClass || !phoneNumber || !bloodGroup || !place) {
            setError('All fields are required.');
            return;
        }

        if (age < 4 || age > 18) {
            setError('Age must be between 4 and 18.');
            return;
        }

        if (studentClass < 1 || studentClass > 12) {
            setError('Class must be between 1 and 12.');
            return;
        }

        if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            setError('Phone number must be exactly 10 digits.');
            return;
        }

        // If all validations pass, prepare the student object
        const newStudent = {
            id: parseInt(id, 10), // Use the id provided by the user
            name,
            age: parseInt(age, 10),
            class: parseInt(studentClass, 10),
            phoneNumber,
            bloodGroup,
            place,
        };

        try {
            // Send the POST request to json-server
            await axios.post('http://localhost:5000/students', newStudent);

            // Optionally, you can use addStudent to update the frontend (if you're managing state locally)
            addStudent(newStudent);

            // Reset form
            setId('');
            setName('');
            setAge('');
            setStudentClass('');
            setPhoneNumber('');
            setBloodGroup('');
            setPlace('');
            setError('');
            
            // Navigate back to the dashboard after successful registration
            navigate('/dashboard');
        } catch (error) {
            console.error('Error registering student:', error);
            setError('Failed to register student. Please try again.');
        }
    };

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <div className="registration-form">
            <button onClick={handleBack} className="back-button">Back to Dashboard</button>
            <h2>Register New Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID (number)</label>
                    <input
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Class</label>
                    <input
                        type="number"
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        maxLength="10"
                        required
                    />
                </div>
                <div>
                    <label>Blood Group</label>
                    <input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Place</label>
                    <input
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
