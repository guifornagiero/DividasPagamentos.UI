import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DividasScreen from './components/screens/dividas/dividas-screen.tsx'
import PessoasScreen from './components/screens/pessoas/pessoas-screen.tsx'
import EmpresasScreen from './components/screens/empresas/empresas-screen.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dividas',
        element: <DividasScreen />
      },
      {
        path: '/',
        element: <PessoasScreen />
      },
      {
        path: '/empresas',
        element: <EmpresasScreen />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
