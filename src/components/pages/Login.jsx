import React from 'react';
import './style/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="back-button">
          <span>← Back</span>
        </div>
        
        <h1 className="login-title">SIGN IN</h1>
        
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="example@gmail.com" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <input 
              type="password" 
              id="password"
              placeholder="Your password" 
              className="form-input"
            />
          </div>
          
          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
        
        <p className="signup-text">
          Don't have an account? <a href="#" className="signup-link">Sign up</a>
        </p>
        
        <div className="legal-text">
          <p>By signing in, you are agreeing to the <a href="#">Terms of Service</a>, <a href="#">Acceptable Use Policy</a>, and <a href="#">Privacy Policy</a>.</p>
        </div>
        
        <footer className="footer-links">
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
          <a href="#">About us</a>
          <a href="#">Careers</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;