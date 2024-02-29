"use strict";
// untuk ngejalaninnya tsc main.ts -w (w ini brrti watch kaya run dev gitu deh)
// tpi klo udh di init dan udh di atur di tsconfig ga perlu pake nama langsung tsc -w
let username = "Salem";
console.log(username);
let a = 12;
let b = "6";
let c = 2;
// krna namanya jga strongly typed jd dia klo di bagi sm string bakal error ga kaya di js
// jdinya ts lebih strict ke tipe data
// console.log(a / b);
// klo biasanya secara default ttp bakal ke console, tpi klo dimatiin komen di ts config yg 
// noEmitOnError itu secara otomatis dia gabakal ke build dan ga bakal ke console di js nya
// console.log(a + b);
