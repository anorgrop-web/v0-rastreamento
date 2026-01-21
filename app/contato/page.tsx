import Link from 'next/link'
import { ArrowLeft, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | TitanChef',
  description: 'Entre em contato com a TitanChef. Responderemos em até 24 horas úteis.',
}

export default function ContatoPage() {
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
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Contato</h1>
          <p className="mb-8 text-muted-foreground">
            Estamos aqui para ajudar. Entre em contato conosco pelos canais abaixo.
          </p>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="mb-1 font-semibold">E-mail</h2>
                  <a 
                    href="mailto:info@titanchefcut.com" 
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    info@titanchefcut.com
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Responderemos em até 24 horas úteis.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="mb-1 font-semibold">Horário de Atendimento</h2>
                  <p className="text-foreground">Segunda a Sexta</p>
                  <p className="text-sm text-muted-foreground">
                    9:00 às 18:00 (Horário de Brasília)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
