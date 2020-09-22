//reduction
export const initialState = {
  basket: [], //initializing the basket list with zero items
  user: null,
};
//gets the total price after adding
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action); //For dubugging console
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item], //used to increase the basket amount
      };

    case "REDUCE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product (id: ${action.id})as basket!");
      }
      return {
        ...state,
        basket: newBasket,
      };
    }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
