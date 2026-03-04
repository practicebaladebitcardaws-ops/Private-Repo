import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate API call
      if (data.email === 'test@example.com' && data.password === 'password123') {
        setSuccess('Login successful! Welcome!');
        localStorage.setItem('token', 'fake-jwt-token');
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setSuccess('');
        alert('Invalid credentials. Try: test@example.com / password123');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Please sign in to your account</p>
      </div>

      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <button type="submit" className="login-btn" disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '14px' }}>
        Demo: test@example.com / password123
      </p>
    </div>
  );
}

export default Login;

