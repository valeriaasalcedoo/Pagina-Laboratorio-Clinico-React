import React from 'react';
import './SingUp.css';

const SignUp = ({ onSwitchForm }) => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <p className="signup-subtitle">Join us and start your journey!</p>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="input-group">
            <label htmlFor="name" className="input-label">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="input-field"
            />
          </div>

          {/* Sign Up Button */}
          <button type="button" className="signup-button">
            Sign Up
          </button>

          {/* Divider */}
          <div className="divider">Or</div>

          {/* Social Sign Up */}
          <button type="button" className="social-button google">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Sign up with Google
          </button>
          <button type="button" className="social-button apple">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="Apple" />
            Sign up with Apple
          </button>
        </form>

        {/* Footer */}
        <p className="login-link">
          Already have an account?{' '}
          <button
            type="button"
            className="switch-button"
            onClick={() => onSwitchForm('login')}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
