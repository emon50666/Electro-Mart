import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useProductDetails = (products) => {
  const axiosPublic = useAxiosPublic();
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(products)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const promises = products.map((product) =>
          axiosPublic.get(`/products/${product.mainProductId}`)
        );

        const responses = await Promise.all(promises);

        // console.log(responses)

        // Extract data from each response and set it in productDetails
        setProductDetails(responses.map((response) => response.data));
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (products && products.length > 0) {
      fetchProductDetails(); // Fetch product details when products data is available
    } else {
      setIsLoading(false); // Stop loading if no products to fetch
    }
  }, [axiosPublic, products]); // Only run this effect when `products` changes

  return { productDetails, isLoading };
};

export default useProductDetails;
