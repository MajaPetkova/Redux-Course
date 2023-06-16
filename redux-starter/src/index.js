import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

// console.log(store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Store changed!", store.getState())
})

store.dispatch(bugAdded("Bug1"))
store.dispatch(bugRemoved(1))
unsubscribe()

