/* 
1. jsx file 이란 js 안의 html 안의 js
2. npm create vite@latest> ~ > npm run dev
*/    

import React from "react"
/* compiler 가 html 가져가서 javascript 로 컴파일함 */
import ReactDom from "react-dom/client"
import AddCom from "./component";

var date = new Date();
var currentTime = date.getHours()
var greeting
var dynamicCss={
  color:""
}

if(currentTime<12){
  greeting = "Good morning"
  dynamicCss.color = "red"
}else if(currentTime<18){
  greeting = "Good afternoon"
  dynamicCss.color = "green"
}else{
  greeting = "Good night"
  dynamicCss.color = "blue"
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  /* 아래 HTML 을 root div 에 render */
  /* 한번에 하나씩 render 해야함, div 로 묶으면 하나로 취급 */
    <div>
      <h1 className="heading" style={dynamicCss}>{greeting+", it's "+currentTime}</h1>
      <AddCom />
  </div>
)