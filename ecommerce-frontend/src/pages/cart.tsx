import { useState } from "react";

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18)
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;
const Cart = () => {

  const [cuponCode  , setCuponCode] = useState<string>("");
  const [isValidcuponCode  , setisValidCuponCode] = useState<boolean>(false);
  
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal:  Rs{subtotal}</p>
        <p>ShippingCharges:  Rs{shippingCharges}</p>
        <p>Tax: Rs{tax}</p>
        <p>
          Discount: <em> - Rs{discount}</em>
        </p>
        <p>
          <b>Total: Rs{total}</b>
        </p>
        <input type="text" value={cuponCode} onChange={(e)=> setCuponCode(e.target.value)} />
      </aside>
    </div>
  )
}

export default Cart
