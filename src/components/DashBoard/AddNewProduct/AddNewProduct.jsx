import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UpdateProductForm from '../../AddCategory&Dicount/UpdateProductForm';
import useCategories from '../../../Hooks/useCategories';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const AddNewProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { categories } = useCategories();
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState([]);
  const [image, setImage] = useState({ array: [] });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm();


  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setValue('addDate', currentDate);
  }, [setValue]);

  const price = watch('price');
  const discountPercentage = watch('discountPercentage');


  const calculateDiscountPrice = () => {
    if (price && discountPercentage) {
      const discountAmount = (price * discountPercentage) / 100;
      return price - discountAmount;
    }
    return '';
  };



  const editorConfiguration = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'bold',
        'italic',
        '|',
        'alignment',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'indent',
        'outdent',
        '|',
        'link',
        'blockQuote',
        'imageUpload',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo',
        'placeholder',
      ],
    },
    image: {
      toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    placeholderConfig: {
      types: ['Name', 'DOB'],
    },
  };










  useEffect(() => {
    const discountPrice = calculateDiscountPrice();
    setValue('discountPrice', discountPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, discountPercentage, setValue]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagesArray = files.map((file) => URL.createObjectURL(file));
    setGalleryImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const removeImage = (indexToRemove) => {
    setGalleryImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const onSubmit = async (data) => {
    try {
      const imgGallery = Array.from(data.gallery);
      const uploaded = imgGallery.map(file => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("tags", `hello, medium, gist`);
        formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

        return axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_COULD_NAME}/image/uploa`, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        }).then(res => {
          const imgData = res.data;
          const imgUrl = imgData.secure_url;
          let specificImage = image.array;
          specificImage.push(imgUrl);
          const newArr = { ...image, specificImage };
          setImage(newArr);
        });
      });
      await axios.all(uploaded);


      const productInfo = {
        title: data.title,
        shortDescription: data.shortDescription,
        fullDescription: data.fullDescription,
        images: image.array,
        quantity: parseInt(data.quantity),
        brand: data.brand,
        category: data.category,
        isHot: data.isHot,
        isNew: data.isNew,
        discountPercentage: parseInt(data.discountPercentage),
        discountPrice: data.discountPrice,
        price: parseInt(data.price),
        addDate: data.addDate,
      };


      const response = await axiosPublic.post("/products", productInfo);

      if (response.data.insertedId) {
        toast.success(`${data.title} is added`);
        navigate("/dashboard/manageProduct");

        reset();
      }

    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Failed to upload product. Please try again.");
    }
  };
  return (
    <div className="bg-gray-50 pt-12 pb-4 sm:px-6">
      <UpdateProductForm />
      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <h2 className="text-2xl mb-4 font-bold text-gray-800 ">Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Gallery Images */}
          <div className='p-2 md:p-8 border rounded-md border-gray-300'>
            <label htmlFor="productGallery" className="block text-sm font-medium text-gray-700">
              Product Gallery Images
            </label>
            <input
              type="file"
              name="productGallery"
              accept="image/*"
              multiple
              {...register("gallery", { required: true })}
              onChange={handleImageChange}
              className="mt-1 block w-full md:w-1/2 px-4 py-2 border-dashed border border-gray-200 rounded-lg shadow-sm focus:border-blue-500 outline-none"
            />
            {errors.gallery && (
              <span className="text-sm text-red-600 font-semibold">
                Fill This Field
              </span>
            )}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-300">
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full" />

                  {/* Close icon */}
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 focus:outline-none text-xs"
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Other Info Input */}
          <div className='p-2 md:p-8 border rounded-md border-gray-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Product Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                {errors.title && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* Product Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Product Price</label>
                <input
                  type="text"
                  name="price"
                  {...register("price", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                />
                {errors.price && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* Discount Price */}
              <div>
                <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">Discount Price</label>
                <input
                  type="number"
                  name="discountPrice"
                  {...register("discountPrice")}
                  readOnly
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                />
              </div>

              {/* Product Brand */}
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Product Brand</label>
                <input
                  type="text"
                  name="brand"
                  {...register("brand", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                />
                {errors.brand && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* Product Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Product Category</label>
                <select
                  name="category"
                  {...register("category", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, idx) =>
                    cat?.newCategory && (
                      <option key={idx} value={cat.newCategory}>
                        {cat.newCategory}
                      </option>
                    )
                  )}
                </select>
                {errors.category && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* quantity */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Product Quantity <sub>Only number</sub></label>
                <input
                  type="text"
                  name="quantity"
                  {...register("quantity", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                />
                {errors.quantity && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>
              {/* Add Date */}
              <div>
                <label htmlFor="addDate" className="block text-sm font-medium text-gray-700">Adding Date</label>
                <input
                  type="date"
                  name="addDate"
                  {...register("addDate", { required: true })}
                  readOnly
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                />
              </div>

              {/* is hot */}
              <div>
                <label htmlFor="isHot" className="block text-sm font-medium text-gray-700">Hot Badge</label>
                <select
                  name="isHot"
                  {...register("isHot", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                >
                  <option value="">Select a One</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.isHot && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* is hot */}
              <div>
                <label htmlFor="isNew" className="block text-sm font-medium text-gray-700">New Badge</label>
                <select
                  name="isNew"
                  {...register("isNew", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                >
                  <option value="">Select a One</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.isNew && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>

              {/* Offer percent */}
              <div>
                <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Discount Percentage</label>
                <select
                  name="discountPercentage"
                  {...register("discountPercentage", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 outline-none"
                >
                  <option value="">Select a Percentage</option>
                  <option value="0">0</option>
                  {categories.map((cat, idx) =>
                    cat?.newDiscount && (
                      <option key={idx} value={cat.newDiscount}>
                        {cat.newDiscount}
                      </option>
                    )
                  )}
                </select>
                {errors.discountPercentage && (
                  <span className="text-sm text-red-600 font-semibold">
                    Fill This Field
                  </span>
                )}
              </div>
            </div>

            {/* Short Description */}
            <div className='mt-6'>
              <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
              <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data=""
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValue('shortDescription', data);
                }}
              />
              {errors.shortDescription && (
                <span className="text-sm text-red-600 font-semibold">
                  Short Description is Required
                </span>
              )}
            </div>


            {/* Full Description */}
            <div className="mt-6">
              <label
                className="block text-sm font-medium text-gray-700"
              >
                Full Description
              </label>

              <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data=""
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setValue('fullDescription', data);

                }}
              />

              {errors.fullDescription && (
                <span className="text-sm text-red-600 font-semibold">
                  Fill This Field
                </span>
              )}
            </div>


          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
