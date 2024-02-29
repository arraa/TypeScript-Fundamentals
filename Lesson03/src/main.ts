let stringArr = ["Salem", "Cemong", "Milo"];

let Cats = ["Salem", "Jakarta", 2019];

let mixedData = ["EVH", 1984, true];

// krna dri awal dideclare sebagai array yg tipe data string kebawah" dia gabakal bisa jd number atau tipe data selain string
stringArr[0] = "newSalem";
stringArr.push("pedi");
console.log(stringArr);

// ini awalnya string, tpi krna emng type data dri array nya union string | number
// jd klo di ganti ke numeber dia bisa
console.log(Cats[0]);
Cats[0] = 20;
console.log(Cats[0]);

Cats.unshift("hola");
console.log(Cats);

// stringArr = Cats // ini ga bisa krna stringArr cuman nerima string
Cats = stringArr; //ini bisa krna cats nerima string

let test = [];
test = ["halo", true, 10]; // klo gini jdinya any

let bands: string[] = [];
bands.push("ini bands");

console.log(bands);

// tuple (specific position and specific length)
// array yg tipe data sm posisi nya udh ditentuin, jdi ga bisa asal masukkin tipe data
// klo contoh disini klo mau ganti salem jdi number itu gabsia krna dia udh dideclare dri awal klo posistion 0 itu hrus string
// klo salem mau dignti nama jd cemong itu bisa
let myTuple: [string, number, boolean] = ["Salem", 6, true];

// ini bisa diubah ubah posisi nya ga mesti sama bahkan string bisa diganti jd number tpi klo tuple tak bisa
let mixedData2 = ["EVH", 1984, true];
// mixedData2[0] = 3
// console.log(mixedData2)

// notes tuple walaupun kedua nya urutannya sm (string, number, bool) tpi  mytuple = mixedData2 gabisa krna
// tuple itu hrus 3 element doang, tpi bisa aja mixeddata2 punya lebih bnyk atau lebih dikit

// ini bisa
console.log(myTuple[0]);
myTuple[0] = "cemong";
console.log(myTuple[0]);

// klo gini gabisa
// console.log(myTuple[0]);
// myTuple[0] = 10
// console.log(myTuple[0]);

// object

let myObj: object;
myObj = [];
// wlaupun dideclare array kosong gini myObj ttp object
console.log(typeof myObj);
myObj = bands;
console.log(myObj);

const exampleObj = {
    prop1: "Salem",
    prop2: true,
};

// strict tipe data jd gabisa diisi selain string
exampleObj.prop1 = "Cemong";


interface Guitarist {
    name?: string;
    active: boolean;
    albums: (string | number)[];
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
    active: true,
    albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return "Hello!";
};

console.log(greetGuitarist(jp));


// enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 10,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)