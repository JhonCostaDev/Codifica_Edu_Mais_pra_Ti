import { useState } from "react";

function Hello() {
    const [initialValue, setValue] = useState(0);
    return (
        <>
            <h1>Contador 1</h1>   

            <div className="container">
                <p>{initialValue}</p>
                <button onClick={
                    () => {
                        setValue(initialValue + 1);
                    }
                }>ADD</button>
            </div>
        
        </>
    );
}

export default Hello;