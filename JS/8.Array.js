//define Array

//Array Literal: 
let arr1 = ["a", "b", "c"];
//Array Constructor: 
let arr2 = new Array("a", "b", "c");
//Array.of:
let arr3 = Array.of(1, 2, 3);
//Array.from:
let arr4 = Array.from("hello");

//__________________________________

//Array 요소조정
arr1.push("d")
arr1.pop()
arr3.unshift(0)         //맨앞에 추가
arr3.shift()            //맨앞에 제거후, 남은요소들 index 당겨서 반환

//__________________________________

//Array.fill()
arr=["a","b","c","d","e"]
arr.fill("g",1,3)       //[a,g,g,d,e]
arr.fill("h")           //[h,h,h,h,h]
arr.fill("k",1)         //[a,k,k,k,k]
                        //앞에선 index 0번부터, 뒤에선 index -1번부터

//__________________________________

//array.cocnat()
arr4=[1,2,3]
const arr5 = arr4.concat('abc')     //[1,2,3,'abc']

//spread Operator
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const arr8 = [...arr6, ...arr7]

//push
const arr9 = [1, 2, 3];
const arr10 = [4, 5, 6];
arr9.push(arr10)                //[1,2,3,[4,5,6]]

//__________________________________

//array.indexOf(), .lastIndexOf()
const arr11 = [1, 1, '1', 1];
arr11.indexOf('1')          //2, 없으면 -1
arr11.indexOf(1)            //0 /처음부터 검색
arr11.lastIndexOf(1)        //3 /끝부터 검색