import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state, need initial state
// reducer - function that used to update store, think of setState
// action - what happened/ what update
// return updated or old state
import { createStore } from 'redux'

import { DECREASE, INCREASE, CLEAR } from './actions.js' 

// dispatch method - send actions to the store
// actions (objects) - MIST HAVE TYPE - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// initial store
const initialStore = {
  count: 0, 
  name: "John"
}


// reducer
function reducer(state, action){
  console.log({ state, action })
  // decide which action to do based on the arg action
  if(action.type === DECREASE){
    // return a copy instead of do state.count -= 1
    // ...state copy all the state value
    return { ...state, count: state.count - 1} 
  }
  if(action.type === INCREASE){
    return { ...state, count: state.count + 1 }
  }
  if(action.type === CLEAR){
    return { ...state, count: 0 }
  }
  // if nothing happened return original state
  return state
}

// store
const store = createStore(reducer, initialStore)
store.dispatch({ type: DECREASE }) // send actions
store.dispatch({ type: INCREASE })
store.dispatch({ type: INCREASE})
store.dispatch({ type: CLEAR})
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
