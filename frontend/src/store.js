
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// composeWithDevTools(
//     applyMiddleware(...middleware)
//     // other store enhancers if any
//   )


const store = createStore(rootReducer,composedEnhancer)

export default store;