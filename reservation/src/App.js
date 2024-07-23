import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import FirstNavbar from './FirstNavbar';
import Footer from './Footer';
import Login from './login';
import Register from './register';
import AdminDashboard from './admindashboard'; // Add your admin dashboard component

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false); // Ensure register form is hidden
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false); // Ensure login form is hidden
  };

  return (
    <Router>
      <div className="App">
        <FirstNavbar toggleLoginForm={toggleLoginForm} toggleRegisterForm={toggleRegisterForm} />
        <Routes>
          <Route path="/" element={
            <>
              {showLoginForm && <Login />}
              {showRegisterForm && <Register />}
            </>
          } />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
