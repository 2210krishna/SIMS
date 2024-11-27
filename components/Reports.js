import React from 'react';

function Reports() {
    const handleDownload = () => {
        alert('Report Downloaded');
    };

    return (
        <section id="reports">
            <h2>Generate Reports</h2>
            <button onClick={handleDownload}>Download Report</button>
        </section>
    );
}

export default Reports;
