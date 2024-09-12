/* 
1. jsx file 이란 js 안의 html 안의 js
2. npm create vite@latest> ~ > npm run dev
*/    


/* compiler 가 html 가져가서 javascript 로 컴파일함 */
import React from "react"
import ReactDom from "react-dom/client"

import App from "./App"

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <div>
    <App />        
  </div>
)