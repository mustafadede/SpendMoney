const PersonHeader = ({ name, money }) => {
  return (
    <div className=" w-full h-auto flex justify-center">
      <h1 className="text-5xl pt-9 font-bold text-center relative top-[-20px]">
        Spend {name} Money : {money}
      </h1>
    </div>
  );
};

export default PersonHeader;
