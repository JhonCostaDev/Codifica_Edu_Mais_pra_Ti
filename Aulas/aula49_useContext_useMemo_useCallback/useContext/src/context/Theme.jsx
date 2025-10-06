import { createContext, useCallback, useContext, useState, useMemo } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({children}) {
    const[theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === "light"?"dark": 'light'))
    }, []);

    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeProvider value={value}>{children}</ThemeProvider>
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    
    if(!ctx) throw new Error ("You need to use a hook inside correct provider!");
    return ctx;
}