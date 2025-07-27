import React, { useContext } from "react";
import { MainContext } from "./Context";

export default function Cart() {
  const { cart, quantityhandler, removeItem } = useContext(MainContext);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <h1 className="text-center text-xl sm:text-2xl font-semibold text-gray-600">
            Your cart is empty
          </h1>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4 w-full mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 overflow-x-auto">
                <table className="w-full min-w-[600px] text-sm sm:text-base">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-semibold py-2">Product</th>
                      <th className="text-left font-semibold py-2">Price</th>
                      <th className="text-left font-semibold py-2">Quantity</th>
                      <th className="text-left font-semibold py-2">Total</th>
                      <th className="text-left font-semibold py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-12 w-12 sm:h-16 sm:w-16 mr-4 rounded object-cover"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                            <span className="font-medium text-sm sm:text-base">
                              {item.title}
                            </span>
                          </div>
                        </td>

                        <td className="py-4 text-gray-700">${item.price}</td>

                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => quantityhandler(item.id, 0)}
                              className="border rounded-md py-1 px-3 mr-2 text-sm sm:text-base hover:bg-gray-200"
                            >
                              -
                            </button>
                            <h3 className="text-sm sm:text-base">{item.qty}</h3>
                            <button
                              onClick={() => quantityhandler(item.id, 1)}
                              className="border rounded-md py-1 px-3 ml-2 text-sm sm:text-base hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="py-4 text-gray-700">
                          ${(item.price * item.qty).toLocaleString()}
                        </td>

                        <td className="py-4">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="bg-red-500 hover:bg-red-600 transition text-white py-1 px-3 rounded-md text-sm sm:text-base"
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
