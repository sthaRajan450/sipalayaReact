import { useState } from "react";
import { CartContextProvider } from "./context/CartContext";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import Routes from "./Routes";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems([...cartItems, course]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + Number(item.salesprice), 0);
  };

  // const transactionUUID = uuidv4();
  // const totalAmount = getTotalAmount();
  // const taxAmount = 0;
  // const signedFields = "total_amount,transaction_uuid,product_code";
  // const signatureString = `total_amount=${totalAmount},transaction_uuid=${transactionUUID},product_code=EPAYTEST`;
  // const signature = CryptoJS.HmacSHA256(signatureString, "8gBm/:&EnhH.1/q").toString(CryptoJS.enc.Base64);

  return (
    <CartContextProvider value={{ cartItems, addToCart, removeFromCart }}>
      <Routes />

      {/* <form 
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" 
        method="POST"
        className="hidden"
        id="esewa-payment-form"
      >
        <input type="text" name="amount" value={totalAmount - taxAmount} readOnly />
        <input type="text" name="tax_amount" value={taxAmount} readOnly />
        <input type="text" name="total_amount" value={totalAmount} readOnly />
        <input type="text" name="transaction_uuid" value={transactionUUID} readOnly />
        <input type="text" name="product_code" value="EPAYTEST" readOnly />
        <input type="text" name="product_service_charge" value="0" readOnly />
        <input type="text" name="product_delivery_charge" value="0" readOnly />
        <input type="text" name="success_url" value="https://developer.esewa.com.np/success" readOnly />
        <input type="text" name="failure_url" value="https://developer.esewa.com.np/failure" readOnly />
        <input type="text" name="signed_field_names" value={signedFields} readOnly />
        <input type="text" name="signature" value={signature} readOnly />
        <input type="submit" value="Submit" />
      </form> */}
    </CartContextProvider>
  );
}

export default App;
