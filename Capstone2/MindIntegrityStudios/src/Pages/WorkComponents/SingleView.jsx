import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleView() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:8080/api/paintings/${id}`);
      const data = await response.json();
      setItem(data);
      console.log(data)
    };

    fetchItem();
  }, [id]);
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/paintings/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        navigate('/'); // Redirect to home page after deletion
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${id}`); // Redirect to update page
  };

  const handleCreate = () => {
    navigate('/create'); // Redirect to create page
  };

if (!item) return <div>Loading...</div>;

return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '75%' }}> {/* 4:3 aspect ratio */}
          {item.imageUrl && (
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          )}
        </div>
        <div className="p-6">
          <span className="text-sm font-semibold text-stone-800">{item.materials}</span>
          <div className="mt-6 flex space-x-4">
            <button 
              onClick={handleUpdate}
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
            <button 
              onClick={handleDelete}
              className="bg-amber-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button 
              onClick={handleCreate}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleView;
