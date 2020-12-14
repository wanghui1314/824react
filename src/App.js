
import './App.css'

function App() {
  // 变量的定义
  let name = '张三'
  let age = 20;
  let price = 28.998
  let img = 'https://www.baidu.com/img/fddong_e2dd633ee46695630e60156c91cda80a.gif'
  let arrList = [
    {
      id: 1,
      name: '李四',
      age: 23
    },
    {
      id: 2,
      name: '王五',
      age: 33
    },
    {
      id: 3,
      name: '赵六',
      age: 12
    },
    {
      id: 4,
      name: '王麻子',
      age: 45
    },
  ]

  let liList = [
    <div key='1'>a</div>,
    <div key='2'>b</div>,
    <div key='3'>c</div>,
    <div key='4'>d</div>,
  ]
  // 要循环arrList 并且把内容添加到页面上
  let liArr = arrList.map((item, index) => {
    return <p key={index}>{item.name}</p>
  })

  let isGood = true

  let n = 1;
  let cate = ['美妆护肤', '家用电器', '办公用品', '运动健身']


  let json = {
    background: 'yellow',
    fontSize: '50px'
  }


  return (
    <div className="App">
      {/* 这是注释的写法 */}
      {/* 1.非表单元素 span div p 采用{} 可以表达式，变量，三目 */}
      <div>姓名:{name}</div>
      <p>年龄:{age}</p>
      <div>价格:{price.toFixed(2)}</div>
      <p>{price > 30 ? '太贵了' : '还可以'}</p>
      {/* 媒体元素的使用 img */}
      <img src={img} alt="" aa={name} />
      {/* 条件渲染 */}
      {arrList.length === 0 ? <div>暂无数据</div> : <p>有数据</p>}
      {/* 列表渲染 */}
      {liList}
      <hr />
      {liArr}

      <hr />
      <hr />

      <ol>
        {
          arrList.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })
        }
      </ol>

      {/* 动态类名 */}
      <div className='content'>好好学习，天天向上</div>

      <div className={isGood ? 'select fontS' : 'unselect fontS'}>今天天气挺好的！</div>

      {/* 实现各行变色  arrList */}
      <ul>
        {
          arrList.map((item, index) => {
            return <li key={item.id} className={index % 2 === 0 ? 'select' : 'unselect'}>{item.name}</li>
          })
        }
      </ul>
      {/* 循环增加选中的样式 */}
      <div className='box'>
        {
          cate.map((item, index) => {
            return <p key={index} className={index === n ? 'select box_item' : 'box_item'}>{item}</p>
          })
        }
      </div>

      {/* 行内样式 */}
      {/* 下面是错误的写法 */}
      {/* <div style='background:pink'>白日依山尽，黄河入海流</div> */}
      <div style={{ background: 'pink' }}>白日依山尽，黄河入海流</div>
      <div style={json}>欲穷千里目，更上一层楼</div>
      <div>这是用来提交代码（第二次）</div>
    </div>
  );
}

export default App;
