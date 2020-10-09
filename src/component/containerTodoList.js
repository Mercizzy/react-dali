import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValueAction, addTodoItemAction, deleteTodoItemAction } from '../store/action/todoAction'

class ContainerTodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={ this.props.inputValue } onChange={ this.props.handleChangeInput } />
          <button onClick={ this.props.handleAdd }>提交</button>
        </div>
        <ul>
          { this.props.todoList.map((item, index)=> {
            return (
            <li onClick={ ()=> { this.props.handleDel(index) } } key={ index }>{ item }</li>
            )
          }) }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state)=> {
  return {
    inputValue: state.todoReducer.inputValue,
    todoList: state.todoReducer.todoList
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleChangeInput(e) {
      const value = e.target.value
      dispatch(changeInputValueAction(value))
    },
    handleAdd() {
      dispatch(addTodoItemAction())
    },
    handleDel(index) {
      dispatch(deleteTodoItemAction(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTodoList)