// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Pages
import LandingPage from './components/pages/Landing-page';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ForgetPassword from './components/pages/Forget-Password';
import ResetPassword from './components/pages/Reset-Password';

// Dashboard Layout
import UserDashboardLayout from './components/Layout/UserDashboardLayout';

// Dashboard Pages
import DashboardHome from './components/pages/Dashboard/DashboardHome';

// //Audience targeting 
import AudienceTargeting from './components/pages/Dashboard/AudienceTarget'; 
import ContentGenerator from "./components/pages/Dashboard/GenrateContent"; // or rename the file
import AutoDMResponse from './components/pages/Dashboard/AutoDMResponse';

const Scheduling = () => <h2>Scheduling Page</h2>;
const AutoDM = () => <h2>Auto DM Page</h2>;
const AIAdvisor = () => <h2>AI Advisor Page</h2>;
const Payments = () => <h2>Payments Page</h2>;
const Analytics = () => <h2>Analytics Page</h2>;
const Profile = () => <h2>Profile Page</h2>;
const Settings = () => <h2>Settings Page</h2>;
const FAQ = () => <h2>FAQ Page</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<UserDashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* ✅ Uses your new file */}
          <Route path="audience-targeting" element={<AudienceTargeting />} />
          <Route path="generate-content" element={<ContentGenerator/>}/>
          <Route path="scheduling" element={<Scheduling />} />
          <Route path="auto-dm" element={<AutoDMResponse/>} />
          <Route path="ai-advisor" element={<AIAdvisor />} />
          <Route path="payments" element={<Payments />} />
          <Route path="analytics" element={<Analytics />} />

          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="faq" element={<FAQ />} />
    
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    
      </Routes>
    </Router>
  );
};

export default App;
