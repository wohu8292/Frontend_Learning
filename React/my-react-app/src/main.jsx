/* 
1. jsx file 이란 js 안의 html 안의 js
2. npm create vite@latest> ~ > npm run dev
*/

import React from "react"
/* compiler 가 html 가져가서 javascript 로 컴파일함 */
import ReactDom from "react-dom/client"


const name = "WoongKyeol"
const comment = "How are you?"
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  /* 아래 HTML 을 root div 에 render */
  /* 한번에 하나씩 render 해야함, div 로 묶으면 하나로 취급 */
    <div>
    <h1>Hello {name+"_ "+comment}</h1>
    <h1>Hello {`${name}, ${comment}`}</h1>
    {/* {} = interpret html to js expression, but statement*/}
    <ul>
      <li>Test1</li>
      <li>Test2</li>
      <li>Test3</li>
    </ul>
  </div>
)