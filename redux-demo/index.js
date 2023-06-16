const redux = require("redux");
const createStore = redux.createStore;
const combineReducer= redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 20
// };
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockedCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}
function orderIce(qty) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function restockedIce(qty = 2) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer= combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(rootReducer);

console.log("InitialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockedCake(8));
store.dispatch(orderIce());
store.dispatch(restockedIce(6));
unsubscribe();
