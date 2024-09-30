import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { submitContactForm } from '../../../services/api';

function Contact() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', /* other fields */ });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header with menu toggle */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">MindIntegrityStudios</Link>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? '✕' : '☰'}
          </button>
          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
              <li><Link to="/work" className="hover:text-blue-500">Work</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-2">
            <ul className="space-y-2">
              <li><Link to="/" className="block hover:text-blue-500" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="block hover:text-blue-500" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/contact" className="block hover:text-blue-500" onClick={toggleMenu}>Contact</Link></li>
              <li><Link to="/work" className="block hover:text-blue-500" onClick={toggleMenu}>Work</Link></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Contact form */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
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
          {/* Add other form fields here */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;