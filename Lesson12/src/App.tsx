import { useState } from "react";

import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
    const [count, setCount] = useState<number>(1)
    return (
        <>
            <Heading title="halo" />
            <Section>This is Section.</Section>
            <Section title={"Holaaa"}>This is Section.</Section>
            <Counter setCount={setCount}>count is {count}</Counter>
            <List items={["Coffee", "Tacos", "Code"]} render={(item: string) => <h1 className="bold">{item}</h1>} />
        </>
    );
}

export default App;
