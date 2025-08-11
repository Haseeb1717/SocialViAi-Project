import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './style/Forget-Password.css';
import ResetImg from "../../assets/ResetPasswordassets2.png";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Reset password to:', newPassword);
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        <div className="illustration-section">
        <img 
            src={ResetImg} 
            alt="Reset Password" 
            className="illustration-img"
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          />
        
        </div>

        <div className="form-section">
          <div className="form-content">
            <h1 className="title">Update Your Password?</h1>

            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group" style={{ position: 'relative' }}>
                <label htmlFor="new-password" className="input-label">New Password</label>
                <input
                  id="new-password"
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  className="email-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <div
                  className="toggle-visibility"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '68%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>

              <div className="input-group" style={{ position: 'relative' }}>
                <label htmlFor="confirm-password" className="input-label">Confirm New Password</label>
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm New Password"
                  className="email-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div
                  className="toggle-visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '30px',
                    top: '68%',
                   
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>

              <button type="submit" className="reset-button">
                Update Password
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
