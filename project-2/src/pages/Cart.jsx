import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const subtotal = cart.reduce((sum, item) => {
    const cleanPrice = Number(item.salesprice.toString().replace(/,/g, ""));
    return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0);
  
  

  return (
    <div className="flex justify-between p-10 gap-10">
      {/* Cart Items */}
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        {cart.map((course) => (
          <div key={course.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow mb-4">
            <div className="flex items-center gap-6">
              <img src={course.img} alt={course.title} className="w-24 h-24 object-cover rounded" />
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600">Rs. {course.salesprice}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(course.id))}
              className="text-blue-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="w-1/3 bg-white p-6 rounded-lg shadow h-fit">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-xl font-bold mb-6">
          <span>Total</span>
          <span>Rs. {subtotal}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold mb-4 hover:bg-blue-700" onClick={()=>{
          navigate('/checkout')
        }}>
          Proceed to checkout
        </button>
        
      </div>
    </div>
  );
};

export default Cart;
