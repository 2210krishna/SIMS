import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import StudentRecords from './components/StudentRecords';
import RegistrationForm from './components/RegistrationForm';
import AboutUs from './components/AboutUs';
import GenerateReports from './components/GenerateReports';
import LoginPage from './components/LoginPage';
import StudentDetails from './components/StudentDetails';
import Home from './components/Home'; 
import './App.css';

function App() {
    const [students, setStudents] = useState([]);
    const [role, setRole] = useState(null);
    const [username, setUsername] = useState('');

    // Fetch student data from db.json on component mount
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudents();
    }, []); // Empty dependency array ensures this runs only once

    const addStudent = (newStudent) => {
        setStudents([...students, newStudent]);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/login" element={<LoginPage setRole={setRole} setUsername={setUsername} students={students} />} />
                    <Route path="/dashboard" element={role ? <Dashboard role={role} username={username} setRole={setRole} students={students}/> : <Navigate to="/" />} />
                    <Route path="/student-records" element={role ? <StudentRecords students={students} /> : <Navigate to="/" />} /> 
                    <Route path="/student-details" element={role === 'Student' ? <StudentDetails students={students} username={username} /> : <Navigate to="/" />} />
                    
                    {role === 'Admin' && (
                        <>
                            <Route path="/register" element={<RegistrationForm addStudent={addStudent} />} />
                            <Route path="/generate-report" element={<GenerateReports students={students} />} />
                        </>
                    )}
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
