// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { auth, db } from '../firebaseConfig';
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { doc, getDoc } from "firebase/firestore";

// // const AdminLogin = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleMainAdminAuth = async () => {
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;

// //       // Fetch user data from Firestore
// //       const docRef = doc(db, 'users', 'uid_mainAdmin'); // Ensure this ID is correct
// //       const docSnap = await getDoc(docRef);

// //       console.log('User from Firebase Auth:', user);
// //       console.log('Fetched Document:', docSnap.data());

// //       // Check if the document exists and validate email and role
// //       if (docSnap.exists()) {
// //         const userData = docSnap.data();
// //         console.log('Email from Firestore:', userData.email);
// //         console.log('Role from Firestore:', userData.role);

// //         if (userData.email === email && userData.role === 'main_admin') {
// //           console.log('Login successful! Redirecting...');
// //           navigate('/main-admin-dashboard'); // Redirect to the Main Admin Dashboard
// //         } else {
// //           setErrorMessage('Unauthorized access. Please check your credentials.');
// //         }
// //       } else {
// //         setErrorMessage('No user found with this email.');
// //       }
// //     } catch (error) {
// //       setErrorMessage('Error during main admin authentication: ' + error.message); // Log specific error
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     handleMainAdminAuth();
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           type="email" 
// //           value={email} 
// //           onChange={(e) => setEmail(e.target.value)} 
// //           placeholder="Email" 
// //           required 
// //         />
// //         <input 
// //           type="password" 
// //           value={password} 
// //           onChange={(e) => setPassword(e.target.value)} 
// //           placeholder="Password" 
// //           required 
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //       {errorMessage && <p>{errorMessage}</p>} {/* Display error messages */}
// //     </div>
// //   );
// // };

// // export default AdminLogin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleMainAdminAuth = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Fetch user data from Firestore
//       const docRef = doc(db, 'users', 'uid_mainAdmin'); // Ensure this ID is correct
//       const docSnap = await getDoc(docRef);

//       console.log('User from Firebase Auth:', user);
//       console.log('Fetched Document:', docSnap.data());

//       // Check if the document exists and validate email and role
//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         console.log('Email from Firestore:', userData.email);
//         console.log('Role from Firestore:', userData.role);

//         if (userData.email === email && userData.role === 'main_admin') {
//           console.log('Login successful! Redirecting...');
//           navigate('/main-admin-dashboard'); // Redirect to the Main Admin Dashboard
//         } else {
//           setErrorMessage('Unauthorized access. Please check your credentials.');
//         }
//       } else {
//         setErrorMessage('No user found with this email.');
//       }
//     } catch (error) {
//       setErrorMessage('Error during main admin authentication: ' + error.message); // Log specific error
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleMainAdminAuth();
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.heading}>Admin Login</h2>
//         <input 
//           type="email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           placeholder="Email" 
//           required 
//           style={styles.input}
//         />
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Password" 
//           required 
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//       {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Display error messages */}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f0f2f5',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '2rem',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     width: '300px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '1.5rem',
//     color: '#333',
//     marginBottom: '1.5rem',
//   },
//   input: {
//     padding: '0.75rem',
//     margin: '0.5rem 0',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     outline: 'none',
//   },
//   button: {
//     padding: '0.75rem',
//     margin: '1rem 0',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   },
//   errorMessage: {
//     color: '#f44336',
//     marginTop: '1rem',
//     fontSize: '0.9rem',
//   },
// };

// export default AdminLogin;
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleMainAdminAuth = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user data from Firestore
      const docRef = doc(db, 'users', 'uid_mainAdmin'); // Ensure this ID is correct
      const docSnap = await getDoc(docRef);

      // Check if the document exists and validate email and role
      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData.email === email && userData.role === 'main_admin') {
          navigate('/main-admin-dashboard'); // Redirect to the Main Admin Dashboard
        } else {
          setErrorMessage('Unauthorized access. Please check your credentials.');
        }
      } else {
        setErrorMessage('No user found with this email.');
      }
    } catch (error) {
      setErrorMessage('Error during main admin authentication: ' + error.message);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(/admin-background.jpg)', // Customize your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Login
          </Typography>
          <Box component="form" onSubmit={handleMainAdminAuth} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
