import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | TitanChef',
  description: 'Conheça nossa política de privacidade e como protegemos seus dados.',
}

export default function PoliticaDePrivacidadePage() {
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Política de Privacidade</h1>
          <p className="mb-8 text-muted-foreground">
            A Anor Commerce LLC respeita sua privacidade.
          </p>

          {/* Content */}
          <div className="space-y-8">
            <section>
              <h2 className="mb-3 text-xl font-semibold">1. Uso das Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos seus dados pessoais (Nome, CPF, Endereço) exclusivamente para processar 
                o pagamento e realizar o envio dos produtos adquiridos. Não compartilhamos suas 
                informações com terceiros para fins de marketing ou qualquer outra finalidade 
                não relacionada à sua compra.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">2. Segurança</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todas as transações realizadas em nosso site são criptografadas utilizando 
                tecnologia SSL/TLS, garantindo a segurança dos seus dados. Não armazenamos 
                números completos de cartão de crédito em nossos servidores.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">3. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para solicitar alterações, correções ou exclusão dos seus dados pessoais, 
                entre em contato conosco pelo e-mail{' '}
                <a 
                  href="mailto:info@titanchefcut.com" 
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  info@titanchefcut.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
