const BuyItemCard = ({ source, name, money }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const cardItemPrice = money;
  };
  return (
    <div className="container w-90">
      <img className="rounded-xl h-72" src={source}></img>
      <div className=" relative top-[-10px] rounded-b-xl bg-slate-50 pt-2 pb-3">
        <p className=" text-xl text-center">{name}</p>
        <p className=" text-xl text-center py-2">${money}</p>
        <div className="flex justify-evenly">
          <form onSubmit={submitHandler}>
            <button className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black">-</button>
            <button className=" border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-lg text-lg text-black">+</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyItemCard;
