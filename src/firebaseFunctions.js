// src/firebaseFunctions.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

/**
 * Adds a new hospital admin to Firebase Authentication and Firestore.
 * @param {Object} newAdminData - The data for the new hospital admin.
 * @param {string} newAdminData.email - The email of the new hospital admin.
 * @param {string} newAdminData.name - The name of the new hospital admin.
 * @param {string} newAdminData.hospitalId - The hospital ID for the new admin.
 */
const handleAddHospitalAdmin = async (newAdminData) => {
  const { email, name, hospitalId } = newAdminData;
  const defaultPassword = 'YourDefaultPassword123'; // Consider implementing a secure password policy in production

  try {
    // Create a new user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, defaultPassword);
    const uid = userCredential.user.uid;

    // Prepare user data to be stored in Firestore
    const userData = {
      uid, // Store the UID for reference
      name,
      email,
      role: 'hospital_admin',
      hospitalId,
      createdAt: new Date(),
    };

    // Add admin information to Firestore under the 'users' collection
    await setDoc(doc(db, 'users', uid), userData);

    console.log("New hospital admin added successfully!");
    alert("New hospital admin added successfully!"); // Notify the user of success
  } catch (error) {
    console.error('Failed to add Hospital Admin:', error);
    alert('Failed to add Hospital Admin: ' + error.message); // Provide feedback to the user
  }
};

export default handleAddHospitalAdmin;
