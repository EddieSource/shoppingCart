import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux"
import { CLEAR_CART, GET_TOTAL} from "../actions.js"

const CartContainer = ({ cart = [], total_price, dispatch }) => {
  // run each time when the component is rerendered
  React.useEffect(()=>{
    dispatch({ type: GET_TOTAL })
  })
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total_price}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch({type:CLEAR_CART})}>clear cart</button>
      </footer>
    </section>
  );
};

//map state from the store to the data input of the component
const mapStateToProps = (store) => {
  return {cart: store.cart, total_price: store.total_price}
}

//The connect() function connects a React component to a Redux store. 
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store. 
// export the connected component
export default connect(mapStateToProps)(CartContainer); 
