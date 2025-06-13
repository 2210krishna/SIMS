import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import axios from 'axios'; // Import axios

const Notifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from db.json using axios
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:5000/notifications');
                setNotifications(response.data);
            } catch (error) {
                console.log('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []); // Empty dependency array to fetch data only once on component mount

    const toggleNotifications = () => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    };

    return (
        <div className="notifications">
            <button className="notification-btn" onClick={toggleNotifications}>
                <FaBell size={24} />
            </button>
            {isVisible && (
                <div className="notification-dropdown">
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.id}>{notification.message}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Notifications;
