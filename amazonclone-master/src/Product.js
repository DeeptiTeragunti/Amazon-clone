import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ key, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: id,
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      {/*Product Definition*/}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {/*Product Star Rating*/}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      {/*Image of Product*/}
      <img src={image} alt="" />

      {/*Button*/}
      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
