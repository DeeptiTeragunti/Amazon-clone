import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  {
    /*used to push the history and for payments*/
  }
  const history = useHistory();
  const [{ basket }] = useStateValue();

  //install npm i react-currrency-format for correct formatting of costs
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Calculating the total items in the bag*/}
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //used to get the Total value
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
