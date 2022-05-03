import React from "react";
import Data from "./Data";
import Item from "./Item";

const ItemsPage = ({ addCart, handleClick }) => {
  const list = Data();

  const itemElements = list.map((item) => {
    return (
      <Item
        key={item.id}
        name={item.name}
        description={item.description}
        id={item.id}
        price={item.price}
        url={item.url}
        handleClick={handleClick}
        addCart={addCart}
      />
    );
  });

  return <div className="items--container">{itemElements}</div>;
};

export default ItemsPage;
