"use strict";
let myName;
let meaningOfLife;
let isLoading;
let album; //bebas datanya apa aja bisa masuk
// union type
let makan;
let postID;
let isActive; //krna bisa aja booleannya pakai 1 atau 0
let re = /\w+/g;
myName = "Salem";
meaningOfLife = 20;
isLoading = false;
album = 2018;
makan = "meo";
makan = 4;
postID = 20123;
const sum = (a, b) => {
    // klo b nya jd string dia bakal ngereturn string bukan number
    return a + b;
};
console.log(sum(12, 13));
//notes :
// let username= "Salem";
// typescript sebenernya udh tau type data nya apa tnpa kita declare tpi ya better di kasi tau aja apa type datanya
// jd klo tiba" kita ubah dibawah jd number itu bakal error klo di js masi bisa
// username = 40 //ini error
