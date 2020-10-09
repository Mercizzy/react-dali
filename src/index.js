import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import AntdTodoList from './component/antdTodoList'
import { Provider } from 'react-redux';
// import ContainerTodoList from './component/containerTodoList'
import store from './store'
import { NormalStyle } from './style'
// import StyledComponent from './component/styledComponent'
import App from './App'
import './images/iconfont/iconfont.css'

// const App = (
//   <Provider store={ store }>
//     <ContainerTodoList />
//     {/* <AntdTodoList /> */}
//   </Provider>
// )

ReactDOM.render(
  <Provider store={ store }>
    <NormalStyle />
    <App />
    {/* <StyledComponent /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
