import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { Card, CardContent, TextField, Typography, Grid, Button, Snackbar, Box, CircularProgress } from '@mui/material';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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

const DoctorDashboard = () => {
  const [doctorData, setDoctorData] = useState({
    doctorName: '',
    email: '',
    specialization: '',
    licenseNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);  // Added loading state

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'doctors'));
        const doctorsList = querySnapshot.docs.map(doc => doc.data());
        setDoctors(doctorsList);
      } catch (error) {
        setErrorMessage('');
      }
    };

    fetchDoctors();
  }, []); // Runs once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterDoctor = async () => {
    const { doctorName, email, specialization, licenseNumber, password, confirmPassword } = doctorData;
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setLoading(true);  // Start loading

    try {
      // Create user with email and password in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Add doctor data to Firestore
      await addDoc(collection(db, 'doctors'), {
        doctorId: userId,
        doctorName,
        email,
        specialization,
        licenseNumber,
      });

      setSuccessMessage('Doctor registered successfully');
      setDoctorData({ doctorName: '', email: '', specialization: '', licenseNumber: '', password: '', confirmPassword: '' });
    } catch (error) {
      setErrorMessage('');
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div>
      <Box sx={{ backgroundColor: '#EAF0F7', padding: 4 }}>
        <Typography variant="h4" sx={{ color: '#062654', marginBottom: 2 }}>Register Doctor</Typography>
        
        <TextField label="Doctor Name" name="doctorName" value={doctorData.doctorName} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" value={doctorData.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Specialization" name="specialization" value={doctorData.specialization} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="License Number" name="licenseNumber" value={doctorData.licenseNumber} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" value={doctorData.password} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Confirm Password" name="confirmPassword" type="password" value={doctorData.confirmPassword} onChange={handleChange} fullWidth margin="normal" />
        
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegisterDoctor}
          sx={{ mt: 2, backgroundColor: '#2265A2', '&:hover': { backgroundColor: '#7FADE0' } }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Register Doctor'}
        </Button>

        {successMessage && <Snackbar open message={successMessage} autoHideDuration={3000} onClose={() => setSuccessMessage('')} sx={{ backgroundColor: '#7FADE0' }} />}
        {errorMessage && <Snackbar open message={errorMessage} autoHideDuration={3000} onClose={() => setErrorMessage('')} sx={{ backgroundColor: '#2265A2' }} />}

        {/* Display Doctors in Cards */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#7FADE0', border: '1px solid #2265A2', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#062654' }}>{doctor.doctorName}</Typography>
                  <Typography variant="body2" sx={{ color: '#062654' }}>{doctor.specialization}</Typography>
                  <Typography variant="body2" sx={{ color: '#2265A2' }}>License: {doctor.licenseNumber}</Typography>
                  <Typography variant="body2" sx={{ color: '#2265A2' }}>Email: {doctor.email}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 DocSphere. All rights reserved.</p>
        <p style={styles.footerText}>Privacy Policy | Terms of Service | Contact Support</p>
      </footer>
    </div>
  );
};

export default DoctorDashboard;
