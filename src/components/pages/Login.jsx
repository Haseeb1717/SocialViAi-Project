import React from 'react';
import './style/Login.css';


const Login = () => {
  return (
    <div className="login-wrapper">
 
    <div className="login-form-section">
      <div className="login-form">
        <div className="back-button">
          <span>← Back</span>
        </div>
        <h1 className="heading">
    <span className="the">WE</span>
    <span className="chat">LC</span>
    
    <span className="bot">OME</span>
  </h1>
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
        <div className="video-overlay">
          <div className="video-content">
            <h2 className="video-title">Welcome Back</h2>
            <p className="video-description">Join thousands of users who trust our platform for their daily workflow</p>
          </div>
        </div>
      </div>
    </div>
  </div>

);
};

export default Login;
