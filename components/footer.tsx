import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors">
            <span className="text-lg font-bold tracking-tight">TitanChef</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link 
              href="/termos-de-uso" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <Link 
              href="/politica-de-privacidade" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <Link 
              href="/trocas-e-devolucoes" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Trocas e Devoluções
            </Link>
            <span className="text-muted-foreground/40">|</span>
            <Link 
              href="/contato" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Company Info */}
          <div className="text-center text-xs text-muted-foreground/70 max-w-md">
            <p>
              Titanchef é uma marca operada por Anor Commerce LLC.
              <br />
              Endereço: 1209 Mountain Road Place Northeast, Albuquerque, New Mexico, 87110, USA.
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            &copy; 2025 Titanchef. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
