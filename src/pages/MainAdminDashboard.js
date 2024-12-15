// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const MainAdminDashboard = () => {
// // //   const [adminEmail, setAdminEmail] = useState('');
// // //   const [adminName, setAdminName] = useState('');
// // //   const [hospitalId, setHospitalId] = useState('');
// // //   const [hospitalAdmins, setHospitalAdmins] = useState([]);
// // //   const [errorMessage, setErrorMessage] = useState('');
// // //   const [successMessage, setSuccessMessage] = useState('');
// // //   const [editingAdmin, setEditingAdmin] = useState(null); // Track which admin is being edited

// // //   useEffect(() => {
// // //     // Fetch all hospital admins on component mount
// // //     const fetchAdmins = async () => {
// // //       try {
// // //         const response = await axios.get('http://localhost:5000/get-hospital-admins');
// // //         setHospitalAdmins(response.data);
// // //       } catch (error) {
// // //         console.error('Failed to fetch hospital admins:', error);
// // //       }
// // //     };

// // //     fetchAdmins();
// // //   }, []);

// // //   const handleAddAdmin = async () => {
// // //     const newAdminData = {
// // //       email: adminEmail,
// // //       name: adminName,
// // //       hospitalId: hospitalId,
// // //       password: 'YourDefaultPassword123', // Change as needed
// // //     };

// // //     try {
// // //       const response = await axios.post('http://localhost:5000/add-hospital-admin', newAdminData);
// // //       setSuccessMessage(response.data); // Confirm success message
// // //       setErrorMessage(''); // Clear any previous errors
// // //       setHospitalAdmins([...hospitalAdmins, { ...newAdminData, id: `uid_${Date.now()}` }]); // Update local state
// // //       resetForm();
// // //     } catch (error) {
// // //       console.error('Failed to add Hospital Admin:', error); // Log the full error object
// // //       setErrorMessage('Failed to add Hospital Admin: ' + (error.response?.data || error.message)); // Display error to user
// // //       setSuccessMessage(''); // Clear any previous success messages
// // //     }
// // //   };

// // //   const handleEditAdmin = (admin) => {
// // //     setAdminEmail(admin.email);
// // //     setAdminName(admin.name);
// // //     setHospitalId(admin.hospitalId);
// // //     setEditingAdmin(admin.id); // Set the admin being edited
// // //   };

// // //   const handleUpdateAdmin = async () => {
// // //     const updatedAdminData = {
// // //       email: adminEmail,
// // //       name: adminName,
// // //       hospitalId: hospitalId,
// // //     };

// // //     try {
// // //       const response = await axios.put(`http://localhost:5000/update-hospital-admin/${editingAdmin}`, updatedAdminData);
// // //       setSuccessMessage(response.data);
// // //       setErrorMessage('');
// // //       // Update the local state with edited admin details
// // //       setHospitalAdmins(hospitalAdmins.map(admin => 
// // //         admin.id === editingAdmin ? { ...admin, ...updatedAdminData } : admin
// // //       ));
// // //       resetForm();
// // //     } catch (error) {
// // //       console.error('Failed to update Hospital Admin:', error);
// // //       setErrorMessage('Failed to update Hospital Admin: ' + (error.response?.data || error.message));
// // //       setSuccessMessage('');
// // //     }
// // //   };

// // //   const handleDeleteAdmin = async (id) => {
// // //     try {
// // //       await axios.delete(`http://localhost:5000/delete-hospital-admin/${id}`);
// // //       setHospitalAdmins(hospitalAdmins.filter(admin => admin.id !== id));
// // //       setSuccessMessage('Hospital Admin deleted successfully');
// // //     } catch (error) {
// // //       console.error('Failed to delete Hospital Admin:', error);
// // //       setErrorMessage('Failed to delete Hospital Admin: ' + (error.response?.data || error.message));
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setAdminEmail('');
// // //     setAdminName('');
// // //     setHospitalId('');
// // //     setEditingAdmin(null); // Reset editing state
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Main Admin Dashboard</h1>
// // //       <h2>{editingAdmin ? 'Edit Hospital Admin' : 'Add New Hospital Admin'}</h2>
// // //       <div>
// // //         <input 
// // //           type="text" 
// // //           placeholder="Admin Name" 
// // //           value={adminName} 
// // //           onChange={(e) => setAdminName(e.target.value)} 
// // //         />
// // //         <input 
// // //           type="email" 
// // //           placeholder="Admin Email" 
// // //           value={adminEmail} 
// // //           onChange={(e) => setAdminEmail(e.target.value)} 
// // //         />
// // //         <input 
// // //           type="text" 
// // //           placeholder="Hospital ID" 
// // //           value={hospitalId} 
// // //           onChange={(e) => setHospitalId(e.target.value)} 
// // //         />
// // //         <button onClick={editingAdmin ? handleUpdateAdmin : handleAddAdmin}>
// // //           {editingAdmin ? 'Update Admin' : 'Add Admin'}
// // //         </button>
// // //         {editingAdmin && <button onClick={resetForm}>Cancel</button>} {/* Show cancel only when editing */}
// // //       </div>
// // //       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
// // //       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

// // //       <h2>Hospital Admins</h2>
// // //       <div>
// // //         {hospitalAdmins.map(admin => (
// // //           <div key={admin.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
// // //             <h3>{admin.name}</h3>
// // //             <p>Email: {admin.email}</p>
// // //             <p>Hospital ID: {admin.hospitalId}</p>
// // //             <button onClick={() => handleEditAdmin(admin)}>Edit</button>
// // //             <button onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MainAdminDashboard;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent, CardActions } from '@mui/material';
// // import { db } from '../firebaseConfig'; // Import Firestore database instance
// // import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// // const MainAdminDashboard = () => {
// //   const [adminEmail, setAdminEmail] = useState('');
// //   const [adminName, setAdminName] = useState('');
// //   const [hospitalId, setHospitalId] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [hospitalAdmins, setHospitalAdmins] = useState([]);
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [editingAdmin, setEditingAdmin] = useState(null);

// //   const adminsCollection = collection(db, "hospitalAdmins"); // Firestore collection reference

// //   // Fetch all hospital admins from Firestore on component mount
// //   useEffect(() => {
// //     const fetchAdmins = async () => {
// //       try {
// //         const snapshot = await getDocs(adminsCollection);
// //         const adminsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //         setHospitalAdmins(adminsList);
// //       } catch (error) {
// //         console.error('Failed to fetch hospital admins:', error);
// //         setErrorMessage('Failed to fetch hospital admins.');
// //       }
// //     };
// //     fetchAdmins();
// //   }, []);

// //   const handleAddAdmin = async () => {
// //     if (password !== confirmPassword) {
// //       setErrorMessage('Passwords do not match.');
// //       return;
// //     }

// //     const newAdminData = {
// //       email: adminEmail,
// //       name: adminName,
// //       hospitalId: hospitalId,
// //       password: password,
// //     };

// //     try {
// //       const docRef = await addDoc(adminsCollection, newAdminData); // Save to Firestore
// //       setSuccessMessage('Hospital Admin registered successfully.');
// //       setHospitalAdmins([...hospitalAdmins, { id: docRef.id, ...newAdminData }]);
// //       resetForm();
// //     } catch (error) {
// //       console.error('Failed to add Hospital Admin:', error);
// //       setErrorMessage('Failed to add Hospital Admin.');
// //     }
// //   };

// //   const handleEditAdmin = (admin) => {
// //     setAdminEmail(admin.email);
// //     setAdminName(admin.name);
// //     setHospitalId(admin.hospitalId);
// //     setPassword('');
// //     setConfirmPassword('');
// //     setEditingAdmin(admin.id);
// //   };

// //   const handleUpdateAdmin = async () => {
// //     if (password !== confirmPassword) {
// //       setErrorMessage('Passwords do not match.');
// //       return;
// //     }

// //     const updatedAdminData = {
// //       email: adminEmail,
// //       name: adminName,
// //       hospitalId: hospitalId,
// //       password: password,
// //     };

// //     try {
// //       const adminDocRef = doc(db, "hospitalAdmins", editingAdmin);
// //       await updateDoc(adminDocRef, updatedAdminData);
// //       setSuccessMessage('Hospital Admin updated successfully.');
// //       setHospitalAdmins(hospitalAdmins.map(admin =>
// //         admin.id === editingAdmin ? { ...admin, ...updatedAdminData } : admin
// //       ));
// //       resetForm();
// //     } catch (error) {
// //       console.error('Failed to update Hospital Admin:', error);
// //       setErrorMessage('Failed to update Hospital Admin.');
// //     }
// //   };

// //   const handleDeleteAdmin = async (id) => {
// //     try {
// //       await deleteDoc(doc(db, "hospitalAdmins", id));
// //       setHospitalAdmins(hospitalAdmins.filter(admin => admin.id !== id));
// //       setSuccessMessage('Hospital Admin deleted successfully.');
// //     } catch (error) {
// //       console.error('Failed to delete Hospital Admin:', error);
// //       setErrorMessage('Failed to delete Hospital Admin.');
// //     }
// //   };

// //   const resetForm = () => {
// //     setAdminEmail('');
// //     setAdminName('');
// //     setHospitalId('');
// //     setPassword('');
// //     setConfirmPassword('');
// //     setEditingAdmin(null);
// //     setErrorMessage('');
// //     setSuccessMessage('');
// //   };

// //   const styles = {
// //     footer: {
// //       width: '100%',
// //       padding: '20px',
// //       backgroundColor: '#062654',
// //       color: '#FFF',
// //       textAlign: 'center',
// //       marginTop: 'auto',
// //     },
// //     footerText: {
// //       fontSize: '1rem',
// //       marginBottom: '5px',
// //     },
// //   };
// //   return (
// //     <div>
// //     <Container maxWidth="md" sx={{ mt: 4 }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Main Admin Dashboard
// //       </Typography>
// //       <Typography variant="h5" align="center" color="primary" gutterBottom>
// //         {editingAdmin ? 'Edit Hospital Admin' : 'Register New Hospital Admin'}
// //       </Typography>
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: 2,
// //           p: 3,
// //           bgcolor: '#EAF0F7',
// //           borderRadius: 2,
// //           boxShadow: 3,
// //         }}
// //       >
// //         <TextField
// //           label="Hospital Name"
// //           variant="outlined"
// //           fullWidth
// //           value={adminName}
// //           onChange={(e) => setAdminName(e.target.value)}
// //         />
// //         <TextField
// //           label="Admin Email"
// //           variant="outlined"
// //           fullWidth
// //           value={adminEmail}
// //           onChange={(e) => setAdminEmail(e.target.value)}
// //         />
// //         <TextField
// //           label="Hospital ID"
// //           variant="outlined"
// //           fullWidth
// //           value={hospitalId}
// //           onChange={(e) => setHospitalId(e.target.value)}
// //         />
// //         <TextField
// //           label="Password"
// //           type="password"
// //           variant="outlined"
// //           fullWidth
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <TextField
// //           label="Confirm Password"
// //           type="password"
// //           variant="outlined"
// //           fullWidth
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //         />
// //         <Button
// //           variant="contained"
// //           fullWidth
// //           color="primary"
// //           onClick={editingAdmin ? handleUpdateAdmin : handleAddAdmin}
// //         >
// //           {editingAdmin ? 'Update Admin' : 'Add Admin'}
// //         </Button>
// //         {editingAdmin && (
// //           <Button variant="outlined" color="secondary" onClick={resetForm} fullWidth>
// //             Cancel
// //           </Button>
// //         )}
// //         {errorMessage && <Typography color="error">{errorMessage}</Typography>}
// //         {successMessage && <Typography color="success.main">{successMessage}</Typography>}
// //       </Box>

// //       <Typography variant="h5" align="center" color="primary" sx={{ mt: 4 }}>
// //         Registered Hospital Admins
// //       </Typography>
// //       <Grid container spacing={2} sx={{ mt: 2 }}>
// //         {hospitalAdmins.map(admin => (
// //           <Grid item xs={12} sm={6} md={4} key={admin.id}>
// //             <Card sx={{  bgcolor: '#EAF0F7', boxShadow: 3,color: '#062654', borderRadius: 2 }}>
// //               <CardContent>
// //                 <Typography variant="h6">{admin.name}</Typography>
// //                 <Typography>Email: {admin.email}</Typography>
// //                 <Typography>Hospital ID: {admin.hospitalId}</Typography>
// //               </CardContent>
// //               <CardActions>
// //                 <Button size="small" color="primary" onClick={() => handleEditAdmin(admin)}>
// //                   Edit
// //                 </Button>
// //                 <Button size="small" color="error" onClick={() => handleDeleteAdmin(admin.id)}>
// //                   Delete
// //                 </Button>
// //               </CardActions>
            
// //             </Card>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Container>
// //     <footer style={styles.footer}>
// //         <p style={styles.footerText}>© 2024 DocSphere. All rights reserved.</p>
// //         <p style={styles.footerText}>Privacy Policy | Terms of Service | Contact Support</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default MainAdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent, CardActions } from '@mui/material';
// import { db } from '../firebaseConfig'; // Firestore database instance
// import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import sendRegistrationEmail from './emailService';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


// const MainAdminDashboard = () => {
//   const [adminEmail, setAdminEmail] = useState('');
//   const [adminName, setAdminName] = useState('');
//   const [hospitalId, setHospitalId] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [hospitalAdmins, setHospitalAdmins] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [editingAdmin, setEditingAdmin] = useState(null);

//   const adminsCollection = collection(db, 'hospitalAdmins'); // Firestore collection reference

//   // Fetch all hospital admins from Firestore on component mount
//   useEffect(() => {
//     const fetchAdmins = async () => {
//       try {
//         const snapshot = await getDocs(adminsCollection);
//         const adminsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setHospitalAdmins(adminsList);
//       } catch (error) {
//         console.error('Failed to fetch hospital admins:', error);
//         setErrorMessage('Failed to fetch hospital admins.');
//       }
//     };
//     fetchAdmins();
//   }, []);

//   const handleAddAdmin = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     const newAdminData = {
//       email: adminEmail,
//       name: adminName,
//       hospitalId: hospitalId,
//       password: password,
//     };

//     try {
//       const auth = getAuth();
    
//       // Register admin in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, password);
//       const user = userCredential.user;
//       //firestore
//       const docRef = await addDoc(adminsCollection, newAdminData); // Save to Firestore
//       setSuccessMessage('Hospital Admin registered successfully.');
//       setHospitalAdmins([...hospitalAdmins, { id: docRef.id, ...newAdminData }]);
      
//       await sendRegistrationEmail(adminEmail, adminName, hospitalId, password); 
      
//       resetForm();
//     } catch (error) {
//       console.error('Failed to add Hospital Admin:', error);
//       setErrorMessage('Failed to add Hospital Admin.');
//     }
//   };

//   const handleEditAdmin = (admin) => {
//     setAdminEmail(admin.email);
//     setAdminName(admin.name);
//     setHospitalId(admin.hospitalId);
//     setPassword(admin.password);
//     setConfirmPassword(admin.password);
//     setEditingAdmin(admin.id);
//   };

//   const handleUpdateAdmin = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     const updatedAdminData = {
//       email: adminEmail,
//       name: adminName,
//       hospitalId: hospitalId,
//       password: password,
//     };

//     try {
//       const adminDocRef = doc(db, 'hospitalAdmins', editingAdmin);
//       await updateDoc(adminDocRef, updatedAdminData);
//       setSuccessMessage('Hospital Admin updated successfully.');
//       setHospitalAdmins(hospitalAdmins.map(admin =>
//         admin.id === editingAdmin ? { ...admin, ...updatedAdminData } : admin
//       ));
//       resetForm();
//     } catch (error) {
//       console.error('Failed to update Hospital Admin:', error);
//       setErrorMessage('Failed to update Hospital Admin.');
//     }
//   };

//   const handleDeleteAdmin = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'hospitalAdmins', id));
//       setHospitalAdmins(hospitalAdmins.filter(admin => admin.id !== id));
//       setSuccessMessage('Hospital Admin deleted successfully.');
//     } catch (error) {
//       console.error('Failed to delete Hospital Admin:', error);
//       setErrorMessage('Failed to delete Hospital Admin.');
//     }
//   };

//   const resetForm = () => {
//     setAdminEmail('');
//     setAdminName('');
//     setHospitalId('');
//     setPassword('');
//     setConfirmPassword('');
//     setEditingAdmin(null);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   const styles = {
//     footer: {
//       width: '100%',
//       padding: '20px',
//       backgroundColor: '#062654',
//       color: '#FFF',
//       textAlign: 'center',
//       marginTop: 'auto',
//     },
//     footerText: {
//       fontSize: '1rem',
//       marginBottom: '5px',
//     },
//   };

//   return (
//     <div>
//       <Container maxWidth="md" sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Main Admin Dashboard
//         </Typography>
//         <Typography variant="h5" align="center" color="primary" gutterBottom>
//           {editingAdmin ? 'Edit Hospital Admin' : 'Register New Hospital Admin'}
//         </Typography>

//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//             p: 3,
//             bgcolor: '#EAF0F7',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <TextField
//             label="Hospital Name"
//             variant="outlined"
//             fullWidth
//             value={adminName}
//             onChange={(e) => setAdminName(e.target.value)}
//           />
//           <TextField
//             label="Admin Email"
//             variant="outlined"
//             fullWidth
//             value={adminEmail}
//             onChange={(e) => setAdminEmail(e.target.value)}
//           />
//           <TextField
//             label="Hospital ID"
//             variant="outlined"
//             fullWidth
//             value={hospitalId}
//             onChange={(e) => setHospitalId(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <TextField
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             color="primary"
//             onClick={editingAdmin ? handleUpdateAdmin : handleAddAdmin}
//           >
//             {editingAdmin ? 'Update Admin' : 'Add Admin'}
//           </Button>
//           {editingAdmin && (
//             <Button variant="outlined" color="secondary" onClick={resetForm} fullWidth>
//               Cancel
//             </Button>
//           )}
//           {errorMessage && <Typography color="error">{errorMessage}</Typography>}
//           {successMessage && <Typography color="success.main">{successMessage}</Typography>}
//         </Box>

//         <Typography variant="h5" align="center" color="primary" sx={{ mt: 4 }}>
//           Registered Hospital Admins
//         </Typography>
//         <Grid container spacing={2} sx={{ mt: 2 }}>
//           {hospitalAdmins.map(admin => (
//             <Grid item xs={12} sm={6} md={4} key={admin.id}>
//               <Card sx={{ bgcolor: '#EAF0F7', boxShadow: 3, color: '#062654', borderRadius: 2 }}>
//                 <CardContent>
//                   <Typography variant="h6">{admin.name}</Typography>
//                   <Typography>Email: {admin.email}</Typography>
//                   <Typography>Hospital ID: {admin.hospitalId}</Typography>
//                   <Typography>Password: {admin.password}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={() => handleEditAdmin(admin)}>
//                     Edit
//                   </Button>
//                   <Button size="small" color="error" onClick={() => handleDeleteAdmin(admin.id)}>
//                     Delete
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <footer style={styles.footer}>
//         <p style={styles.footerText}>© 2024 DocSphere. All rights reserved.</p>
//         <p style={styles.footerText}>Privacy Policy | Terms of Service | Contact Support</p>
//       </footer>
//     </div>
//   );
// };

// export default MainAdminDashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent, CardActions } from '@mui/material';
// import { db } from '../firebaseConfig'; // Firestore database instance
// import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import sendRegistrationEmail from './emailService';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const MainAdminDashboard = () => {
//   const [adminEmail, setAdminEmail] = useState('');
//   const [adminName, setAdminName] = useState('');
//   const [hospitalId, setHospitalId] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [hospitalAdmins, setHospitalAdmins] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [editingAdmin, setEditingAdmin] = useState(null);

//   const adminsCollection = collection(db, 'hospitalAdmins'); // Firestore collection reference

//   useEffect(() => {
//     const fetchAdmins = async () => {
//       try {
//         const snapshot = await getDocs(adminsCollection);
//         const adminsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setHospitalAdmins(adminsList);
//       } catch (error) {
//         console.error('Failed to fetch hospital admins:', error);
//         setErrorMessage('Failed to fetch hospital admins.');
//       }
//     };
//     fetchAdmins();
//   }, []);

//   const handleAddAdmin = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     const newAdminData = {
//       email: adminEmail,
//       name: adminName,
//       hospitalId: hospitalId,
//       password: password,
//     };

//     try {
//       const auth = getAuth();
//       const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, password);
//       const user = userCredential.user;

//       const docRef = await addDoc(adminsCollection, newAdminData); // Save to Firestore
//       setSuccessMessage('Hospital Admin registered successfully.');
//       setHospitalAdmins([...hospitalAdmins, { id: docRef.id, ...newAdminData }]);
      
//       await sendRegistrationEmail(adminEmail, adminName, hospitalId); 
//       resetForm();
//     } catch (error) {
//       console.error('Failed to add Hospital Admin:', error);
//       setErrorMessage('Failed to add Hospital Admin.');
//     }
//   };

//   const handleEditAdmin = (admin) => {
//     setAdminEmail(admin.email);
//     setAdminName(admin.name);
//     setHospitalId(admin.hospitalId);
//     setPassword(admin.password);
//     setConfirmPassword(admin.password);
//     setEditingAdmin(admin.id);
//   };

//   const handleUpdateAdmin = async () => {
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     const updatedAdminData = {
//       email: adminEmail,
//       name: adminName,
//       hospitalId: hospitalId,
//       password: password,
//     };

//     try {
//       const adminDocRef = doc(db, 'hospitalAdmins', editingAdmin);
//       await updateDoc(adminDocRef, updatedAdminData);
//       setSuccessMessage('Hospital Admin updated successfully.');
//       setHospitalAdmins(hospitalAdmins.map(admin =>
//         admin.id === editingAdmin ? { ...admin, ...updatedAdminData } : admin
//       ));
//       resetForm();
//     } catch (error) {
//       console.error('Failed to update Hospital Admin:', error);
//       setErrorMessage('Failed to update Hospital Admin.');
//     }
//   };

//   const handleDeleteAdmin = async (id) => {
//     try {
//       await deleteDoc(doc(db, 'hospitalAdmins', id));
//       setHospitalAdmins(hospitalAdmins.filter(admin => admin.id !== id));
//       setSuccessMessage('Hospital Admin deleted successfully.');
//     } catch (error) {
//       console.error('Failed to delete Hospital Admin:', error);
//       setErrorMessage('Failed to delete Hospital Admin.');
//     }
//   };

//   const resetForm = () => {
//     setAdminEmail('');
//     setAdminName('');
//     setHospitalId('');
//     setPassword('');
//     setConfirmPassword('');
//     setEditingAdmin(null);
//     setErrorMessage('');
//     setSuccessMessage('');
//   };

//   return (
//     <div>
//       <Container maxWidth="md" sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Main Admin Dashboard
//         </Typography>
//         <Typography variant="h5" align="center" color="primary" gutterBottom>
//           {editingAdmin ? 'Edit Hospital Admin' : 'Register New Hospital Admin'}
//         </Typography>

//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//             p: 3,
//             bgcolor: '#EAF0F7',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <TextField
//             label="Hospital Name"
//             variant="outlined"
//             fullWidth
//             value={adminName}
//             onChange={(e) => setAdminName(e.target.value)}
//           />
//           <TextField
//             label="Admin Email"
//             variant="outlined"
//             fullWidth
//             value={adminEmail}
//             onChange={(e) => setAdminEmail(e.target.value)}
//           />
//           <TextField
//             label="Hospital ID"
//             variant="outlined"
//             fullWidth
//             value={hospitalId}
//             onChange={(e) => setHospitalId(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <TextField
//             label="Confirm Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Button
//             variant="contained"
//             fullWidth
//             color="primary"
//             onClick={editingAdmin ? handleUpdateAdmin : handleAddAdmin}
//           >
//             {editingAdmin ? 'Update Admin' : 'Add Admin'}
//           </Button>
//           {editingAdmin && (
//             <Button variant="outlined" color="secondary" onClick={resetForm} fullWidth>
//               Cancel
//             </Button>
//           )}
//           {errorMessage && <Typography color="error">{errorMessage}</Typography>}
//           {successMessage && <Typography color="success.main">{successMessage}</Typography>}
//         </Box>

//         <Typography variant="h5" align="center" color="primary" sx={{ mt: 4 }}>
//           Registered Hospital Admins
//         </Typography>
//         <Grid container spacing={2} sx={{ mt: 2 }}>
//           {hospitalAdmins.map(admin => (
//             <Grid item xs={12} sm={6} md={4} key={admin.id}>
//               <Card sx={{ bgcolor: '#EAF0F7', boxShadow: 3, color: '#062654', borderRadius: 2 }}>
//                 <CardContent>
//                   <Typography variant="h6">{admin.name}</Typography>
//                   <Typography>Email: {admin.email}</Typography>
//                   <Typography>Hospital ID: {admin.hospitalId}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={() => handleEditAdmin(admin)}>
//                     Edit
//                   </Button>
//                   <Button size="small" color="error" onClick={() => handleDeleteAdmin(admin.id)}>
//                     Delete
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default MainAdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Grid, Card, CardContent, CardActions } from '@mui/material';
import { db } from '../firebaseConfig'; // Firestore database instance
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import sendRegistrationEmail from './emailService';
const MainAdminDashboard = () => 
  {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  const [hospitalId, setHospitalId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hospitalAdmins, setHospitalAdmins] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [editingAdmin, setEditingAdmin] = useState(null);
  const adminsCollection = collection(db, 'hospitalAdmins'); // Firestore collection reference

  // Fetch all hospital admins from Firestore on component mount
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const snapshot = await getDocs(adminsCollection);
        const adminsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setHospitalAdmins(adminsList);
      } catch (error) {
        console.error('Failed to fetch hospital admins:', error);
        setErrorMessage('Failed to fetch hospital admins.');
      }
    };
    fetchAdmins();
  }, []);

  const handleAddAdmin = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const newAdminData = {
      email: adminEmail,
      name: adminName,
      hospitalId: hospitalId,
      password: password,
    };

    try {
      const docRef = await addDoc(adminsCollection, newAdminData); // Save to Firestore
      setSuccessMessage('Hospital Admin registered successfully.');
      setHospitalAdmins([...hospitalAdmins, { id: docRef.id, ...newAdminData }]);
      await sendRegistrationEmail(adminEmail, adminName, hospitalId, password); 
      resetForm();
    } catch (error) {
      console.error('Failed to add Hospital Admin:', error);
      setErrorMessage('');
    }
  };

  const handleEditAdmin = (admin) => {
    setAdminEmail(admin.email);
    setAdminName(admin.name);
    setHospitalId(admin.hospitalId);
    setPassword(admin.password);
    setConfirmPassword(admin.password);
    setEditingAdmin(admin.id);
  };

  const handleUpdateAdmin = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const updatedAdminData = {
      email: adminEmail,
      name: adminName,
      hospitalId: hospitalId,
      password: password,
    };

    try {
      const adminDocRef = doc(db, 'hospitalAdmins', editingAdmin);
      await updateDoc(adminDocRef, updatedAdminData);
      setSuccessMessage('Hospital Admin updated successfully.');
      setHospitalAdmins(hospitalAdmins.map(admin =>
        admin.id === editingAdmin ? { ...admin, ...updatedAdminData } : admin
      ));
      resetForm();
    } catch (error) {
      console.error('Failed to update Hospital Admin:', error);
      setErrorMessage('Failed to update Hospital Admin.');
    }
  };

  const handleDeleteAdmin = async (id) => {
    try {
      await deleteDoc(doc(db, 'hospitalAdmins', id));
      setHospitalAdmins(hospitalAdmins.filter(admin => admin.id !== id));
      setSuccessMessage('Hospital Admin deleted successfully.');
    } catch (error) {
      console.error('Failed to delete Hospital Admin:', error);
      setErrorMessage('Failed to delete Hospital Admin.');
    }
  };

  const resetForm = () => {
    setAdminEmail('');
    setAdminName('');
    setHospitalId('');
    setPassword('');
    setConfirmPassword('');
    setEditingAdmin(null);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const styles = {
    footer: {
      width: '100%',
      padding: '20px',
      backgroundColor: '#062654',
      color: '#FFF',
      textAlign: 'center',
      marginTop: 'auto',
    },
    footerText: {
      fontSize: '1rem',
      marginBottom: '5px',
    },
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Main Admin Dashboard
        </Typography>
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          {editingAdmin ? 'Edit Hospital Admin' : 'Register New Hospital Admin'}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 3,
            bgcolor: '#EAF0F7',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <TextField
            label="Hospital Name"
            variant="outlined"
            fullWidth
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
          <TextField
            label="Admin Email"
            variant="outlined"
            fullWidth
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <TextField
            label="Hospital ID"
            variant="outlined"
            fullWidth
            value={hospitalId}
            onChange={(e) => setHospitalId(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={editingAdmin ? handleUpdateAdmin : handleAddAdmin}
          >
            {editingAdmin ? 'Update Admin' : 'Add Admin'}
          </Button>
          {editingAdmin && (
            <Button variant="outlined" color="secondary" onClick={resetForm} fullWidth>
              Cancel
            </Button>
          )}
          {errorMessage && <Typography color="error">{errorMessage}</Typography>}
          {successMessage && <Typography color="success.main">{successMessage}</Typography>}
        </Box>

        <Typography variant="h5" align="center" color="primary" sx={{ mt: 4 }}>
          Registered Hospital Admins
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {hospitalAdmins.map(admin => (
            <Grid item xs={12} sm={6} md={4} key={admin.id}>
              <Card sx={{ bgcolor: '#EAF0F7', boxShadow: 3, color: '#062654', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6">{admin.name}</Typography>
                  <Typography>Email: {admin.email}</Typography>
                  <Typography>Hospital ID: {admin.hospitalId}</Typography>
                  <Typography>Password: {admin.password}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleEditAdmin(admin)}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => handleDeleteAdmin(admin.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 DocSphere. All rights reserved.</p>
        <p style={styles.footerText}>Privacy Policy | Terms of Service | Contact Support</p>
      </footer>
    </div>
  );
};

export default MainAdminDashboard;