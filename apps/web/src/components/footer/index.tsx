import { Copyright } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="h-72 border-t">
      <div className="flex justify-center gap-20 p-10 align-top">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Exclusive</h3>
          <div className="text-muted-foreground flex flex-col gap-2 text-base">
            <p>Cadastre-se agora mesmo e</p>
            <p>ganhe 10% off na primeira compra!</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Suporte</h3>
          <div className="text-muted-foreground flex flex-col gap-2 text-base">
            <p>Avenida Marcolino M. Cabral</p>
            <p>ExclusiveOficial@suporte.com</p>
            <p>+55 (48)94002-8922</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Conta</h3>
          <div className="text-muted-foreground flex flex-col gap-2 text-base">
            <p>Logar / Cadastre-se</p>
            <p>Carrinho</p>
            <p>Lista de Desejos</p>
            <p>Loja</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Acesso Rápido</h3>
          <div className="text-muted-foreground flex flex-col gap-2 text-base">
            <p>Termos de Uso</p>
            <p>FAQ</p>
            <p>Contato</p>
          </div>
        </div>
      </div>
      <div>
        <Separator />
        <div className="m-3 flex flex-row items-center justify-center gap-2">
          <Copyright className="text-muted-foreground size-4" />
          <p className="text-muted-foreground text-base">
            Todos os direitos reservados, Exclusive 2025.
          </p>
        </div>
      </div>
    </footer>
  )
}
