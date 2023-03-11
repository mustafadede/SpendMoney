import { useState } from "react";
import Card from "./components/Card";
import { PERSON_DATA, ITEM_DATA } from "./assets/data";
import BuyItemCard from "./components/BuyItemCard";
import PersonHeader from "./components/PersonHeader";
import Header from "./components/Header";
import CartButton from "./components/CartButton";
import CartProvider from "./store/CartProvider";

function App() {
  const [selected, setIsSelected] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState({ name: "", money: "" });

  const onSelectedPerson = (data) => {
    let updatedValues = data;
    setSelectedPerson((prevValues) => ({
      ...prevValues,
      ...updatedValues,
    }));
  };

  return (
    <CartProvider>
      <div className="container mx-auto" id="custom-scroll">
        {selected ? <Header /> : <PersonHeader name={selectedPerson.name} money={selectedPerson.money} />}
        {selected ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 place-items-center py-10">
            {PERSON_DATA.map((item, index) => {
              return <Card key={index} name={item.name} source={item.img} money={item.money} onSelected={onSelectedPerson} onSelectedEvent={setIsSelected} />;
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 place-items-center py-10">
            {ITEM_DATA.map((item, index) => {
              return <BuyItemCard key={index} id={item.id} name={item.name} money={item.money} source={item.img} />;
            })}
          </div>
        )}
        <CartButton />
      </div>
    </CartProvider>
  );
}

export default App;
