import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        {/*checkout ad*/}
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          <FlipMove
            duration={400}
            appearAnimation="accordionVertical"
            staggerDurationBy="20"
            typeName="u1"
            leaveAnimation="elevator"
          >
            {basket?.map((item, index) => (
              <li>
                <CheckoutProduct
                  key={item.key}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </li>
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
