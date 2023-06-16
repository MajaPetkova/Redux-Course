const redux = require("redux");
const produce= require("immer").produce;
// const createStore = redux.createStore;

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main Str",
    city: "Boston",
    state: "MA",
  },
};
const STREET_UPDATED = "STREET_UPDATED";

const streetUpdate = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    return produce(state, (draft)=>{
     draft.address.street = action.payload
    })
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);
console.log("InitialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(streetUpdate("456 Main Str"));
unsubscribe()
