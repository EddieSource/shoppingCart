import { DECREASE, INCREASE, CLEAR } from './actions.js' 

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
export default reducer
