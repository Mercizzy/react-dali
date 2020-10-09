import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import headerReducer from './headerReducer'

export default combineReducers({
  todoReducer,
  headerReducer
})