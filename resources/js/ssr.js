import { createServer } from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import ThemeProvider from './src/Context/ThemeContext'
import { StrictMode } from 'react'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createServer(
  (page) =>
    createInertiaApp({
      page,
      render: ReactDOMServer.renderToString,
      title: () => `Yaycha`,
      resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
      },
      setup: ({ App, props }) => (
        <StrictMode>
          <ThemeProvider>
            <App {...props} />
          </ThemeProvider>
        </StrictMode>
      ),
    }),
)
