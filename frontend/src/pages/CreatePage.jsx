import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const Toast = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg transition-opacity duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          className="ml-4 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const { createProduct } = useProductStore();

  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Auto-close after 3 seconds
  };

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log('Success:', success);
    console.log('Message:', message);

    if (success) {
      showToast(message, 'success');
      setNewProduct({ name: '', price: '', image: '' }); // Reset form
    } else {
      showToast(message, 'error');
    }
    setNewProduct({name: "", price: "", image: ""});
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center space-y-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Create New Product</h1>

        {/* Form Container */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col space-y-5">
            {/* Product Name */}
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            />
            {/* Price */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
            />
            {/* Image URL */}
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 "
            />
            {/* Submit Button */}
            <button
              type="button"
              onClick={handleAddProduct}
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default CreatePage;
