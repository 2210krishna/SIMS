// src/services/studentService.js
import axios from 'axios';

export const getStudents = async () => {
    try {
        const response = await axios.get("http://localhost:5000/students"); // Ensure the correct URL
        return response.data; // Adjust based on your API response structure
    } catch (error) {
        console.log('Error fetching students:', error);
        throw error; // Re-throw the error for further handling
    }
};
