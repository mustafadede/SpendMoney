import { useContext, useState } from "react";
import CartContext from "../store/cart-context";

const BuyItemCard = ({ id, item, source, name, money }) => {
  const [buyItems, setBuyItems] = useState(0);
  const CartCtx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const onAddHandler = () => {
    setBuyItems(buyItems + 1);
    CartCtx.addItem(item);
  };

  const onRemoveHandler = (id) => {
    if (buyItems > 0) {
      setBuyItems(buyItems - 1);
      CartCtx.removeItem(id);
    }
  };
  return (
    <div className="container max-w-90 p-5">
      <img className="rounded-xl h-72" src={source}></img>
      <div className=" relative top-[-10px] rounded-b-xl bg-slate-50 pt-2 pb-3">
        <p className=" text-xl text-center">{name}</p>
        <p className=" text-xl text-center py-4">${money.toLocaleString("en-US")}</p>
        <div className="flex justify-evenly">
          <form onSubmit={submitHandler} className="flex gap-6">
            <button
              className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black"
              onClick={onRemoveHandler.bind(null, id)}
            >
              -
            </button>
            <p className=" font-bold text-4xl">{buyItems}</p>
            <button
              className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black"
              onClick={onAddHandler.bind(null, item)}
            >
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyItemCard;
