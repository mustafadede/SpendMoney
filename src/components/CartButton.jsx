import { useState } from "react";
import Modal from "./Modal";
import CartContext from "../store/cart-context";

const CartButton = () => {
  const [modalHandler, setModalHandler] = useState(false);

  const onModalHandler = () => {
    setModalHandler(!modalHandler);
  };

  return (
    <>
      <div className="h-24 z-10 object-contain flex justify-center">
        <button className="px-6 py-3 rounded-xl hover:bg-slate-500 bg-black text-white fixed bottom-[-10px] mb-7 z-50" onClick={onModalHandler}>
          Cart
        </button>
      </div>
      {modalHandler && <Modal />}
    </>
  );
};

export default CartButton;
