import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../actionTypes'

export const changeInputValueAction = (value)=> {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const addTodoItemAction = ()=> {
  return {
    type: ADD_TODO_ITEM
  }
}

export const deleteTodoItemAction = (index)=> {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}