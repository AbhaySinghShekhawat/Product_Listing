import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MainContext } from "./Context";

export default function Details() {
  const [product, setProduct] = useState({});
  const { product_id } = useParams();
  const { addtocart } = useContext(MainContext);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${product_id}`)
      .then((success) => setProduct(success.data))
      .catch((error) => console.error(error));
  }, [product_id]);

  return (
    <section className="py-6 sm:py-10 md:py-16 bg-white antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left: Product Images */}
          <div>
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full rounded-lg object-cover"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 max-w-sm mt-6 lg:max-w-lg mx-auto overflow-x-auto scrollbar-hide">
              {product?.images?.map((image, index) => (
                <img
                  key={index}
                  className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover rounded border border-gray-200 cursor-pointer hover:scale-105 transition"
                  src={image}
                  alt={`Thumbnail ${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="mt-6 sm:mt-8 lg:mt-0">
            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              {product.title}
            </h1>

            {/* Price + Rating */}
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {/* Static Rating (5 stars) */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-300" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">(5.0)</p>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                <FaHeart className="w-5 h-5 mr-2" />
                Add to favorites
              </button>
              <button
                onClick={() => addtocart(product.id)}
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
              >
                Add to cart
              </button>
            </div>

            {/* Divider */}
            <hr className="my-6 md:my-8 border-gray-200" />

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
