import { createContext, useContext, useState, useEffect, use } from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
export default function ThemeProvider({ children }) {
    const queryClient = new QueryClient();
    const savedTheme = localStorage.getItem("theme");
    // Trigger the user laptop or phone setting mode , check if user setting is dark -> true and not -> false
    const mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    // Set The Default Value For Theme
    const [theme, setTheme] = useState(() => savedTheme || "light");
    const [isAi , setAi] = useState(false);
    const [isOpen , setOpen] = useState(false);
    const [viewCount , setViewCount] = useState();
    // Dark Mode
    const darkMode = (root) => {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    };

    // Light Mode
    const lightMode = (root) => {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    };

    // System Mode
    const systemMode = (root) => {
        // matches
        const systemTheme = mediaQuery ? "dark" : "light";
        root.classList.add(systemTheme);
        localStorage.setItem("theme", "system");
    };

    // Switch the Mode depond the localstorage
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("dark", "light");
        if (theme == "system") {
            systemMode(root);
            return;
        } else if (theme == "dark") {
            darkMode(root);
        } else if (theme == "light") {
            lightMode(root);
        }
    }, [theme]);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeContext.Provider value={{ theme, setTheme , isAi ,setAi , isOpen , setOpen  }}>
                {children}
                <Toaster position="top-center" swipeDirection="up" />
            </ThemeContext.Provider>
        </QueryClientProvider>
    );
}
