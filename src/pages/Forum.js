// src/pages/Forum.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Forum = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Doctors' Forum
      </Typography>
      <Paper style={{ padding: 20, marginBottom: 20 }}>
        <Typography variant="h6">Global Discussion</Typography>
        <Typography variant="body1">Details and discussions...</Typography>
      </Paper>
      <Paper style={{ padding: 20 }}>
        <Typography variant="h6">Hospital-specific Discussion</Typography>
        <Typography variant="body1">Hospital-specific details...</Typography>
      </Paper>
    </Container>
  );
};

export default Forum;
