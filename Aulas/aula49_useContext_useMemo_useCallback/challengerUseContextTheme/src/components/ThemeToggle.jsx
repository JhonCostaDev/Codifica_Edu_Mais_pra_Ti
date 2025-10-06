import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>Change Theme</button>
    )
}

export default ThemeToggle;