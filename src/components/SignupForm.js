import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const SignupForm = () => {
  const navigate = useNavigate(); // Access the navigate function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({}); // State to manage errors

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic for each field
    const newErrors = { ...errors };

    if (name === 'email') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      newErrors.email = isValidEmail ? '' : 'Enter a valid email address';
    } else if (name === 'password') {
      newErrors.password = value.length < 6 ? 'Password must be at least 6 characters' : '';
    } else if (name === 'confirmPassword') {
      newErrors.confirmPassword = value !== formData.password ? 'Passwords do not match' : '';
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate all fields before submission
    const { name, email, password, confirmPassword } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!password.trim() || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Prevent form submission if errors exist
    }

    // Continue with form submission if all validations pass
    try {
      // Your form submission logic...

      // For example, after successful signup:
      // Clear form fields and navigate to the next page
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      alert('Signup successful!');
      navigate('/recipe'); // Redirect to '/recipelist' (replace with your actual route)
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <header>
        <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete='name'
          required
        />
        <br/>
        <br/>
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete='email'
          required
        />
         <br/>
        <br/>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          autoComplete='new-password'
          required
        />
         <br/>
        <br/>
        {errors.password && <p>{errors.password}</p>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          autoComplete='new-password'
          required
        />
         <br/>
        <br/>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit" 
            style={{
                backgroundColor: 'aqua',
                fontSize: '20px',
                padding: '4px',
                
            }}
        >Submit </button>
      </form>
    </header>
  );
};

export default SignupForm;
