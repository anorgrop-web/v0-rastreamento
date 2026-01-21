import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | TitanChef',
  description: 'Leia os termos de uso do site TitanChef. Informações sobre envio, prazos e legislação.',
}

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2 pl-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
          </Link>

          {/* Header */}
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Termos de Uso</h1>
          <p className="mb-8 text-muted-foreground">
            Ao utilizar nosso site, você concorda com os termos abaixo.
          </p>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="mb-3 text-xl font-semibold">Operador</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site é operado por Anor Commerce LLC, empresa sediada em 
                Albuquerque, Novo México, Estados Unidos da América.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Envio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os produtos são despachados a partir de nosso estoque localizado 
                no Brasil, garantindo maior agilidade na entrega para clientes brasileiros.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Prazos Estimados de Entrega</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Os prazos de entrega variam de acordo com a região de destino:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span><strong>Região Sudeste:</strong> 8 a 12 dias úteis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span><strong>Região Sul:</strong> 10 a 14 dias úteis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span><strong>Demais regiões:</strong> 15 a 18 dias úteis</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Legislação Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site e suas transações são regidos pelas leis do Estado de Novo México, 
                Estados Unidos da América, respeitando sempre os direitos do consumidor 
                brasileiro conforme legislação local aplicável.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
