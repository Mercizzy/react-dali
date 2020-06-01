import React, { Component, Fragment } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }

    this.refs1 = React.createRef()
  }

  handleChange = (e)=> {
    // console.log(e.target.value);
    // console.log(this.refs1.current.value);
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value
    this.setState((preState)=> ({
      inputValue: value
    }))
  }

  addList = ()=> {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((preState)=> ({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }))
  }

  deleteList = (index)=> {
    // immutable
    // state不允许直接发生改变
    let list = [...this.state.list]
    list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((preState)=> ({ list }))
  }

  renderItem = ()=> {
    return this.state.list.map((item, index)=> {
      return <TodoItem key={ index } item={ item } index={ index } deleteList={ this.deleteList }></TodoItem>
    })
  }

  render() {
    let style = {
      fontSize: "14px"
    }
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容：</label>
          <input id="insertArea" value={ this.state.inputValue } onChange={ this.handleChange } ref={ this.refs1 } />
          <button onClick={ this.addList } style={ style }>提交</button>
        </div>
        <ul>
          { this.renderItem() }
        </ul>
      </Fragment>
    )
  }
}

class TodoItem extends Component {
  render() {
    const { item, index, deleteList } = this.props
    return (
      <li>{ item } <span onClick={ ()=> { deleteList(index) } }>X</span></li>
    )
  }
}

export default TodoList