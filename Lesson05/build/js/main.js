"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; //more specific krna a = hello
let d = 'world'; //ini ga bisa di pake di react
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful ts sees no problem, but a string is returned
// knp dia ngereturn string, karena di return dia di tmbahin '' +
let nextVal = addOrConcat(2, 2, 'concat');
// console.log(typeof nextVal)
// 10 as string //i ni ga bisa krna ts tau klo ini tuh number ga bisa dia jd as string
10;
// The DOM 
const img = document.querySelector('img'); // (! = non-null) klo ga diginiin dia bisa aja type datanya jdi union ke null
const myImg = document.getElementById('#img'); // krna dia ini element jd ts gabisa akses ke src nya jdi harus di ubah jd HTMLImageElement
const nextImg = document.getElementById('#img');
// klo ada kemungkinan null dia bakal error ini krna gabisa ngeakses img.src yg null
img.src;
myImg.src;
nextImg.src;
