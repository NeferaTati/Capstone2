import React, { useState } from 'react';
import axios from 'axios';
import RevealLinks from './Contactfooter';

const videoUrl = 'https://res.cloudinary.com/dvvin6oes/video/upload/v1727365109/work/IMG_0220_zz0pli.mp4';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textParagraph: '',
    imageUrl: '',
  });

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
      const response = await axios.post('http://localhost:8080/api/form', formData);
      console.log('Form submitted successfully:', response.data);
      setFormData({ firstName: '', lastName: '', email: '', textParagraph: '', imageUrl: '' });
      // Add a success message or notification here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Add an error message or notification here
    }
  };

  return (
    <div className="relative">
      <div className="relative min-h-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-amber-600 bg-opacity-10 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Commission Form</h2>
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="textParagraph"
                  value={formData.textParagraph}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                ></textarea>
              </div>
              <div className="mb-6">
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="Image URL"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <RevealLinks />
      </div>
    </div>
  );
}

export default ContactUs;