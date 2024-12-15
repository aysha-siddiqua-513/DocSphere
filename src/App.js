import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import DoctorLogin from './pages/DoctorLogin';
import DoctorDashboard from './pages/DoctorDashboard';
import Forum from './pages/Forum';
import VerificationForm from './pages/VerificationForm';
import MainAdminDashboard from './pages/MainAdminDashboard'; // Import the MainAdminDashboard component
import LandingPage from './pages/LandingPage';
import HospitalAdminLogin from './pages/HospitalAdminLogin';
import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material";
import ForumPage from "./components/ForumPage";
import PublicForum from "./components/PublicForum";
import PrivateForum from "./components/PrivateForum";
import Login from "./components/Login";
import PPage from './ForumPage/PPage';
import MedicalConsentForm from './components/MedicalConsentForm';

const theme = createTheme({
  palette: {
    background: {
      default: "#062654",
    },
    primary: {
      main: "#2265A2",
    },
    text: {
      primary: "#7FADE0",
    },
  },
  typography: {
    allVariants: {
      color: "#7FADE0",
    },
  },
});

const App = () => {
  const isAuthenticated = false; // Update with actual authentication check logic

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg" style={{ minHeight: "100vh", paddingTop: "20px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/h-login" element={<HospitalAdminLogin />} />
            {/* <Route path="/doctor-login" element={<DoctorLogin />} /> */}
            <Route path="/dashboard" element={<DoctorDashboard />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/verification" element={<VerificationForm />} />
            <Route path="/main-admin-dashboard" element={<MainAdminDashboard />} />
            
            {/* Forum pages */}
            <Route path="/forum-page" element={<ForumPage />} />
            <Route path="/public-forum" element={<PPage/> } />
            <Route path="/consent" element={<MedicalConsentForm/> } />
            <Route
              path="/private-forum"
              element={isAuthenticated ? <PrivateForum /> : <Navigate to="/login" replace />}
            />
            <Route path="/doctor-login" element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
