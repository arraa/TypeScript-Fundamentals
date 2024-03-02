// class coder {
//     name: string;
//     music: string;
//     age: number;
//     lang: string;

//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }

class Coder {
    secondLang!: string;

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "Typescript"
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
}

const Dave = new Coder("Salem", "Rock", 6);
console.log(Dave.getAge());
// ini klo di console ttp ada karena di js itu legal tpi ya klo di ts ini bakal merah
// console.log(Dave.age)
// console.log(Dave.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
console.log(Sara.getAge());

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)


class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)