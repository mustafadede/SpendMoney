import { useContext } from "react";
import CartContext from "../store/cart-context";

const PersonHeader = ({ name, money }) => {
  const { totalAmount } = useContext(CartContext);
  const formattedMoney = money - totalAmount;
  return (
    <div className="px-4 pt-14 w-full h-auto flex justify-center sticky top-0 bg-slate-300 z-10 shadow-2xl">
      <h1 className="text-4xl lg:text-5xl font-bold text-center relative top-[-20px]">
        Spend {name} Money : {formattedMoney.toLocaleString("en-US")}
      </h1>
    </div>
  );
};

export default PersonHeader;
