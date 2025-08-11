import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'; // Add check & cross icons
import './style/Login.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const emailIsValid = emailRegex.test(email);

  // Password rules
  const passwordRules = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const allPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailIsValid || !allPasswordValid) {
      alert('Fix errors before submitting!');
      return;
    }
    alert('Logged in successfully!');
    console.log({ email, password });
  };

  const renderValidationItem = (isValid, text) => (
    <div className="validation-item">
      {isValid ? (
        <CheckCircle color="green" size={16} />
      ) : (
        <XCircle color="red" size={16} />
      )}
      <span style={{ color: isValid ? 'green' : 'red', marginLeft: 8 }}>{text}</span>
    </div>
  );

  return (
    <div className="login-wrapper">
      <div className="login-form-section">
        <div className="login-form">
          <div className="back-button">
            <span> Back</span>
          </div>
          <h1 className="heading">
            <span className="the">WE</span>
            <span className="chat">LC</span>
            <span className="bot">OME</span>
          </h1>
          <h1 className="login-title">Sign in</h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className={`form-input ${emailFocused && !emailIsValid ? 'input-error' : ''}`}
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                required
              />
              {/* Show email validation only when focused and invalid */}
              {emailFocused && !emailIsValid && (
                <div className="validation-container">
                  {renderValidationItem(emailIsValid, 'Must be a valid email address')}
                </div>
              )}
            </div>

            <div className="form-group password-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Your password"
                  className={`form-input ${passwordFocused && !allPasswordValid ? 'input-error' : ''}`}
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>

              {/* Password validation UI: show only if focused or not valid */}
              {(passwordFocused || !allPasswordValid) && (
                <div className="validation-container">
                  {renderValidationItem(passwordRules.minLength, 'Minimum 8 characters')}
                  {renderValidationItem(passwordRules.hasUpperCase, 'At least 1 uppercase letter')}
                  {renderValidationItem(passwordRules.hasLowerCase, 'At least 1 lowercase letter')}
                  {renderValidationItem(passwordRules.hasNumber, 'At least 1 number')}
                  {renderValidationItem(passwordRules.hasSpecialChar, 'At least 1 special character (!@#$...)')}
                </div>
              )}
            </div>

            <a href="#" className="forgot-password">
              Forgot Password?
            </a>

            <button type="submit" className="sign-in-btn" disabled={!emailIsValid || !allPasswordValid}>
              Sign in
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>

          <div className="legal-text">
            <p>
              By signing in, you are agreeing to the{' '}
              <a href="#">Terms of Service</a>, <a href="#">Acceptable Use Policy</a>, and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
          </div>

          <footer className="footer-links">
            <a href="#">Twitter</a>
            <a href="#">Discord</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
          </footer>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="video-section">
        <div className="video-container">
          <video
            className="login-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
          >
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
