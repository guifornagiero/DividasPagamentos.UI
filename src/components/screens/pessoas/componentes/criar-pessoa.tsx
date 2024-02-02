import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Plus, User } from 'lucide-react'
import PessoasFormulario from './pessoas-form'

function CriarPessoaButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex flex-row gap-2 p-2 pr-3">
          <Plus />
          Nova Pessoa
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-slate-900 w-96">
        <DialogHeader>
          <DialogTitle className="flex flex-row gap-2 items-start text-xl">
            <User />
            Nova Pessoa
          </DialogTitle>
          <DialogDescription>
            Criação de nova pessoa para cadastro de dívidas e pagamentos.
          </DialogDescription>
        </DialogHeader>
        <PessoasFormulario>
          <DialogFooter className="mt-5">
            <DialogClose>
              {/* <Button variant={'secondary'}>Cancelar</Button> */}
              <h1 className="font-semibold mr-3">Cancelar</h1>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </PessoasFormulario>
      </DialogContent>
    </Dialog>
  )
}

export default CriarPessoaButton
