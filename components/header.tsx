import { ChefHat } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <ChefHat className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">TitanChef</span>
        </div>
      </div>
    </header>
  )
}
