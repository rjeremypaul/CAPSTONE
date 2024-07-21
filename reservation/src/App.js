import React, { useState } from 'react';
import './App.css'; 
import FirstNavbar from './FirstNavbar';
import Login from './login';
import Register from './register';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false); 
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false); 
  };

  return (
    <div className="App">
      <FirstNavbar toggleLoginForm={toggleLoginForm} toggleRegisterForm={toggleRegisterForm} />
      {showLoginForm && <Login />}
      {showRegisterForm && <Register />}
    </div>

    
  );
}



export default App;
