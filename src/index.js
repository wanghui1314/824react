import React from 'react'; //解析jsx语法糖
import ReactDOM from 'react-dom';
import App from './App';

// 这种语法格式就叫做jsx
// var a = <div>我是jsx语法</div>

// render 渲染页面
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
