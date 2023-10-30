// ShoppingList.js
import React from "react";

function ShoppingList({ items }) {
  return (
    <div className="Items">
      {items.map((item) => (
        <div key={item.id} className="Item">
          <span className="ItemName">{item.name}</span>
          <span className="ItemCategory">{item.category}</span>
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;

