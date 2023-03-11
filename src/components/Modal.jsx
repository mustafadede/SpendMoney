import ReactDOM from "react-dom";
import Cart from "./Cart";

const Backdrop = (props) => {
  return <div className="fixed w-full h-screen bg-slate-700 bg-opacity-25 z-10" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <Cart />
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
