// type aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
};

type userId = stringOrNumber;

//literal types

let myName: "Salem";

let userName: "Salem" | "Cemong" | 3;
userName = 3;

// function

const sum = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

console.log("hai");
console.log(sum(4, 10));

let subtract = function (c: number, d: number): number {
    return c - d;
};

// type mathFunction = (a: number, b: number) => number;

interface mathFunction {
    (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
    return c * d;
};

logMsg(multiply(10, 4));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

//default param value
const sumAll = (a: number = 10, b: number, c: number = 4): number => {
    // if(typeof c !== 'undefined'){
    //     return a + b + c;
    // }
    return a + b + c;
};

logMsg(sumAll(2, 4));
logMsg(sumAll(2, 4, 10));
logMsg(sumAll(undefined, 4));

//rest parameter
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((a, b) => a + b);
};

logMsg(total(1, 2, 3, 10, 20));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

