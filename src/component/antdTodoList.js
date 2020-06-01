import React, { Component } from 'react';

// 引入antd样式，以及组件
import 'antd/dist/antd.css'
import { Input, Button } from 'antd';

class AntdTodoList extends Component {

  render() {
    return (
      <div>
        <Input placeholder="todo iten" />
        <Button type="primary">提交</Button>
      </div>
    )
  }
}

export default AntdTodoList