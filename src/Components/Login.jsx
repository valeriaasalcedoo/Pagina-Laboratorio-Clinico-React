import React from 'react';
import './Login.css';

const Login = ({ onSwitchForm, onLogin }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please log in to your account</p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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
              placeholder="Enter your password"
              className="input-field"
            />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="login-button"
            onClick={onLogin} // Cambia la vista al dashboard
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="signup-link">
            Don't have an account?{' '}
            <button
              type="button"
              className="switch-button"
              onClick={() => onSwitchForm('signup')}
            >
              Sign Up
            </button>
          </p>

          {/* Divider */}
          <div className="divider">Or</div>

          {/* Social Login */}
          <button type="button" className="social-button google">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
            Sign in with Google
          </button>
          <button type="button" className="social-button apple">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/mac-os.png" alt="Apple" />
            Sign in with Apple
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
