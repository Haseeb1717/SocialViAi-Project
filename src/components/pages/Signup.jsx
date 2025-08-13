import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';
import './style/Signup.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const usernameRules = {
  minLength: { value: 3, message: 'At least 3 characters' },
  maxLength: { value: 20, message: 'Maximum 20 characters' },
  pattern: {
    value: /^[a-zA-Z0-9_-]+$/,
    message: 'Only letters, numbers, _ and -'
  },
  validate: {
    noSpaces: (value) => 
      !value || /^\S.*\S$|^\S$/.test(value) || 'No leading or trailing spaces'
  }
};

const passwordRules = {
  minLength: { value: 8, message: 'Minimum 8 characters' },
  validate: {
    hasUpperCase: (value) => 
      /[A-Z]/.test(value) || 'At least 1 uppercase letter',
    hasLowerCase: (value) => 
      /[a-z]/.test(value) || 'At least 1 lowercase letter',
    hasNumber: (value) => 
      /\d/.test(value) || 'At least 1 number',
    hasSpecialChar: (value) => 
      /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'At least 1 special character (!@#$...)'
  }
};

const validateUsername = (username) => {
  if (!username) return {};
  return {
    minLength: username.length >= 3,
    maxLength: username.length <= 20,
    validChars: /^[a-zA-Z0-9_-]+$/.test(username),
    noSpaces: /^\S.*\S$|^\S$/.test(username)
  };
};

const validatePassword = (password) => {
  if (!password) return {};
  return {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, touchedFields, isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const watchedValues = watch();
  const { username = '', email = '', password = '' } = watchedValues;

  const usernameValidation = validateUsername(username);
  const passwordValidation = validatePassword(password);
  
  const allUsernameValid = Object.values(usernameValidation).every(Boolean);
  const allPasswordValid = Object.values(passwordValidation).every(Boolean);
  const emailIsValid = emailRegex.test(email);

  const shouldShowUsernameErrors = (focusedField === 'username' || touchedFields.username) && username;
  const shouldShowEmailErrors = (focusedField === 'email' || touchedFields.email) && email;
  const shouldShowPasswordErrors = (focusedField === 'password' || touchedFields.password) && password;

  const onSubmit = async (data) => {
    try {
      console.log('Form submitted:', data);
      // Add your submission logic here
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const renderValidationItem = (isValid, text, show = true) => {
    if (!show) return null;
    
    return (
      <div className="validation-item" key={text}>
        {isValid ? (
          <CheckCircle color="green" size={16} />
        ) : (
          <XCircle color="red" size={16} />
        )}
        <span style={{ color: isValid ? 'green' : 'red', marginLeft: 8 }}>
          {text}
        </span>
      </div>
    );
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-section">
        <div className="login-form">
          <div className="back-button">
            <span>Back</span>
          </div>
          <h1 className="heading">
            <span className="the">WE</span>
            <span className="chat">LC</span>
            <span className="bot">OME</span>
          </h1>
          <h1 className="login-title">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="username"
                  placeholder="Choose a username"
                  className={`form-input ${
                    shouldShowUsernameErrors && !allUsernameValid ? 'input-error' : ''
                  }`}
                  {...register('username', usernameRules)}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField('')}
                />
                {allUsernameValid && username.length > 0 && (
                  <CheckCircle 
                    color="green" 
                    size={20} 
                    className="input-valid-icon"
                    style={{ 
                      right: '15px', 
                      position: 'absolute', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
              {shouldShowUsernameErrors && !allUsernameValid && (
                <div className="validation-container">
                  {renderValidationItem(usernameValidation.minLength, 'At least 3 characters')}
                  {renderValidationItem(usernameValidation.maxLength, 'Maximum 20 characters')}
                  {renderValidationItem(usernameValidation.validChars, 'Only letters, numbers, _ and -')}
                  {renderValidationItem(usernameValidation.noSpaces, 'No leading or trailing spaces')}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className={`form-input ${
                    shouldShowEmailErrors && !emailIsValid ? 'input-error' : ''
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: emailRegex,
                      message: 'Must be a valid email address'
                    }
                  })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                />
                {emailIsValid && email.length > 0 && (
                  <CheckCircle 
                    color="green" 
                    size={20} 
                    className="input-valid-icon"
                    style={{ 
                      right: '15px', 
                      position: 'absolute', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>
              {shouldShowEmailErrors && !emailIsValid && (
                <div className="validation-container">
                  {renderValidationItem(emailIsValid, 'Must be a valid email address')}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="form-group password-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
              </div>
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Create a strong password"
                  className={`form-input ${
                    shouldShowPasswordErrors && !allPasswordValid ? 'input-error' : ''
                  }`}
                  {...register('password', passwordRules)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#666',
                    zIndex: 2
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
                {allPasswordValid && password.length > 0 && (
                  <CheckCircle
                    color="green"
                    size={20}
                    className="input-valid-icon"
                    style={{ 
                      right: '50px', 
                      position: 'absolute', 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </div>

              {shouldShowPasswordErrors && (
                <div className="validation-container">
                  {renderValidationItem(passwordValidation.minLength, 'Minimum 8 characters')}
                  {renderValidationItem(passwordValidation.hasUpperCase, 'At least 1 uppercase letter')}
                  {renderValidationItem(passwordValidation.hasLowerCase, 'At least 1 lowercase letter')}
                  {renderValidationItem(passwordValidation.hasNumber, 'At least 1 number')}
                  {renderValidationItem(passwordValidation.hasSpecialChar, 'At least 1 special character (!@#$...)')}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`sign-in-btn ${!isValid ? 'disabled' : ''}`}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="signup-text">
            Already have an account?{' '}
            <Link to="/login" className="signup-link">
              Sign In
            </Link>
          </p>

          <div className="legal-text">
            <p>
              By signing up, you agree to the{' '}
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

export default Signup;