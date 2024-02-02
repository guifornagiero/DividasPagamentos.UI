import { Separator } from '@radix-ui/react-dropdown-menu'
import { User } from 'lucide-react'
import FiltroPessoas from './componentes/filtro-pessoas'
import CriarPessoaButton from './componentes/criar-pessoa'

function PessoasScreen() {
  return (
    <div className="mt-28">
      <h1 className="dark:text-slate-900 text-4xl font-semibold flex flex-row items-start">
        <User className="size-10 mr-2" />
        Pessoas
      </h1>
      <Separator className="border rounded dark:border-slate-300 my-3 mb-5" />

      <div className="flex flex-row justify-between">
        <FiltroPessoas />
        <CriarPessoaButton />
      </div>
    </div>
  )
}

export default PessoasScreen
