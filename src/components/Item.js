import React, { useState } from "react";

const Item = ({ name, category }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return (
    <div>
      <li className={inCart ? "in-cart" : ""}>
        {name} ({category})
      </li>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
