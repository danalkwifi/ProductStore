import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product); // Initialize with product
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore(); // Corrected function name

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
  };

  const handleUpdatedProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct); // Corrected function name
    setIsOpen(false);
    alert(success ? 'Product updated successfully' : `Error: ${message}`);
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="font-semibold text-xl text-gray-600  mb-4">
          ${product.price}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setIsOpen(true)}
          >
            Edit
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600" // Updated color
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="bg-white rounded-lg w-96 p-6">
            <h2 className="text-lg font-bold mb-4">Update Product</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text" // Added type
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name || ''}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                className="p-2 border rounded-lg"
              />
              <input
                type="number" // Added type
                placeholder="Product Price"
                name="price"
                value={updatedProduct.price || ''}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                className="p-2 border rounded-lg"
              />
              <input
                type="text" // Added type
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image || ''}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                className="p-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => handleUpdatedProduct(product._id, updatedProduct)}
              >
                Update
              </button>
              <button
                className="px-4 py-2 bg-gray-200  text-gray-800 rounded-lg hover:bg-gray-300 "
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
