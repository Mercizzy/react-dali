import { SEARCH_FOCUSED, SEARCH_MOUSEIN } from '../actionTypes'

export const changeSearchFocused = (value)=> {
  return {
    type: SEARCH_FOCUSED,
    value
  }
}
export const changeSearchMouse = (value)=> {
  return {
    type: SEARCH_MOUSEIN,
    value
  }
}