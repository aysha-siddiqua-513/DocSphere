// src/pages/VerificationForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const VerificationForm = () => {
  const [doctorName, setDoctorName] = useState('');
  const [hospital, setHospital] = useState('');

  const handleSubmit = () => {
    console.log(`Doctor: ${doctorName}, Hospital: ${hospital}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Verification Form
      </Typography>
      <TextField
        label="Doctor's Name"
        fullWidth
        margin="normal"
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
      />
      <TextField
        label="Hospital"
        fullWidth
        margin="normal"
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default VerificationForm;
