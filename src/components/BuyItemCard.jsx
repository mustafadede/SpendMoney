import { useContext } from "react";
import CartContext from "../store/cart-context";

const BuyItemCard = ({ id, source, name, money }) => {
  const CartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const onClickHandler = () => {
    CartCtx.addItem({
      id: id,
      name: name,
      money: money,
    });
  };
  return (
    <div className="container w-90 p-5">
      <img className="rounded-xl h-72" src={source}></img>
      <div className=" relative top-[-10px] rounded-b-xl bg-slate-50 pt-2 pb-3">
        <p className=" text-xl text-center">{name}</p>
        <p className=" text-xl text-center py-4">${money.toLocaleString("en-US")}</p>
        <div className="flex justify-evenly">
          <form onSubmit={submitHandler} className="flex gap-14">
            <button className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black">-</button>
            <button className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black" onClick={onClickHandler}>
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyItemCard;
