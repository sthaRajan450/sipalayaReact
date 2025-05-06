import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ added useNavigate
import { BsCart2 } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Box({ course }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="w-[26%] border-2 border-blue-500 rounded-2xl overflow-hidden relative transform hover:-translate-y-2.5 duration-600">
      <div className="absolute top-5 right-5">
        <FaRegBookmark className="text-blue-500 text-4xl bg-gray-200 cursor-pointer p-2 rounded-full hover:text-white hover:bg-blue-600" />
      </div>
      <img src={course.img} alt="" />
      <div className="flex px-5 py-3 text-2xl text-amber-400 gap-1">
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
      <div className="px-5">
        <h1 className="text-[18px] font-bold py-2">{course.title}</h1>
        <p className="pb-3">
          <span className="opacity-50">By</span>{" "}
          <Link className="font-semibold">Sipalaya InfoTech</Link>
        </p>
      </div>
      <div className="border-t-2 border-t-blue-500">
        <div className="px-5 py-3 flex items-center justify-between">
          <h1 className="text-gray-600 font-semibold line-through">
            Rs.{course.originalprice}
          </h1>
          <h1 className="text-orange-600 font-semibold">
            Rs.{course.salesprice}
          </h1>
          <button
            onClick={() => {
              dispatch(addToCart({ ...course, id: course.id || Date.now() }));

              navigate("/cart");
            }}
            className="flex items-center border-2 border-blue-400 px-3 py-2 rounded-2xl text-blue-500 font-semibold gap-2 hover:text-white hover:bg-blue-600 hover:outline-0"
          >
            <BsCart2 />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
