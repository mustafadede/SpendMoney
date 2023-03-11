import { Fragment } from "react";

const CartItem = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col justify-between py-4 overflow-x-hidden w-full h-auto ">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl">{props.name}</h3>
          <h3 className="text-2xl">{props.money}</h3>
        </div>
      </div>
      <div className="w-full h-[2px] bg-slate-400 rounded-lg"></div>
    </Fragment>
  );
};

export default CartItem;
