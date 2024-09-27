import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { shuffleChars } from '../components/textshuffle';

// Use shuffleChars in your page component
// function ContactUs() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleMenu = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <>

// <button className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </button>
//       import React, { useState } from 'react';
// import axios from 'axios';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         message: '',
//         additionalFiles: null, // For file uploads
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setFormData({ ...formData, additionalFiles: e.target.files });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const formDataToSend = new FormData();
//         formDataToSend.append('firstName', formData.firstName);
//         formDataToSend.append('lastName', formData.lastName);
//         formDataToSend.append('phoneNumber', formData.phoneNumber);
//         formDataToSend.append('message', formData.message);
        
//         // Append files if any
//         if (formData.additionalFiles) {
//             for (let i = 0; i < formData.additionalFiles.length; i++) {
//                 formDataToSend.append('additionalFiles', formData.additionalFiles[i]);
//             }
//         }

//         try {
//             const response = await axios.post('http://localhost:8080/api/form/submit', formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Form submitted successfully:', response.data);
//             // Reset form or show success message
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div className="contact-us">
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="tel"
//                     name="phoneNumber"
//                     placeholder="Phone Number"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="message"
//                     placeholder="Your message..."
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="file"
//                     name="additionalFiles"
//                     onChange={handleFileChange}
//                     multiple // Allow multiple file uploads
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactUs;



// export default ContactUs;
