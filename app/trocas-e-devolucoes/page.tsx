import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trocas e Devoluções | Jardim da Cida',
  description: 'Conheça nossa política de trocas e devoluções. Garantia de qualidade para suas plantas.',
}

export default function TrocasEDevolucoesPage() {
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Trocas e Devoluções</h1>
          <p className="mb-8 text-muted-foreground">
            Sua satisfação é nossa prioridade. Conheça nossas políticas.
          </p>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="mb-3 text-xl font-semibold">1. Garantia de Qualidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todas as plantas do Jardim da Cida possuem garantia de qualidade. 
                Caso sua planta chegue com problemas ou não esteja em boas condições, 
                entre em contato conosco dentro de 7 dias após o recebimento para solicitar a troca.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">2. Direito de Arrependimento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você tem até 7 dias corridos após o recebimento do produto para exercer 
                seu direito de arrependimento, conforme previsto no Código de Defesa do 
                Consumidor. O produto deve ser devolvido em sua embalagem original, 
                sem sinais de uso.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">3. Logística Reversa</h2>
              <p className="text-muted-foreground leading-relaxed">
                Possuímos um centro de devolução localizado no Brasil para facilitar o 
                processo de troca ou devolução. Após a aprovação da sua solicitação, 
                enviaremos as instruções de envio e a etiqueta de postagem.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">4. Reembolso</h2>
              <p className="text-muted-foreground leading-relaxed">
                O reembolso será processado em até 5 dias úteis após a conferência do 
                produto devolvido. O valor será estornado na mesma forma de pagamento 
                utilizada na compra.
              </p>
            </section>

            <section className="rounded-lg bg-primary/10 p-6">
              <p className="text-sm text-primary">
                <strong>Precisa de ajuda?</strong> Entre em contato pelo e-mail{' '}
                <a 
                  href="mailto:info@jardimdacida.com" 
                  className="underline hover:no-underline"
                >
                  info@jardimdacida.com
                </a>
                {' '}e nossa equipe terá prazer em auxiliá-lo.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
