import React from 'react';
import './style/Signup.css';


const Login = () => {
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
      
        <form>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              placeholder="Enter your Username" 
              className="form-input"
            />
          </div>
        
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
            </div>
            <input 
              type="password" 
              id="password"
              placeholder="Your password" 
              className="form-input"
            />
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
            
          <button type="submit" className="sign-in-btn">Sign Up</button>
        </form>
        
    {/* <div className='Social-Login-container'>
      <button className="social-btn google">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.21 3.61l6.85-6.85C36.63 2.97 30.72 0 24 0 14.7 0 6.65 5.8 2.68 14.11l7.98 6.2C12.57 13.33 17.91 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.09 24.55c0-1.57-.14-3.07-.39-4.55H24v9.02h12.36c-.54 2.91-2.19 5.38-4.66 7.02l7.21 5.58c4.2-3.88 6.64-9.6 6.64-16.07z"/>
          <path fill="#FBBC05" d="M10.66 28.31a14.54 14.54 0 010-8.62l-7.98-6.2A24.05 24.05 0 000 24c0 3.9.93 7.58 2.68 10.51l7.98-6.2z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.9-2.13 15.87-5.79l-7.21-5.58C30.9 38.31 27.64 39.5 24 39.5c-6.09 0-11.43-3.83-13.34-9.11l-7.98 6.2C6.65 42.2 14.7 48 24 48z"/>
        </svg>
        Continue with Google
      </button>

      <button className="social-btn instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#E1306C" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.17.46.355 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.17-1.26.355-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.17-.46-.355-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43A4.9 4.9 0 013.84 2.95 4.9 4.9 0 015.61 1.8c.46-.17 1.26-.355 2.43-.41C9.316 1.312 9.7 1.3 12 1.3m0-1.3C8.735 0 8.332.013 7.052.07 5.772.127 4.8.317 4.02.59 3.16.885 2.44 1.335 1.835 1.94.93 2.845.48 3.565.185 4.425c-.273.78-.463 1.752-.52 3.032C-.013 8.332 0 8.735 0 12s.013 3.668.07 4.948c.057 1.28.247 2.252.52 3.032.295.86.745 1.58 1.65 2.485.605.605 1.325 1.055 2.185 1.35.78.273 1.752.463 3.032.52C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.07c1.28-.057 2.252-.247 3.032-.52.86-.295 1.58-.745 2.485-1.65.905-.905 1.355-1.625 1.65-2.485.273-.78.463-1.752.52-3.032.057-1.28.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.057-1.28-.247-2.252-.52-3.032-.295-.86-.745-1.58-1.65-2.485-.605-.605-1.325-1.055-2.185-1.35-.78-.273-1.752-.463-3.032-.52C15.668.013 15.265 0 12 0z" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z"/>
          <circle cx="18.406" cy="5.594" r="1.44"/>
        </svg>
        Continue with Instagram
      </button>

      <button className="social-btn twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#1DA1F2" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.723 0-4.932 2.206-4.932 4.927 0 .39.045.765.127 1.124-4.094-.205-7.72-2.164-10.148-5.144-.425.729-.666 1.577-.666 2.475 0 1.708.87 3.215 2.188 4.098-.807-.026-1.566-.247-2.23-.616v.062c0 2.385 1.694 4.374 3.946 4.828-.413.111-.85.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.316-3.809 2.102-6.102 2.102-.397 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.213-.004-.425-.014-.637.962-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
        </svg>
        Continue with Twitter
      </button>

      <button className="social-btn pinterest">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#E60023" viewBox="0 0 24 24">
          <path d="M12.04 2.002c-5.519 0-9.995 4.478-9.995 9.998 0 4.421 2.865 8.182 6.854 9.547-.094-.81-.179-2.055.038-2.94.194-.807 1.249-5.137 1.249-5.137s-.318-.636-.318-1.576c0-1.476.855-2.579 1.922-2.579.905 0 1.342.681 1.342 1.495 0 .91-.578 2.269-.877 3.532-.25 1.062.53 1.926 1.572 1.926 1.888 0 3.165-2.491 3.165-5.44 0-2.24-1.508-3.918-4.26-3.918-3.102 0-5.036 2.32-5.036 4.917 0 .897.345 1.86.777 2.384.085.105.097.197.072.304-.079.332-.253 1.062-.287 1.21-.045.197-.146.239-.339.144-1.263-.589-2.048-2.437-2.048-3.923 0-3.196 2.324-6.13 6.695-6.13 3.507 0 6.23 2.497 6.23 5.841 0 3.477-2.186 6.274-5.216 6.274-1.019 0-1.977-.53-2.304-1.157l-.626 2.387c-.228.869-.849 1.958-1.268 2.621.951.292 1.955.45 3.002.45 5.521 0 9.999-4.478 9.999-9.998 0-5.522-4.478-10-9.999-10z"/>
        </svg>
        Continue with Pinterest
      </button>
    </div> */}

        <p className="signup-text">
          want to login? <a href="#" className="signup-link">Login</a>
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
         </div>
      </div>
    </div>
  </div>

);
};

export default Login;
