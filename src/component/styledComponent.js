import React, { Component } from 'react';
import styled from 'styled-components'

class StyledComponent extends Component {
  render() {
    // 创建一个 Title 组件,它将渲染一个附加了样式的 <h1> 标签
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    // 创建一个 Wrapper 组件,它将渲染一个附加了样式的 <section> 标签
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;

      .box {
        width: 20px;
        height: 20px;
        background: red;
      }
    `;

    // 传入props值
    const Button = styled.button`
      background: ${ props=> props.primary ? 'palevioletred' : 'white' };
      color: ${ props => props.primary ? "white" : "palevioletred" };

      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;

    // 一个继承 Button 的新组件, 重载了一部分样式
    const TomatoButton = styled(Button)`
      color: tomato;
      border-color: tomato;
    `;

    const ReversedButton = props => <button {...props} children={props.children.split('').reverse()} />

    return (
      <Wrapper>
        <div className="box"></div>
        <ul>
          <li>1111</li>
        </ul>
        <Title>Hello Styled</Title>
        <button>普通按钮</button>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <Button as="a" href="/">Link with Button styles</Button>
        <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
        <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
      </Wrapper>
    )
  }
}

export default StyledComponent