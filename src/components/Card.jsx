const Card = ({ source, name, money, onSelected, onSelectedEvent }) => {
  const onClickHandler = (data) => {
    onSelected({ name, money });
    onSelectedEvent(false);
  };
  return (
    <div
      className=" w-72 h-72 max-h-72 rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer mb-5"
      onClick={() => onClickHandler(name, money)}
    >
      <img className=" bg-cover object-cover bg-center w-full h-56 rounded-t-lg" src={source}></img>
      <div className=" w-full h-16 rounded-b-lg bg-yellow-50 flex justify-center items-center text-black text-3xl">{name}</div>
    </div>
  );
};

export default Card;
