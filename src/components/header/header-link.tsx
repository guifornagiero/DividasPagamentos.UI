import { NavLink } from 'react-router-dom'

interface HeaderLinkProps {
  to: string
  children: React.ReactNode
}

function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'flex flex-row items-center justify-center gap-1 p-2 pr-3 rounded-md bg-slate-900 text-white'
          : 'flex flex-row items-center justify-center gap-1 p-2 pr-3 rounded-md hover:bg-slate-900 hover:text-white'
      }
    >
      {children}
    </NavLink>
  )
}

export default HeaderLink
