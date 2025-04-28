import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.salesprice),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">No items in cart.</p>
        ) : (
          <div className="bg-white rounded-lg shadow p-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    Rs.{item.price}
                  </p>
                  <button className="text-blue-600 text-sm mt-2 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full md:w-1/3">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Summary</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between text-gray-600 mb-4">
            <span>Subtotal</span>
            <span>Rs.{total}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
            <span>Total</span>
            <span>Rs.{total}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mb-6"
          >
            Proceed to checkout
          </button>

          <div className="flex">
            <input
              type="text"
              placeholder="Enter coupon"
              className="flex-1 border border-gray-300 rounded-l-lg p-3 focus:outline-none"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-2 rounded-r-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
