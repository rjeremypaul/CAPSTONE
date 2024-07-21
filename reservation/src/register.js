import React, { useState } from 'react';
import './styles.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
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
