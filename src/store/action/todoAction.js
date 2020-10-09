import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from '../actionTypes'
// 引入axios
import axios from 'axios'

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

export const initTodoListAction = (list)=> {
  return {
    type: INIT_TODO_LIST,
    list
  }
}

// 获取异步数据
export const getInitData = ()=> {
  return (dispatch)=> {
    axios.get('http://localhost.charlesproxy.com:3000/api/list.json').then((res)=> {
      dispatch(initTodoListAction(res.data))
    }).catch((err)=> {
      console.log(err);
    })
  }
}