import React, { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import CryptoJS from "crypto-js";
import { useSelector } from "react-redux";

const Payment = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = cart.reduce((sum, item) => {
    const cleanPrice = Number(item.salesprice.toString().replace(/,/g, ""));
    return sum + (isNaN(cleanPrice) ? 0 : cleanPrice);
  }, 0);
  const [formData, setFormData] = useState({
    amount: subtotal,
    tax_amount: "0",
    total_amount: subtotal,
    transaction_uuid: uuidV4(),
    product_service_charge: "0",
    product_delivery_charge: "0",
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/paymentsuccess",
    failure_url: "http://localhost:5173/paymentfailure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const generateSignature = (
    total_amount,
    transaction_uuid,
    product_code,
    secret
  ) => {
    const hashString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const hash = CryptoJS.HmacSHA256(hashString, secret);
    const hashedSignature = CryptoJS.enc.Base64.stringify(hash);
    return hashedSignature;
  };

  useEffect(() => {
    const { total_amount, transaction_uuid, product_code, secret } = formData;

    const hashedSignature = generateSignature(
      total_amount,
      transaction_uuid,
      product_code,
      secret
    );

    setFormData((prev) => ({ ...prev, signature: hashedSignature }));
  }, [formData.amount]);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 my-10 m-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        eSewa Payment
      </h2>

      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="signed_field_names"
          value={formData.signed_field_names}
        />
        <input type="hidden" name="signature" value={formData.signature} />

        <div>
          <label className="text-gray-700 font-medium">Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                amount: e.target.value,
                total_amount: e.target.value,
              }))
            }
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Tax Amount</label>
          <input
            type="text"
            name="tax_amount"
            value={formData.tax_amount}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Total Amount</label>
          <input
            type="text"
            name="total_amount"
            value={formData.total_amount}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Transaction UUID</label>
          <input
            type="text"
            name="transaction_uuid"
            value={formData.transaction_uuid}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
        </div>

        <input
          type="hidden"
          name="product_code"
          value={formData.product_code}
        />
        <input
          type="hidden"
          name="product_service_charge"
          value={formData.product_service_charge}
        />
        <input
          type="hidden"
          name="product_delivery_charge"
          value={formData.product_delivery_charge}
        />
        <input type="hidden" name="success_url" value={formData.success_url} />
        <input type="hidden" name="failure_url" value={formData.failure_url} />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition duration-200 text-white font-semibold text-lg py-3 rounded-lg"
        >
          Pay with eSewa
        </button>
      </form>
    </div>
  );
};

export default Payment;
