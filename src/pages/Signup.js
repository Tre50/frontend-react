// import React, { useState } from 'react';

// const Signup = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     // Add other fields as needed for signup
//   });

//   // Function to handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform signup logic here (e.g., send data to backend)
//     console.log('Signup form submitted with data:', formData);
    
//     fetch ('https://backend-events2.web.app/addUser',{ method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),} )
//   };

//   return (

//     <div>


//     <form onSubmit={handleSubmit}>
//       {/* Form fields for signup */}
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         required
//       />

//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleInputChange}
//         required
//       />

//       {/* Other signup fields and a submit button */}
//       <button type="submit" style={{backgroundColor:'skyblue'}}   >SignUp</button>
//     </form>
//     </div>
//   );
// };

// export default Signup;
