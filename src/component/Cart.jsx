import React, { useContext } from "react";
import { MainContext } from "./Context";

export default function Cart() {
  const { cart, quantityhandler, removeItem } = useContext(MainContext);

  // Center the "empty cart" message vertically
  if (cart.length === 0) {
    return (
      <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-lg sm:text-2xl font-semibold text-gray-600">
          Your cart is empty
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="lg:w-3/4 w-full mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 overflow-x-auto">
              {/* Scrollable Table for small screens */}
              <table className="w-full min-w-[600px] text-sm sm:text-base">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-semibold pb-2">Product</th>
                    <th className="text-left font-semibold pb-2">Price</th>
                    <th className="text-left font-semibold pb-2">Quantity</th>
                    <th className="text-left font-semibold pb-2">Total</th>
                    <th className="text-left font-semibold pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-12 w-12 sm:h-16 sm:w-16 mr-3 rounded-md"
                            src={item.thumbnail}
                            alt={item.title}
                          />
                          <span className="font-medium text-sm sm:text-base">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">${item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => quantityhandler(item.id, 0)}
                            className="border rounded-md py-1 px-2 sm:py-2 sm:px-4 mr-2 hover:bg-gray-200 transition"
                          >
                            -
                          </button>
                          <h3 className="text-sm sm:text-base">{item.qty}</h3>
                          <button
                            onClick={() => quantityhandler(item.id, 1)}
                            className="border rounded-md py-1 px-2 sm:py-2 sm:px-4 ml-2 hover:bg-gray-200 transition"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        ${(item.price * item.qty).toLocaleString()}
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="bg-red-500 text-white py-1 px-2 sm:px-3 rounded-md hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
