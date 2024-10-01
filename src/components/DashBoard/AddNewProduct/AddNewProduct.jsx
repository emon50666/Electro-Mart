import Select from 'react-select';
import { useState } from 'react';

const AddNewProduct = () => {
  const [selectedBadges, setSelectedBadges] = useState([]);

  // Options for the react-select dropdown
  const badgeOptions = [
    { value: 'new', label: 'New' },
    { value: 'hot', label: 'Hot' },
    { value: '-10%', label: '-10%' },
  ];

  // Handle badge selection (multi-select)
  const handleBadgeChange = (selectedOptions) => {
    setSelectedBadges(selectedOptions);
  };

  const handelAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const discountPrice = form.discountPrice.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;

    // Get the selected product image
    const productImage = form.productImage.files[0];

    // Get all selected product gallery images
    const productGallery = Array.from(form.productGallery.files); // Use Array.from to convert fileList to an array

    // Get the selected badges
    const badges = selectedBadges.map((badge) => badge.value); // Extract the badge values

    // Construct the product data object
    const ProductData = {
      title,
      price,
      discountPrice,
      shortDescription,
      description,
      badges, // Add selected badges here
      productImage,
      productGallery,
    };

    // Log the product data in table form
    console.table(ProductData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="  w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Product</h2>
        <form onSubmit={handelAddProduct} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Product Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
              <input
                type="text"
                name="title"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Discount Price */}
            <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Discount Price</label>
              <input
                type="number"
                name="discountPrice"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Product Badge with react-select (Multi-select) */}
            <div>
              <label htmlFor="badge" className="block text-sm font-medium text-gray-700">Product Badges</label>
              <Select
                name="badge"
                isMulti
                value={selectedBadges}
                onChange={handleBadgeChange}
                options={badgeOptions}
                className="mt-1 block w-full"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              name="shortDescription"
              rows="2"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Full Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Full Description</label>
            <textarea
              name="description"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Product Image */}
          <div>
            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              name="productImage"
              accept="image/*"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Product Gallery Images */}
          <div>
            <label htmlFor="productGallery" className="block text-sm font-medium text-gray-700">Product Gallery Images</label>
            <input
              type="file"
              name="productGallery"
              accept="image/*"
              multiple
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
