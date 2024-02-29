"use strict";
// type aliases
//literal types
let myName;
let userName;
userName = 3;
// function
const sum = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
console.log("hai");
console.log(sum(4, 10));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(10, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 4) => {
    // if(typeof c !== 'undefined'){
    //     return a + b + c;
    // }
    return a + b + c;
};
logMsg(sumAll(2, 4));
logMsg(sumAll(2, 4, 10));
logMsg(sumAll(undefined, 4));
//rest parameter
const total = (a, ...nums) => {
    return a + nums.reduce((a, b) => a + b);
};
logMsg(total(1, 2, 3, 10, 20));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
