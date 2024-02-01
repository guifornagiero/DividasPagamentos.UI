import { ModeToggle } from '../ui/mode-toggle'
import HeaderLink from './header-link'
import { Building, User, Wallet } from 'lucide-react'

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <h1 className="font-bold dark:text-slate-900 text-4xl">
        Dividas & Pagamentos
      </h1>
      <div className="flex flex-row justify-center items-center gap-6 pt-1">
        <div className="flex flex-row justify-center items-center gap-4 text-md font-semibold dark:text-slate-900">
          <HeaderLink to="/dividas">
            <Wallet />
            Dívidas
          </HeaderLink>

          <HeaderLink to="/">
            <User />
            Pessoas
          </HeaderLink>

          <HeaderLink to="/empresas">
            <Building />
            Empresas
          </HeaderLink>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
