import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateReports = ({ students }) => {
    const navigate = useNavigate(); 

    const downloadCSV = () => {
        const csvRows = [];

        const headers = ['ID', 'Name', 'Age', 'Class', 'Phone Number', 'Blood Group', 'Place'];
        csvRows.push(headers.join(','));
        for (const student of students) {
            const values = [
                student.id, 
                student.name, 
                student.age, 
                student.class, 
                student.phoneNumber, 
                student.bloodGroup, 
                student.place
            ];
            csvRows.push(values.join(','));
        }

        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'students_report.csv';
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleBack = () => {
        navigate('/dashboard'); 
    };

    return (
        <div className="cont">
            <button onClick={downloadCSV} className="gen">Generate CSV Report</button>
            <br>
            </br>
            <button onClick={handleBack} className="back-button">Back to Dashboard</button>
        </div>
    );
};

export default GenerateReports;
