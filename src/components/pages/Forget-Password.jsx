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
        <div className="illustration-section">
          <div className="decorative-elements">
            <div className="key-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="8" cy="8" r="3" fill="#8b5cf6" />
                <path d="m8.5 11 7 7" stroke="#8b5cf6" strokeWidth="2" />
                <path d="m15 18 2-2" stroke="#8b5cf6" strokeWidth="2" />
                <path d="m17 16 2-2" stroke="#8b5cf6" strokeWidth="2" />
              </svg>
            </div>
            <div className="dots-decoration">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>

          <div className="main-illustration">
            <div className="person-figure">
              <div className="person-head"></div>
              <div className="person-body">
                <div className="shirt"></div>
                <div className="arm"></div>
              </div>
              <div className="person-legs"></div>
            </div>

            <div className="login-screen">
              <div className="screen-header">
                <div className="close-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="password-fields">
                <div className="password-dots">•••••</div>
                <div className="password-dots long">••••••••••</div>
              </div>
              <div className="login-button"></div>
            </div>

            <div className="plant-pot">
              <div className="pot"></div>
              <div className="plant-leaves">
                <div className="leaf"></div>
                <div className="leaf leaf-2"></div>
                <div className="stem"></div>
              </div>
            </div>
          </div>

          <div className="floating-key">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="8" r="3" fill="#d1d5db" />
              <path d="m8.5 11 7 7" stroke="#d1d5db" strokeWidth="2" />
              <path d="m15 18 2-2" stroke="#d1d5db" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="form-section">
          <div className="form-content">
            <h1 className="title">
              Forgot
              <br />
              Your Password ?
            </h1>

            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email Address"
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
