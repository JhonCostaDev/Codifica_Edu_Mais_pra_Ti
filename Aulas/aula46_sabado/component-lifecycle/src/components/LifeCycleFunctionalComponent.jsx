import { useEffect, useState } from "react";

export default function LifeCycleFunctionalComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted Component");

        return() => {
            console.log("Unmounted Component");
        };
    },[]);

    useEffect(() => {
        console.log("Component updated");
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div>
                <p>Contagem: {count}</p>
                <button onClick={increment}>Adicionar</button>
            </div>
        </>
    )

}