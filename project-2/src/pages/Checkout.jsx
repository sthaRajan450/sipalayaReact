import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Nepal",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "Bagmati",
    postcode: "",
    phone: "",
    email: "",
    notes: "",
  });
  const cart = useSelector((state) => state.cart.cart);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const subtotal = cart.reduce((sum, item) => {
    const cleanPrice = Number(item.salesprice.toString().replace(/,/g, ""));
    return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="checkout-container flex flex-col md:flex-row p-6 gap-6">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Billing details
        </h2>

        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              First name *
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              Last name *
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Company name (optional)
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Country / Region
          </label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Nepal">Nepal</option>
          </select>
        </div>

        {/* Address */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Street address *
          </label>
          <input
            type="text"
            name="streetAddress"
            value={form.streetAddress}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, etc. (optional)"
            value={form.apartment}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* City */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Town / City *
          </label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* State */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            State / Zone *
          </label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Bagmati">Bagmati</option>
          </select>
        </div>

        {/* Postcode */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Postcode / ZIP (optional)
          </label>
          <input
            type="text"
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">Phone *</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col mt-6">
          <label className="mb-2 text-gray-700 font-medium">
            Email address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Notes */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Additional information
          </h3>
          <label className="mb-2 text-gray-700 font-medium">
            Order notes (optional)
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="3"
            cols="100 "
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          onClick={() => {
            navigate('/payment')
          }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold text-lg py-3 rounded-xl mt-8"
        >
          Complete Payment
        </button>
      </form>

      <div className="bg-gray-100 p-4 rounded mb-4 text-sm">
        <h4 className="font-semibold mb-2">Direct bank transfer</h4>
        <p>
          Make your payment directly into our bank account using your order ID
          as the payment reference.
        </p>
        <p className="mt-2">
          Please send a screenshot of your payment along with your order ID to
          WhatsApp: 9851345671.
        </p>
        <div className="text-sm mt-4">
          <label className="flex items-center">
            <input type="checkbox" required className="mr-2" /> I have read and
            agree to the website terms and conditions.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
