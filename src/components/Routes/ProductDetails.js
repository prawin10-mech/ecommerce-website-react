import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const fetchProductHandler = () => {
    const fetchProduct = async () => {
      const productData = await axios.get(
        `http://localhost:3000/products/${params.productId}`
      );
      setProduct(productData.data);
    };
    fetchProduct();
  };
  useEffect(fetchProductHandler, []);

  return (
    <>
      <div
        key={product.id}
        className="w-25 d-flex flex-column justify-center m-auto text-center"
      >
        <h2>{product.title}</h2>
        <div className="bg-image hover-zoom">
          <img src={product.imageUrl} alt={product.title} width={"250px"} />
        </div>
        <p>${product.price}</p>
      </div>
      <div>
        <h2>Reviews: </h2>
        <ol>
          <li>good product</li>
          <li>Exact size</li>
        </ol>
      </div>
    </>
  );
};

export default ProductDetails;
