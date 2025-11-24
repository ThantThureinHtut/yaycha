import "../css/app.css";
import "./bootstrap";
import { StrictMode } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./src/Context/ThemeContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: () => `Yaycha`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StrictMode>
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            </StrictMode>
        );
    },
    progress: {
        color: "#FFFF00",
        
    },
});
