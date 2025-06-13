import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';

const StudentRecords = ({ students, setStudents }) => {
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [editingStudentId, setEditingStudentId] = useState(null);
    const [updatedStudentData, setUpdatedStudentData] = useState({});
    const navigate = useNavigate();

    const handleSearch = (query) => {
        if (query) {
            setFilteredStudents(
                students.filter(student =>
                    student.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredStudents(students);
        }
    };

    const handleEdit = (id) => {
        setEditingStudentId(id);
        const studentToEdit = students.find(student => student.id === id);
        setUpdatedStudentData(studentToEdit);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedStudentData({
            ...updatedStudentData,
            [name]: value,
        });
    };

    const handleUpdate = async (id) => {
        const confirmUpdate = window.confirm('Are you sure you want to update this student\'s details?');
        if (confirmUpdate) {
            try {
                if (updatedStudentData.id !== id) {
                    await axios.delete(`http://localhost:5000/students/${id}`);
                    await axios.post('http://localhost:5000/students', updatedStudentData);
                } else {
                    await axios.put(`http://localhost:5000/students/${id}`, updatedStudentData);
                }
                    setStudents(
                    students.map(student =>
                        student.id === id ? updatedStudentData : student
                    )
                );
                setFilteredStudents(
                    filteredStudents.map(student =>
                        student.id === id ? updatedStudentData : student
                    )
                );
                setEditingStudentId(null); 
                alert('Student details updated successfully!'); 
            } catch (error) {
                console.error('Error updating student:', error);
            }
        }
    };
    

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this student?');
        if (confirmDelete) {
            try {
                
                await axios.delete(`http://localhost:5000/students/${id}`);

                const updatedStudents = students.filter(student => student.id !== id);
                setStudents(updatedStudents);
                    if (filteredStudents.length < students.length) {
                    const updatedFilteredStudents = updatedStudents.filter(student =>
                        student.name.toLowerCase().includes(filteredStudents[0]?.name.toLowerCase() || '')
                    );
                    setFilteredStudents(updatedFilteredStudents);
                } else {
                    setFilteredStudents(updatedStudents);
                }
    
                alert('Student deleted successfully!'); 
            } catch (error) {
                console.error('Error deleting student:', error);
            }
        }
    };
    
    
    

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <div className="student-records-container">
            <button onClick={handleBack} className="back-button">Back to Dashboard</button>
            <h2>Student Records</h2>
            <SearchBar onSearch={handleSearch} />
            <ul className="student-records-list">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map(student => (
                        <li key={student.id} className="student-record">
                            <div>
                                <strong>ID:</strong>
                                <input
                                    type="text"
                                    name="id"
                                    value={editingStudentId === student.id ? updatedStudentData.id : student.id}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div>
                                <strong>Name:</strong>
                                <input
                                    type="text"
                                    name="name"
                                    value={editingStudentId === student.id ? updatedStudentData.name : student.name}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id} 
                                />
                            </div>
                            <div>
                                <strong>Age:</strong>
                                <input
                                    type="text"
                                    name="age"
                                    value={editingStudentId === student.id ? updatedStudentData.age : student.age}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div>
                                <strong>Class:</strong>
                                <input
                                    type="text"
                                    name="class"
                                    value={editingStudentId === student.id ? updatedStudentData.class : student.class}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div>
                                <strong>Attendance:</strong>
                                <input
                                    type="text"
                                    name="attendance"
                                    value={editingStudentId === student.id ? updatedStudentData.attendance : student.attendance}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div>
                                <strong>Phone Number:</strong>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={editingStudentId === student.id ? updatedStudentData.phoneNumber : student.phoneNumber}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id} 
                                />
                            </div>
                            <div>
                                <strong>Blood Group:</strong>
                                <input
                                    type="text"
                                    name="bloodGroup"
                                    value={editingStudentId === student.id ? updatedStudentData.bloodGroup : student.bloodGroup}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div>
                                <strong>Place:</strong>
                                <input
                                    type="text"
                                    name="place"
                                    value={editingStudentId === student.id ? updatedStudentData.place : student.place}
                                    onChange={handleChange}
                                    disabled={editingStudentId !== student.id}  
                                />
                            </div>
                            <div className="actions">
                                {editingStudentId === student.id ? (
                                    <button onClick={() => handleUpdate(student.id)} className="update-button">Update</button>
                                ) : (
                                    <button onClick={() => handleEdit(student.id)} className="edit-button">Edit</button>
                                )}
                                <button onClick={() => handleDelete(student.id)} className="delete-button">Delete</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No students found</li>
                )}
            </ul>
        </div>
    );
};

export default StudentRecords;
