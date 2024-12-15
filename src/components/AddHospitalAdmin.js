// src/components/AddHospitalAdmin.js

import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Import the Firestore database
import { collection, addDoc } from 'firebase/firestore';

const AddHospitalAdmin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddAdmin = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                name: name,
                email: email,
                role: 'hospitalAdmin', // Specify the role
                createdAt: new Date(),
            });
            console.log("Document written with ID: ", docRef.id);
            // Clear form fields or provide feedback to the user
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <form onSubmit={handleAddAdmin}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Admin Name" 
                required 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Admin Email" 
                required 
            />
            <button type="submit">Add Hospital Admin</button>
        </form>
    );
};

export default AddHospitalAdmin;
