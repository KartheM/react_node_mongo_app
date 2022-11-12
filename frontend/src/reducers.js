import todosReducer from './todoReducer'
import { combineReducers } from 'redux'

// export default function rootReducer(state = {}, action) {
//   // always return a new object for the root state
//   return {
//     // the value of `state.todos` is whatever the todos reducer returns
//     todos: todosReducer(state.todos, action),
//   }
// }

const rootReducer = combineReducers({
    todos: todosReducer
  })
  
  export default rootReducer;