import React, { useState } from 'react';
import './newstyles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError('Please fill out all fields.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    setError(''); // Clear error message if validation passes
  };

  return (
    <div className='ireserba-welcome-container'>
      <div className='welcome'>
        <div className='welcome1'>
          <p>Your court, your time.</p>
        </div>
        <div className='welcome2'>
          <p>Play together with</p>
          <h1 id='iReserba'>iReserba</h1>
        </div>
      </div>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label htmlFor="register-username">Username</label>
            <input
              type="text"
              id="register-username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="register-email">Email</label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          <p className="toggle-form">Already have an account? <a href="login.html">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
