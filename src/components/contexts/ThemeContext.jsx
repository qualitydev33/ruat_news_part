import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
    if (typeof window !== undefined && window.localStorage) {
        const stored_theme = window.localStorage.getItem("current-theme");
        if (stored_theme === 'dark' || stored_theme === 'light') {
            return stored_theme
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
    }
    return 'light'
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const updateTheme = (existing) => {
        const root = window.document.documentElement
        root.classList.remove(existing === 'dark' ? 'light' : 'dark')
        root.classList.add(existing)
        localStorage.setItem('current-theme', existing)
    }

    useEffect(() => {
        updateTheme(theme)
    }, [theme])


    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

export const ThemeContext = createContext()