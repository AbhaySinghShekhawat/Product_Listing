import React, { useContext } from "react";
import { MainContext } from "./Context";

export default function Cart() {
  const { cart, quantityhandler, removeItem } = useContext(MainContext);

  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <h1 className="text-center text-lg sm:text-2xl font-semibold text-gray-600">
            Your cart is empty
          </h1>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-3/4 mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 overflow-x-auto">
                {/* Make table scrollable on mobile */}
                <table className="w-full min-w-[600px] text-sm sm:text-base">
                  <thead>
                    <tr className="text-gray-700">
                      <th className="text-left font-semibold pb-2">Product</th>
                      <th className="text-left font-semibold pb-2">Price</th>
                      <th className="text-left font-semibold pb-2">Quantity</th>
                      <th className="text-left font-semibold pb-2">Total</th>
                      <th className="text-left font-semibold pb-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-200 hover:bg-gray-50"
                      >
                        {/* Product Column */}
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <img
                              className="h-12 w-12 sm:h-16 sm:w-16 rounded object-cover"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                            <span className="font-semibold text-gray-800 text-sm sm:text-base">
                              {item.title}
                            </span>
                          </div>
                        </td>

                        {/* Price Column */}
                        <td className="py-4 text-gray-700 text-sm sm:text-base">
                          ${item.price}
                        </td>

                        {/* Quantity Column */}
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => quantityhandler(item.id, 0)}
                              className="border rounded-md py-1 px-2 sm:py-2 sm:px-4 mr-2 text-sm sm:text-base"
                            >
                              -
                            </button>
                            <h3 className="text-sm sm:text-base">{item.qty}</h3>
                            <button
                              onClick={() => quantityhandler(item.id, 1)}
                              className="border rounded-md py-1 px-2 sm:py-2 sm:px-4 ml-2 text-sm sm:text-base"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Total Column */}
                        <td className="py-4 text-gray-700 text-sm sm:text-base">
                          ${(item.price * item.qty).toLocaleString()}
                        </td>

                        {/* Action Column */}
                        <td className="py-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 sm:py-1 sm:px-3 rounded-md text-sm sm:text-base"
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
        )}
      </div>
    </div>
  );
}
