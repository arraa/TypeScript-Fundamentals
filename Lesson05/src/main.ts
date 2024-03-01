type one = string;
type two = string | number;
type three = 'hello';

// convert to more or less specific

let a : one = 'hello';
let b = a as two; // less specific
let c = a as three; //more specific krna a = hello

let d = <one>'world'; //ini ga bisa di pake di react
let e = <two>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b 
}

let myVal: string = addOrConcat(2, 2, 'concat') as string


// Be careful ts sees no problem, but a string is returned
// knp dia ngereturn string, karena di return dia di tmbahin '' +
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// console.log(typeof nextVal)

// 10 as string //i ni ga bisa krna ts tau klo ini tuh number ga bisa dia jd as string
(10 as unknown) as string

// The DOM 
const img = document.querySelector('img')! // (! = non-null) klo ga diginiin dia bisa aja type datanya jdi union ke null
const myImg = document.getElementById('#img') as HTMLImageElement // krna dia ini element jd ts gabisa akses ke src nya jdi harus di ubah jd HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

// klo ada kemungkinan null dia bakal error ini krna gabisa ngeakses img.src yg null
img.src
myImg.src
nextImg.src
