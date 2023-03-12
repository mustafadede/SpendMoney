import { useContext, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  id: 0,
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount = state.totalAmount + action.item.money;
    const updatedArray = state.items.concat(action.item);
    return {
      items: updatedArray,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const updatedItemsIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[updatedItemsIndex];
    const updatedAmount = state.totalAmount - existingCartItem.money;

    const newItems = state.items.filter((_, id) => id !== updatedItemsIndex);

    return {
      items: newItems,
      totalAmount: updatedAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
