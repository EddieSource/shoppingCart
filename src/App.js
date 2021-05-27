import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// action - what happened/ what update
// return updated or old state
import { createStore } from 'redux'


// dispatch method - send actions to the store
// actions (objects) - MIST HAVE TYPE - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// initial store
const initialStore = {
  count: 78
}

// reducer
function reducer(state, action){
  console.log({ state, action })
  // decide which action to do based on the arg action
  if(action.type === 'DECREASE'){
    // return a copy instead of do state.count -= 1
    return {count: state.count - 1}
  }
  return state
}

// store
const store = createStore(reducer, initialStore)
store.dispatch({type:'DECREASE'})
console.log(store.getState())


function App() {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()}/>
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App;
