import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Import chart components from recharts

const StudentDetails = ({ students, username }) => {
    const navigate = useNavigate();
    const student = students.find(student => student.name.toLowerCase() === username.toLowerCase());

    if (!student) {
        return <div>Student not found</div>;
    }

    // Safely handle student.attendance, check if it's defined
    const attendanceValue = student.attendance ? parseInt(student.attendance.replace('%', '')) : 0;

    const data = [
        { name: 'Age', value: student.age },
        { name: 'Class', value: parseInt(student.class) },
        { name: 'Attendance', value: attendanceValue },
    ];

    return (
        <div className="student-details">
            <h2>{student.name}'s Details</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <div className="additional-info">
                <h3>Additional Information</h3>
                <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
                <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
                <p><strong>Place:</strong> {student.place}</p>
            </div>
            <button className="back-button" onClick={() => navigate('/dashboard')}>Back</button>
        </div>
    );
};

export default StudentDetails;
