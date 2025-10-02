import { createContext, useState } from "react";

export const ContextTheme = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    };

    return (
        <ContextTheme.Provider value={ {theme, changeTheme}}>{children}</ContextTheme.Provider>
    )
}