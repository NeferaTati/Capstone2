import { useState } from "react";
import axios from "axios";
const Additems = ()=>{
    const [formData, setFormData] = useState({
        title: '',
        materials: '',
        imageUrl: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(' http://localhost:8080/api/paintings',formData);
            console.log('Form submitted successfully:', response.data);
            setFormData({title: '', materials:'', imageUrl:''})
        } catch (error) {
            console.error('Error submitting form:', error);  
        }

    };
 

console.log("anything")
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Artwork Upload </h2>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              
            </div>
  
            <div className="mb-4">
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <input
                type="text"
                id="materials"
                name="materials"
                value={formData.materials}
                onChange={handleChange}
                placeholder="Materials"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-6">
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

    
    
 


export default Additems