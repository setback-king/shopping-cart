import React from "react";
import { Link } from "react-router-dom";

const ShoppingCartItem = ({
  url,
  name,
  price,
  id,
  quantity,
  addQuantity,
  lessQuantity,
  deleteCart,
}) => {
  const styling = { padding: "3px 7px" };

  const totalCost = (quantity * price).toFixed(2);
  return (
    <div className="cart--item" id={id}>
      <div className="contain">
        <img src={url} style={{ height: "100px", width: "100px" }} alt="" />
        <span style={{ marginLeft: "20px" }}>
          <Link
            className="text--link"
            style={{ color: "blue" }}
            to={`/shopping-cart/items/${id}`}
          >
            {name}
          </Link>
        </span>
      </div>
      <div className="contain--quantity">
        <div style={{ width: "60px" }}>${price}</div>
        <div
          id={id}
          style={styling}
          className="quantity"
          onClick={(e) => lessQuantity(e.target.id)}
        >
          -
        </div>
        <div
          className="quantity--amount"
          style={{ marginLeft: "-10px", marginRight: "-10px" }}
        >
          {quantity}
        </div>
        <div
          id={id}
          style={styling}
          className="quantity"
          onClick={(e) => addQuantity(e.target.id)}
        >
          +
        </div>
        <div id={id}>
          <img
            id={id}
            onClick={(e) => deleteCart(e.target.id)}
            className="deleteCart"
            src="itemPhotos/delete.png"
            alt=""
          />
        </div>
        <div className="totalSubTotal">
          <div>${totalCost}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
