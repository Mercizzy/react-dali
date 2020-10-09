import { SEARCH_FOCUSED, SEARCH_MOUSEIN } from '../actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
})

const headerReducer = (state = defaultState, action)=> {
  switch (action.type) {
    case SEARCH_FOCUSED:
      return state.set('focused', action.value)
    case SEARCH_MOUSEIN:
      return state.set('mouseIn', action.value)
    default:
      break;
  }

  return state
}

export default headerReducer