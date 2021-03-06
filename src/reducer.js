import { bindActionCreators } from 'redux'
import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTAL } from './actions' 

// reducer
function reducer(state, action){
    console.log({ state, action })
    // decide which action to do based on the arg action
    let newCart = []
    switch(action.type){
        case CLEAR_CART: 
            return { ...state, cart: []}
        case DECREASE: 
            if(action.payload.amount === 1){
                // remove the specific item, use filter
                return {
                    ...state, 
                    cart: state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
                }
            }
            else {
                newCart = state.cart.map((cartItem)=>{
                    if(cartItem.id === action.payload.id){
                        cartItem = {...cartItem, amount: cartItem.amount - 1}
                    }
                    return cartItem
                })
            }

            return {...state, cart: newCart}
        case INCREASE: 
            // no need to remove, just update, so use map
            newCart = state.cart.map((cartItem)=>{
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem
            })
            return {
                ...state, 
                cart: newCart}
        case REMOVE: 
            return {
                ...state, 
                cart: state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
            }
        
        case GET_TOTAL: 
            let { total_price, total_amount } = state.cart.reduce((cartTotal, cartItem)=>{
                const {price, amount} = cartItem    //extract price and amount field from carItem
                cartTotal.total_amount += amount
                cartTotal.total_price += price * amount
                return cartTotal
            }, {
                total_price:0, 
                total_amount:0
            })
            total_price = parseFloat(total_price.toFixed(2))
            // return {...state, total: total, amount: amount}
            return {...state, total_price, total_amount}


        default: // if nothing happened return original state
            return state
        
    }
    // if(action.type === DECREASE){
    //   // return a copy instead of do state.count -= 1
    //   // ...state copy all the state value
    //   return { ...state, count: state.count - 1} 
    // }
    // if(action.type === INCREASE){
    //   return { ...state, count: state.count + 1 }
    // }
    // if(action.type === CLEAR_CART){
    //   return { ...state, cart: [], count: 0 }
    // }
    // // if nothing happened return original state
    // return state
}
export default reducer
