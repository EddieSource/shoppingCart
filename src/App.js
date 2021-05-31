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

import { DECREASE, INCREASE } from './actions.js' 
import reducer from './reducer'
// react-redux - Provider - wraps app, connect - used in components
// makes the redux store available to any nested components
import { Provider } from "react-redux"


// dispatch method - send actions to the store
// actions (objects) - MIST HAVE TYPE - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)

// initial store
const initialStore = {
  cart: cartItems, 
  total: 105, 
  amount: 5
}

// store
const store = createStore(reducer, initialStore)
// store.dispatch({ type: DECREASE }) // send actions
// store.dispatch({ type: INCREASE })
// store.dispatch({ type: INCREASE})
// store.dispatch({ type: CLEAR})
// console.log(store.getState())

function App() {
  // cart setup
  
  return (
    // <main>
    //   <Navbar cart={store.getState()}/> // use connect to realize this goal
    //   <CartContainer cart={cartItems} />
    // </main>
    <Provider store={store}>
        <Navbar/>
        <CartContainer/>
    </Provider>
  )
}

export default App;
