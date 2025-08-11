import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Forget-Password.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password for:', email);
    // Add your API call or reset logic here
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        
        {/* Illustration Section - Only image now */}
        <div className="illustration-section">
          <img 
            src="https://via.placeholder.com/400x400.png?text=Password+Reset" 
            alt="Reset Password" 
            className="illustration-img"
          />
        </div>
        
        {/* Form Section */}
        <div className="form-section">
          <div className="form-content">
            <h1 className="title">
              Forgot Your Password ?
            </h1>

            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="reset-button">
                RESET PASSWORD
              </button>

              <Link to="/" className="back-link">
                Back to signin
              </Link>
            </form>
          </div>
        </div>
      </div>

      <div className="background-decorations">
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>
        <div className="bg-shape-3"></div>
      </div>
    </div>
  );
};

export default ForgetPassword;
