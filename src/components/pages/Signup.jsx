import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import './style/Signup.css';

// Email regex to check basic email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// Password validation rules
const passwordRules = {
  minLength: 8,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumber: /\d/,
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
};

// Function to validate password and return error string or empty if valid
const validatePassword = (pwd) => {
  if (pwd.length < passwordRules.minLength)
    return "Password must be at least 8 characters";
  if (!passwordRules.hasUpperCase.test(pwd))
    return "Must contain at least 1 uppercase letter";
  if (!passwordRules.hasLowerCase.test(pwd))
    return "Must contain at least 1 lowercase letter";
  if (!passwordRules.hasNumber.test(pwd))
    return "Must contain at least 1 number";
  if (!passwordRules.hasSpecialChar.test(pwd))
    return "Must contain at least 1 special character";
  return ""; // no errors, valid password
};

const Login = () => {
  // Inputs state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Errors state
  const [errors, setErrors] = useState({ email: "", password: "" });
  
  // Focus state to show errors only when focused
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  
  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes & validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      if (isFocused.email && !emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "password") {
      setPassword(value);
      if (isFocused.password) {
        const pwdError = validatePassword(value);
        setErrors((prev) => ({ ...prev, password: pwdError }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  // On focus - mark focused and show errors immediately if invalid
  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));

    if (field === "email" && !emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    }
    if (field === "password") {
      const pwdError = validatePassword(password);
      setErrors((prev) => ({ ...prev, password: pwdError }));
    }
  };

  // On blur - remove focus and clear errors
  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  // Submit form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = "";
    let passwordError = "";

    if (!emailRegex.test(email)) emailError = "Invalid email format";
    if (validatePassword(password) !== "")
      passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      alert("Fix errors before submitting!");
      return;
    }

    alert("Form submitted successfully!");
    console.log({ email, password });
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
          <h1 className="login-title">Sign in</h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className={`form-input ${errors.email ? "input-error" : ""}`}
                value={email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            <div className="form-group password-group" style={{ position: 'relative' }}>
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Your password"
                className={`form-input ${errors.password ? "input-error" : ""}`}
                value={password}
                onChange={handleChange}
                onFocus={() => handleFocus("password")}
                onBlur={() => handleBlur("password")}
                autoComplete="off"
              />
              {/* Eye icon button */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '35px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <a href="#" className="forgot-password">Forgot Password?</a>

            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>

          <p className="signup-text">
            want to signup? <a href="#" className="signup-link">Sign Up</a>
          </p>

          <div className="legal-text">
            <p>By signing in, you agree to the <a href="#">Terms of Service</a>, <a href="#">Acceptable Use Policy</a>, and <a href="#">Privacy Policy</a>.</p>
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
