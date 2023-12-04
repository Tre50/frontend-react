import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation (check if passwords match)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please re-enter your password.");
      return;
    }

    // Perform further processing & sending data to the server
    // For demonstration purposes, you can log the form data
    console.log('Form data:', formData);

    // Clear form fields after successful signup for demonstration purposes
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (

    //these are my form buttons and a little inline css
    <header>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br></br>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        style={{ width: '100px', backgroundColor: 'gray', padding: '.5px' }}
        autoComplete='name'
        required
      />
        <br></br>
      <label htmlFor="email">Email:</label>
      <br></br>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        style={{ width: '100px', backgroundColor: 'grey', padding: '.5px' }}
        autoComplete='email'
        required
      />
<br></br>
      <label htmlFor="password">Password:</label>
      <br></br>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        style={{ width: '100px', backgroundColor: 'gray', padding: '.5px' }}
       autoComplete='new-password'
        required
      />
      <br></br>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <br></br>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        style={{ width: '100px', backgroundColor: 'gray', padding: '.5px' }}
        autoComplete='new-password'
        required
      />
      <br></br>
      <br></br>
      <button style={{backgroundColor: 'skyblue'}} type="submit" onClick={handleSubmit}>Submit</button>
      
    </form>
    </header>
  );
};

export default SignupForm;
