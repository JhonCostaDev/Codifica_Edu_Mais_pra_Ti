import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <>
            <h1>Home Page</h1>
            <p>O tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default Home;