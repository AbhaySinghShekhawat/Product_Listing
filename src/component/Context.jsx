import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MainContext = createContext();

function Context(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch all products initially (not mandatory for addtocart now)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  /**
   * Add to Cart
   * - Accepts either product object (preferred) or id (fallback).
   * - If only id is passed, fetch product by ID.
   */
  const addtocart = async (item) => {
    try {
      let productData;

      // If full product object is passed
      if (typeof item === "object" && item.id) {
        productData = item;
      } else {
        // If ID is passed, fetch product from API
        const res = await axios.get(`https://dummyjson.com/products/${item}`);
        productData = res.data;
      }

      // Check if product already in cart
      const existing = cart.find((p) => p.id === productData.id);

      if (existing) {
        // Increase quantity
        setCart(
          cart.map((p) =>
            p.id === productData.id ? { ...p, qty: p.qty + 1 } : p
          )
        );
      } else {
        // Add new product with qty 1
        setCart([...cart, { ...productData, qty: 1 }]);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  /**
   * Quantity Handler
   * flag = 1 → increase qty (max 10)
   * flag = 0 → decrease qty (min 1)
   */
  const quantityhandler = (id, flag) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          if (flag === 1 && item.qty < 10) {
            return { ...item, qty: item.qty + 1 };
          } else if (flag === 0 && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          }
        }
        return item;
      })
    );
  };

  /**
   * Remove Item from Cart
   */
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <MainContext.Provider
      value={{
        addtocart,
        cart,
        quantityhandler,
        removeItem,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default Context;
export { MainContext };
