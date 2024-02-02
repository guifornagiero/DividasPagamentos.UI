import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { primeiraLetraMaiuscula } from '@/helpers/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface PessoasFormularioProps {
  children: React.ReactNode
}

const pessoasFormSchema = z.object({
  nome: z.string(),
  sobrenome: z.string(),
  email: z.string().email(),
  idade: z.coerce.number()
})

type FormFields = z.infer<typeof pessoasFormSchema>

function PessoasFormulario({ children }: PessoasFormularioProps) {
  const form = useForm<FormFields>({
    resolver: zodResolver(pessoasFormSchema),
    defaultValues: {
      nome: '',
      sobrenome: '',
      email: '',
      idade: 0
    }
  })

  const onSubmitHandler = (data: FormFields) => {
    console.log(data)
  }

  const fields = ['nome', 'sobrenome', 'email', 'idade']

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)}>
        {fields.map((property, index) => (
          <FormField
            key={index}
            control={form.control}
            name={property}
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-3 mb-1 justify-between">
                <FormLabel>{[primeiraLetraMaiuscula(property)]}</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-60"
                    placeholder={primeiraLetraMaiuscula(property)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ))}
        {children}
      </form>
    </Form>
  )
}

export default PessoasFormulario
