
const defaultState = {
  inputValue: '',
  todoList: []
}
const todoReducer = (state = defaultState, action)=> {
  let type = action.type
  // 将state对象赋值到一个空对象中，不直接修改state，而是返回新的state,替换旧的state(react-redux不行，数组新增删除无法触发render)
  // let newState = Object.assign({}, state)
  let newState = JSON.parse(JSON.stringify(state))
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
      // let list = [...newState.todoList]
      // list.splice(action.index, 1)
      // newState.todoList = list
      newState.todoList.splice(action.index, 1)
      break;
    case 'init_todo_list':
      newState.todoList = action.list
      break;
    default:
      // 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state
      return state;
  }
  return newState
}

export default todoReducer