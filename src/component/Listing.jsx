import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "./Context";

export default function Listing() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category_slug } = useParams();
  const { addtocart } = useContext(MainContext);

  const limits = 30;

  const getCategory = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let API;
    if (category_slug == null) {
      API = "https://dummyjson.com/products";
    } else {
      API = `https://dummyjson.com/products/category/${category_slug}`;
    }

    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        setProducts(res.data.products);
        setPage(Math.ceil(res.data.total / limits));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category_slug]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products?skip=${pageNo * limits}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNo]);

  useEffect(() => {
    getCategory();
  }, []);

  let pagination = [];
  for (let i = 0; i < page; i++) {
    pagination.push(
      <li
        onClick={() => setPageNo(i)}
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        key={i}
      >
        {i + 1}
      </li>
    );
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-16 lg:gap-y-0 lg:gap-x-8">
            {/* Categories Section */}
            <div className="lg:col-span-1">
              {/* On larger screens, show categories as a list */}
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Categories
              </h2>

              <ul className="space-y-2 mt-4 hidden lg:block">
                <Link to={"/listing"}>
                  <li className="shadow hover:bg-blue-400 hover:text-cyan-50 cursor-pointer p-1">
                    All
                  </li>
                </Link>
                {categories.map((cat, i) => (
                  <Link to={`/listing/${cat.slug}`} key={i}>
                    <li
                      className={`${
                        category_slug === cat.slug
                          ? "bg-blue-400 text-cyan-50"
                          : ""
                      } shadow hover:bg-blue-400 hover:text-cyan-50 cursor-pointer p-1`}
                    >
                      {cat.name}
                    </li>
                  </Link>
                ))}
              </ul>

              {/* On small and medium screens, show dropdown */}
              <div className="lg:hidden mt-4">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
                >
                  Categories
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 space-y-2 bg-white shadow-lg rounded-md py-2">
                    <Link to={"/listing"}>
                      <li className="px-4 py-2 hover:bg-blue-400 hover:text-cyan-50 cursor-pointer">
                        All
                      </li>
                    </Link>
                    {categories.map((cat, i) => (
                      <Link to={`/listing/${cat.slug}`} key={i}>
                        <li
                          className={`${
                            category_slug === cat.slug
                              ? "bg-blue-400 text-cyan-50"
                              : ""
                          } px-4 py-2 hover:bg-blue-400 hover:text-cyan-50 cursor-pointer`}
                        >
                          {cat.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* Products Section */}
            <div className="lg:col-span-5 mt-6 lg:mt-0">
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {loading
                  ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="group relative animate-pulse">
                        <div className="aspect-square w-full rounded-md bg-gray-200 lg:aspect-auto lg:h-80"></div>
                        <div className="mt-4 flex justify-between">
                          <div className="w-full flex justify-between">
                            <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    ))
                  : products.map((product) => (
                      <div key={product.id}>
                        <div className="group relative">
                          <img
                            alt={product.imageAlt}
                            src={product.thumbnail}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                          />
                          <div className="mt-4 flex justify-between">
                            <div className="flex justify-between w-full">
                              <h3 className="text-sm text-gray-700">
                                <Link to={`/details/${product.id}`}>
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                  />
                                  {product.title}
                                </Link>
                              </h3>
                              <p className="text-sm text-gray-500">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => addtocart(product.id)}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Add to cart
                        </button>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-10 text-base">
                {pagination}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
