import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className="block bg-slate-100 p-6 rounded-lg w-10/12 h-3/4">
      <div className="w-full h-3/4">
        <h1 className="font-bold text-4xl pb-4">Cart</h1>
        <div className="w-full h-4/5 overflow-auto">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="w-full h-1/4 flex justify-between">
        <h1 className="text-3xl font-bold">Total Amount</h1>
        <h2 className="text-3xl font-bold">$64</h2>
      </div>
    </div>
  );
};

export default Cart;
