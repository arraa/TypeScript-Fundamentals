const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("Salem"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Salem" }));
console.log(isObj(null));
// ========================
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Salem"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Salem" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// ========================

interface BoolCheck<T> {
    value: T;
    is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};

// ========================

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here 
    return user
}

console.log(processUser({ id: 1, name: 'Dave' }))
//console.log(processUser({ name: 'Dave'})) // ini ga bisa krna untuk processUser butuh id soalnya dia ngeextends ke has id 


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Salemudin",
        "username": "SalemMeow",
        "email": "Salem@gmail.com",
        "address": {
            "street": "jalan-jalan",
            "city": "Samarinda",
            "zipcode": "1234687",
            "geo": {
                "lat": "-123.425",
                "lng": "12.4125"
            }
        },
        "phone": "123456089743",
        "website": "salemCute.org",
        "company": {
            "name": "SaleminAja",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 1,
        "name": "Cemongmong",
        "username": "CemongMeow",
        "email": "Cemong@gmail.com",
        "address": {
            "street": "jalan ga jalan",
            "city": "Jakarrta",
            "zipcode": "0897523",
            "geo": {
                "lat": "-856.34",
                "lng": "64.3542"
            }
        },
        "phone": "987656345325123",
        "website": "CemongCute.org",
        "company": {
            "name": "CemonginAja",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))


//===========================

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("Cemong")
console.log(store.state)
store.state = "Salem"
//store.state = 12 // klo diawal dimasukkinnya string dia bakal ngedeclare smpe kelar itu sebagai string

const storeNumb = new StateObject(3)
console.log(storeNumb.state)
storeNumb.state = 10


const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Salem', 42, true]
console.log(myState.state)