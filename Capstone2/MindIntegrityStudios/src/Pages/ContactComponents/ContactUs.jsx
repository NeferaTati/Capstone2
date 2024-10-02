import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../HomeComponents/Navigation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import { submitContactForm } from '../../../services/api';

const ContactUs = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', /* other fields */ });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData);
      console.log('Form submitted successfully:', response);
      // Handle successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  const handleFileChange = (event) => {
    // Your file handling logic here
    console.log(event.target.files[0]);
  };

  return (
    <div>
    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Comission Form</h2> 
    {/* Contact form */}
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></textarea>
            <input
              type="file"
              name="photos"
              onChange={handleFileChange}
              multiple
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
      </div>
  );
};

export default ContactUs;