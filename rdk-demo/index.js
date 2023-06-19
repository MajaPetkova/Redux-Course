const store = require("./app/store");
const cakeActions =require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions;


console.log("Initial state", store.getState())
const unsubscribe= store.subscribe(()=>{
    // console.log("Updated State", store.getState())
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(10))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(4))

unsubscribe()