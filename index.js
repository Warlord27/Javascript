//1.way to print js
//console.log("hello word",4+6,"another log");
// alert("me"); 
// document .write("this is document write");

//2. console api of JavaScript 
//console.log("hello word",4+6,"another log");
// alert("me"); 
// document .write("this is document write");
//console.warn("this a warning");
//console.error("this is an error");

//3. Javascript variable container to stores data values
//4. datatype in Javascript
//Numbers
let number1 = 34;
let number2 = 62;
// console.log(number2+number1);

//string
let str1 = "ths is a string";
let str2 = 'ths is also string';

//objects
let marks = {
    Ravi: 34,
    Shubham: 78,
    Harry: 99.977
}

//booleans
let a = true;
let b = false;
// console.log(a,b);
let und;
let und2 = undefined;
// console.log(marks);
// console.log(und2);

let n = null;
// console.log(n);


/*at a very high level, there are two types of data types in javascript
1.primitive:undefined,null,number,string,boolean,symbol
2.Reference:arraya and object
*/

let arr = [1, 2, 3, 4, "bablu", "Tanbir", 7, 8, 9,];
// console.log(arr);

// operator in Jvascript
//arithmetic operator

let a = 500;
let b = 100;
/*console.log("The valuae of a + b",a+b);
console.log("The valuae of a - b",a-b);
console.log("The valuae of a / b",a/b);
console.log("The valuae of a * b",a*b);*/

//Assingment Operators

let c = b;
//c+= 250;
//c-= 250;
//c*= 250;
//c/= 250;
// console.log(c);

let x = 34;
let y = 56;
/*console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x < y);
console.log(x > y);*/
// logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false|| true);
// console.log(false|| false);

//logical not
// console.log(!false)
// console.log(!true)

//Function in javascript
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// conditional in Javascript

// var age = 31;
//if else tabele
/*if(age > 18){
    console.log('you are not a kid');
}
else{
    console.log('you are a kid')
}
*/
//single if statement

// if(age > 18){
//     console.log('you are not a kid');
// }

// if-else ladder
// if(age >32){
//     console.log("you are not a kid")
// }
// else if(age >26){
//     console.log("Bache nahi rahe");
// }
// else if(age >22){
//     console.log("yes Bache nahi rahe");
// }
// else if(age >18){
//     console.log("18 Bache nahi rahe");
// }
// else{
//     console.log("bache rahe")
// }
// console.log("end of ladder")
//var arr = [1, 2, 3, 4, 5, 6, 7];
//for(var i = 0;i<arr.length;i++){
//    if(i==2){
        //break;
//        continue;
//    }
    // console.log(arr[i])
//}


// arr.forEach(function (element) {
//     console.log(element)
// })

// const ac = 0;
// ac++
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;   
// }

// do{
//     console.log(arr[j])
//     j++;
// }while(j<arr.length);

//Array method
let myArr = ["fan", "camera",34,null,true];
// myArr.pop();
// myArr.push("fardin");
const newLen = myArr.unshift("fardin");
// console.log(newLen);
// console.log(myArr);

// string method is js

let mylovelystring = "Harry is a  good boy Harry";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("boy"))
// console.log(mylovelystring.lastIndexOf("good"))

// console.log(mylovelystring.slice(1,6))

d = mylovelystring.replace("Harry" ,"Rohan");
// d = d.replace("good","bad");
// console.log(d, mylovelystring)

// date of js

let myDate = new Date();
/*console.log(myDate)
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());*/

let elem = document.getElementById('click');

// console.log(elem);

let elemclass = document.getElementsByClassName("container")

// console.log(elemclass)
// elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.remove("text");
// elemclass[0].classList.add("text");

/*console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);*/

tn = document.getElementsByTagName('div');
// console.log(tn)
createdElement = document.createElement('b');
createdElement.innerText = "this is a created para"
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created bold"
tn[0].replaceChild(createdElement2,createdElement);


// removeChild(element); ----> remove an element

// selecting using query
// sel = document.querySelector(".container")
// console.log(sel);

// events in javaScript

// function clicked(){
//     console.log('button was clicked')
// }

// window.onload = function(){
//     console.log('document was clicked')

// }

// firstcontainer.addEventListener('click',function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//      console.log("click hua")
//  })

// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out of  container")
// })

// let prevHTMl = document.querySelectorAll('.container')[1].innerHTML;


// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTMl;
//     console.log("mouse up when clicked on container")
// })
// firstcontainer.addEventListener('mousedown',function(){
//     console.log("mouse down when clicked on container")
// })


// arrow function
// function sum(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

// setTimeout and setInterval
logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked after 5 sec</b>"
    // console.log("I am your log time")
}
// clr = setTimeout(logkaro, 5000);
// clr = setInterval(logkaro, 2000);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// Javasript localStorage
//localstrorage
//localstrorage.setItem("name","harry")    localstorage.clear()   localstorage.getItem('')
// localStorage.removeItem('name')
// localStorage.clear();



//JSON
// obj = {name: "Monster", length: 1, a: {this: 'tha\\ "t'}}
// jso = JSON.stringify(obj);
// console.log(jso)
// parsed = JSON.parse(`{"name":"Monster","length":1,"a":{"this":"tha\\"t"}}`)

// console.log(parsed);

//template literals-backtricks
a = 34;
// console.log(`this is my ${a}`)








