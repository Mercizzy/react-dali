import React, { Component } from 'react';

// 引入antd样式，以及组件
import 'antd/dist/antd.css'
import { Input, Button, List, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

// 引入本地样式
import '../css/antoList.less'

// 引入store
import store from '../store'
import { changeInputValueAction, addTodoItemAction, deleteTodoItemAction, getInitData } from '../store/action/todoAction'


class AntdTodoList extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState().todoReducer
    // console.log(store.getState());
    
    this.unsubscribe = store.subscribe(() =>
      this.setState(()=> (store.getState().todoReducer))
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  componentDidMount() {
    store.dispatch(getInitData())
  }

  handleInputChange = (e)=> {
    const value = e.target.value
    // this.setState(()=> ({
    //   inputValue: value
    // }))
    // let action = {
    //   type: 'change_input_value',
    //   value
    // }
    store.dispatch(changeInputValueAction(value))
  }
  handleBtnAdd = ()=> {
    // let list = [...this.state.todoList]
    // list.push(this.state.inputValue)
    // this.setState(()=> ({
    //   todoList: list,
    //   inputValue: ''
    // }))
    // let action = {
    //   type: 'add_todo_item'
    // }
    store.dispatch(addTodoItemAction())
  }
  handleDelItem = (index)=> {
    // let list = [...this.state.todoList]
    // list.splice(index, 1)
    // this.setState(()=> ({
    //   todoList: list
    // }))
    // let action = {
    //   type: 'delete_todo_item',
    //   index
    // }
    store.dispatch(deleteTodoItemAction(index))
  }

  render() {
    return (
      <div className="searchWrap">
        <Input 
          className="serachBar" 
          placeholder="todo item" 
          value={ this.state.inputValue } 
          onChange={ this.handleInputChange }
        />
        <Button type="primary" onClick={ this.handleBtnAdd }>提交</Button>
        <List
          className="list"
          bordered
          dataSource={ this.state.todoList }
          renderItem={(item, index) => (
            <List.Item 
              key={ item }
              actions={[<DeleteOutlined onClick={ ()=> { this.handleDelItem(index) } } />]}>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default AntdTodoList