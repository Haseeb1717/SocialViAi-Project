import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';
import './style/Login.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, touchedFields, isSubmitting }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const watchedValues = watch();
  const { email = '', password = '' } = watchedValues;

  const emailIsValid = emailRegex.test(email);
  const passwordIsValid = password.length > 0;

  const shouldShowEmailErrors = (focusedField === 'email' || touchedFields.email) && email && !emailIsValid;
  const shouldShowPasswordErrors = (focusedField === 'password' || touchedFields.password) && password && !passwordIsValid;

  const onSubmit = async (data) => {
    try {
      console.log('Logging in:', data);
      // Add your login logic here
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const renderValidationItem = (isValid, text) => (
    <div className="validation-item" key={text}>
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
          <h1 className="login-title">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper" style={{ position: 'relative' }}>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className={`form-input ${shouldShowEmailErrors ? 'input-error' : ''}`}
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
                    style={{ right: '30px', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                  />
                )}
              </div>
              {shouldShowEmailErrors && (
                <div className="validation-container">
                  {renderValidationItem(emailIsValid, 'Must be a valid email address')}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  className={`form-input ${shouldShowPasswordErrors ? 'input-error' : ''}`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 1,
                      message: 'Password cannot be empty'
                    }
                  })}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
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
                {passwordIsValid && password.length > 0 && (
                  <CheckCircle
                    color="green"
                    size={20}
                    className="input-valid-icon"
                    style={{ right: '40px', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                  />
                )}
              </div>
              {shouldShowPasswordErrors && (
                <div className="validation-container">
                  {renderValidationItem(passwordIsValid, 'Password cannot be empty')}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`sign-in-btn ${!isValid ? 'disabled' : ''}`}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>

          <div className="legal-text">
            <p>
              By logging in, you agree to the{' '}
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

export default Login;