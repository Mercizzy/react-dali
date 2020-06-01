
const defaultState = {
  inputValue: '',
  todoList: [
    "get up",
    "have breakfast"
  ]
}
const todoReducer = (state = defaultState, action)=> {
  let type = action.type
  // 将state对象赋值到一个空对象中，不直接修改state，而是返回新的state,替换旧的state
  let newState = Object.assign({}, state)
  switch (type) {
    case undefined: 
      return state
    case 'change_input_value':
      newState.inputValue = action.value
      break;
    case 'add_todo_item':
      newState.todoList.push(newState.inputValue)
      newState.inputValue = ''
      break;
    case 'delete_todo_item':
      newState.todoList.splice(action.index, 1)
      break;
    default:
      // 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state
      return state;
  }
  return newState
}

export default todoReducer