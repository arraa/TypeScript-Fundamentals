import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface User {
    id: number;
    username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

const myNum: number = 3;

function App() {
    const [count, setCount] = useState<number>(0);
    const [users] = useState<User[] | null>(null);

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current) 
    console.log(inputRef?.current?.value)

    //dipakai untuk ngedapetin side effect klo misalnya ada perubahan yg terjadi
    //biasanya di pakai buat api, dsbnya
    
    useEffect(() => {
        console.log("mounting");
        console.log("Users: ", users);

        return () => console.log("unmounting");
    }, [users]);

    const addTwo = useCallback((): void => setCount((prev) => prev + 2), []);

    const result = useMemo<number>(() => fib(myNum), []);

    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={addTwo}>Add</button>
            <h2>{result}</h2>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default App;
