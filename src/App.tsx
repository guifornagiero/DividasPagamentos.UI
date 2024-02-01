import { Outlet } from 'react-router-dom'
import Header from './components/header/header'

function App() {
  return (
    <main className="mx-80 my-12 dark:bg-white rounded-xl p-5 light: border-slate-900 border-2">
      <Header />
      <Outlet />
    </main>
  )
}

export default App
