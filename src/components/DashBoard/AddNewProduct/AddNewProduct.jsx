import Select from 'react-select';
import { useState } from 'react';


const AddNewProduct = () => {
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [productImage, setProductImage] = useState([]);


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setGalleryImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleImage= (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setProductImage(imagesArray)
  };

  const removeImage = (indexToRemove) => {
    setGalleryImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };
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

  const handelAddProduct =  async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const price = form.price.value;
    const discountPrice = form.discountPrice.value;
    const productCategory = form.productCategory.value;
    const productBrand = form.productBrand.value;
    const productTags = form.productTags.value;

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
      productCategory,
      productBrand,
      productTags,
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
    <div className=" bg-gray-50 pt-12 pb-4  sm:px-6 ">
      <div className="   bg-white p-4 rounded-lg shadow-md w-full ">
        <h2 className="text-2xl mb-4 font-bold text-gray-800 text-center">Add New Product</h2>
        <form onSubmit={handelAddProduct} className="space-y-6 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Product Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
              <input
                type="text"
                name="title"
                required
                className="mt-1 block w-full px-4 py-2 border border-orange-300  rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>
 
           
            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700"> Product Price</label>
              <input
                type="number"
                name="price"
                required
                className="mt-1 block w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none"
              />
            </div>

            {/* Discount Price */}
            <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Discount Price</label>
              <input
                type="number"
                name="discountPrice"
                className="mt-1 block w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none "
              />
            </div>
            <div className='lg:flex grid-cols-3 gap-3'>
               {/* product Brand */}
             <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Product Brand</label>
              <input
                type="text"
                name="productBrand"
                className="mt-1 block w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none "
              />
            </div>
              {/* product Tags */}
              <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Product Tags</label>
              <input
                type="text"
                name="productTags"
                className="mt-1 block w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none "
              />
            </div>
              {/* product Category */}
              <div>
              <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Product Category</label>
              <input
                type="text"
                name="productCategory"
                className="mt-1 block w-full px-4 py-2 border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none "
              />
            </div>
            </div>
            {/* Product Badge with react-select (Multi-select) */}
            <div>
              <label htmlFor="badge" className="block text-sm font-medium text-gray-700 ">Product Badges</label>
              <Select
                name="badge"
                isMulti
                value={selectedBadges}
                onChange={handleBadgeChange}
                options={badgeOptions}
                className="mt-1 block w-full border border-orange-300 rounded-md shadow-sm focus:border-orange-500 outline-none"
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
              className="mt-1 block w-full px-4 py-2 border border-orange-300  rounded-md shadow-sm focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          {/* Full Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Full Description</label>
            <textarea
              name="description"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-2 border border-orange-300  rounded-md shadow-sm focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          {/* Product Image */}
          <div>
            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
             onChange={handleImage}
              type="file"
              name="productImage"
              accept="image/*"
              required
              className="mt-1 block w-full px-4 py-2 border border-orange-300  rounded-md shadow-sm focus:border-orange-500 outline-none"
            />
              <div className="mt-4 gird-cols-2 grid md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:gird-cols-6 gap-4">
        {productImage.map((image, index) => (
          <div key={index} className="relative h-20 w-20 overflow-hidden rounded-md border border-gray-200">
            <img src={image} alt={`Product ${index + 1}`} className="object-cover " />
            
            {/* Close icon */}
            <button
              onClick={() => removeImage(index)}
              className="absolute top-0 right-1  focus:outline-none"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
          </div>

          {/* Product Gallery Images */}
          <div>
      <label htmlFor="productGallery" className="block text-sm font-medium text-gray-700">
        Product Gallery Images
      </label>
      <input
        type="file"
        name="productGallery"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="mt-1 block w-full px-4 py-2 border border-orange-300  rounded-md shadow-sm focus:border-orange-500 outline-none"
      />

      <div className="mt-4 gird-cols-2 grid md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:gird-cols-6 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative h-20 w-20 overflow-hidden rounded-md border border-gray-200">
            <img src={image} alt={`Product ${index + 1}`} className="object-cover " />
            
            {/* Close icon */}
            <button
              onClick={() => removeImage(index)}
              className="absolute top-0 right-1  focus:outline-none"
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-orange-500 rounded-md hover:dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
