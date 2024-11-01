const timer = setInterval(function () {}, 1000);            //1초마다 함수실행
clearInterval(timer);                                       //실행끝냄

setTimeout(() => {
    console.log("this is example for setTimeOut")           //3초 딜레이후에 실행
}, 3000)