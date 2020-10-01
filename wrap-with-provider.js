import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './src/reducers'


const createStore = () => reduxCreateStore(
    rootReducer,     
    applyMiddleware(thunk)
)


export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}