import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MainContext = createContext();

function Context(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    // Load cart from local storage when the component mounts
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products from API
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Add to cart function
  const addtocart = (id) => {
    const existing = products.find((item) => item.id === id);
    if (existing) {
      const cartproduct = cart.find((cd) => cd.id === existing.id);
      if (cartproduct) {
        const updatecart = cart.map((prod) =>
          prod.id === id ? { ...prod, qty: prod.qty + 1 } : prod
        );
        setCart(updatecart);
      } else {
        setCart([...cart, { ...existing, qty: 1 }]);
      }
    }
  };

  // Update quantity (increase/decrease)
  const quantityhandler = (id, flag) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((prod) => {
        if (prod.id === id) {
          if (flag === 1 && prod.qty < 10) {
            return { ...prod, qty: prod.qty + 1 };
          } else if (flag === 0 && prod.qty > 1) {
            return { ...prod, qty: prod.qty - 1 };
          }
        }
        return prod;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((prod) => prod.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
      return updatedCart;
    });
  };

  return (
    <MainContext.Provider
      value={{ addtocart, cart, quantityhandler, removeItem }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export default Context;
export { MainContext };
