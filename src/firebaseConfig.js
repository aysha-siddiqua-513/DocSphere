// // Import necessary functions from Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// // Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyD6DLebU4oLlfRwR26QEDUO9YgFJK9fcjg",
//   authDomain: "docsphere-3b99c.firebaseapp.com",
//   projectId: "docsphere-3b99c",
//   storageBucket: "docsphere-3b99c.appspot.com",
//   messagingSenderId: "93062721533",
//   appId: "1:93062721533:web:79f36968a2992f4d513394",
//   measurementId: "G-JVZ3SQJVHG"
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);       // Authentication service
// const db = getFirestore(app);    // Firestore database service

// // Export Firebase services for use in other parts of the app
// export { auth, db };

// // Function to add new user registration to Firestore
// export const registerUserInFirestore = async (userData) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       name: userData.name,
//       email: userData.email,
//       role: userData.role,
//       timestamp: new Date(),
//     });
//     console.log("User registered with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
// Import necessary functions from Firebase SDKs
// Import necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD6DLebU4oLlfRwR26QEDUO9YgFJK9fcjg",
  authDomain: "docsphere-3b99c.firebaseapp.com",
  projectId: "docsphere-3b99c",
  storageBucket: "docsphere-3b99c.appspot.com",
  messagingSenderId: "93062721533",
  appId: "1:93062721533:web:79f36968a2992f4d513394",
  measurementId: "G-JVZ3SQJVHG"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);       // Authentication service
const db = getFirestore(app);    // Firestore database service

// Export Firebase services for use in other parts of the app
export { auth, db };

// Function to add new user registration to Firestore

export const registerUserInFirestore = async (userData) => {
  try {
    // Get the user ID from Firebase Authentication
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    if (!userId) {
      console.error("User not authenticated.");
      return;
    }

    // Handle doctor role registration
    if (userData.role === 'doctor') {
      await setDoc(doc(db, "doctors", userId), {
        name: userData.name,
        email: userData.email,
        licenseNumber: userData.licenseNumber,
        role: userData.role,
        timestamp: new Date(),
      });
      console.log("Doctor registered with ID: ", userId);
    }
    // Handle admin role registration
    else if (userData.role === 'admin') {
      await setDoc(doc(db, "admins", userId), {
        name: userData.name,
        email: userData.email,
        hospitalId: userData.hospitalId,
        role: userData.role,
        timestamp: new Date(),
      });
      console.log("Admin registered with ID: ", userId);
    }
    // Handle general user role registration
    else {
      await setDoc(doc(db, "users", userId), {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        timestamp: new Date(),
      });
      console.log("User registered with ID: ", userId);
    }
  } catch (e) {
    console.error("Error adding document to Firestore:", e.message);
  }
};
