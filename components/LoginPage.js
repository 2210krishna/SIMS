import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setRole, setUsername, students }) => {
    const [role, setLocalRole] = useState('');
    const [username, setUsernameState] = useState(''); 
    const [password, setPassword] = useState('');
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [showAboutInfo, setShowAboutInfo] = useState(false); 

    const navigate = useNavigate();

    const handleLogin = () => {
        if (role === 'Admin') {
            if (username !== 'admin' || password !== '123456') {
                alert('Invalid Admin credentials');
                return;
            }
        } else if (role === 'Student') {
            const student = students.find(student => student.name === username);
            if (!student || password !== `${student.name}123`) {
                alert('Invalid Student credentials');
                return;
            }
        } else {
            alert('Please select a role');
            return;
        }
    
        setRole(role);
        setUsername(username); 
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
        <div className="login-header">
                <button className="header-button" onClick={() => navigate('/')}>Home</button>
                <button className="header-button" onClick={() => setShowAboutInfo(true)}>About</button>
                <button className="header-button" onClick={() => setShowContactInfo(true)}>Contact</button>
                <button className="header-button" onClick={() => window.location = 'mailto:support@studentmanagement.com'}>Email</button>
            </div>            <div className="login-box">
                {showAboutInfo ? (
                    <div className="about-info">
                        <button className="back-button" onClick={() => setShowAboutInfo(false)}>Back</button>
                        <h2>About Student Info</h2>
                        <p>Welcome to Student Info, a comprehensive platform designed to manage and track student data effectively.</p>
                    </div>
                ) : (
                    <>
                        <h2>Login</h2>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="Student"
                                    checked={role === 'Student'}
                                    onChange={() => setLocalRole('Student')}
                                />
                                Student
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Admin"
                                    checked={role === 'Admin'}
                                    onChange={() => setLocalRole('Admin')}
                                />
                                Admin
                            </label>
                        </div>
                        <div>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsernameState(e.target.value)} // Update local username state
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={handleLogin}>Login</button>
                    </>
                )}
            </div>

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

export default LoginPage;
