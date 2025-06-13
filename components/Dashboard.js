// Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Notifications from './Notifications'; 
import { getStudents } from '../services/studentService'; 

const Dashboard = ({ role, username, setRole }) => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentData = await getStudents();
                setStudents(studentData);
            } catch (error) {
                console.log('Failed to fetch students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleLogout = () => {
        setRole(null);
        navigate('/'); 
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="dashboard-header">
                    <h2>Dashboard</h2>
                </div>
                <div className="dashboard-buttons">
                    {role === 'Admin' && (
                        <>
                            <Link to="/student-records">
                                <button>View Student Records</button>
                            </Link>
                            <Link to="/register">
                                <button>Register New Student</button>
                            </Link>
                            <Link to="/generate-report">
                                <button>Generate Report</button>
                            </Link>
                        </>
                    )}
                    {role === 'Student' && (
                        <Link to="/student-details">
                            <button>View My Details</button>
                        </Link>
                    )}
                    <Link to="/about-us">
                        <button>About</button>
                    </Link>
                    <Notifications />
                    <button onClick={handleLogout}>Logout</button>
                </div>
                {/* Example to display students */}
                {role === 'Admin' && (
                    <div>
                        <h3>Student List</h3>
                        <ul>
                            {students.map(student => (
                                <li key={student.id}>{student.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <footer className="dashboard-footer">
                <p>&copy; 2024 Elite High School. All rights reserved.</p>
                <div className="footer-links">
                    <a href="mailto:contact@elitehighschool.com">Contact</a>
                    <a href="mailto:support@elitehighschool.com">Help</a>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
