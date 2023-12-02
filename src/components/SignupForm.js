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

    // Perform validation (e.g., check if passwords match)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match. Please re-enter your password.");
      return;
    }

    // Perform further processing (e.g., sending data to the server)
    // For demonstration purposes, you can log the form data
    console.log('Form data:', formData);

    // Clear form fields after successful signup (for demonstration purposes)
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (

    //these are my form buttons and a little css
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br></br>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        style={{ width: '100px', backgroundColor: 'orange', padding: '.5px' }}
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
        style={{ width: '100px', backgroundColor: 'orange', padding: '.5px' }}
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
        style={{ width: '100px', backgroundColor: 'orange', padding: '.5px' }}
        // style={{
        //   backgroundColor: 'orange',
        //   width: '100px', // Adjust width as needed
        //   height: '30px', // Adjust height as needed
        //   padding: '5px', // Adjust padding as needed
        //   borderRadius: '4px', // Optional: Add border-radius for rounded corners
        //   border: '1px solid #ccc' // Optional: Add border for visual distinction
        //}}
        required
      />

      {/* <label htmlFor="confirmPassword">Confirm Password:</label>
      <br></br>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        style={{
          backgroundColor: 'orange',
          width: '100px', // Adjust width as needed
          height: '30px', // Adjust height as needed
          padding: '5px', // Adjust padding as needed
          borderRadius: '4px', // Optional: Add border-radius for rounded corners
          border: '1px solid #ccc' // Optional: Add border for visual distinction
        }}
        required
      /> */}
<br></br>
      <button style={{backgroundColor: 'skyblue'}} type="submit">Submit</button>
      
    </form>
  );
};

export default SignupForm;
