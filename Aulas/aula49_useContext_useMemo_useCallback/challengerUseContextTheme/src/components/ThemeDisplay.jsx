import { useTheme } from "../context/ThemeContext";

const ThemeDisplay = () => {
    const { theme } = useTheme();

    return (
        <p>The current theme is <strong>{theme}</strong></p>
    );
};

export default ThemeDisplay;