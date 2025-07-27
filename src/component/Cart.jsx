import React, { useContext } from "react";
import { MainContext } from "./Context";

export default function Cart() {
  const { cart, quantityhandler, removeItem } = useContext(MainContext);

  return (
    <div className="bg-gray-100 h-auto py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

        {cart.length === 0 ? (
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            Your cart is empty
          </h1>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4 mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                        </td>
                        <td className="py-4">${item.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => quantityhandler(item.id, 0)}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
                              -
                            </button>
                            <h3>{item.qty}</h3>
                            <button
                              onClick={() => quantityhandler(item.id, 1)}
                              className="border rounded-md py-2 px-4 ml-2"
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
                            className="bg-red-500 text-white py-1 px-3 rounded-md"
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
