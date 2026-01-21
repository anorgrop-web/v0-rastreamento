'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Package, Shield, Truck } from 'lucide-react'
import { Header } from '@/components/header'
import { TrackingSearchForm } from '@/components/tracking-search-form'
import { TrackingResult } from '@/components/tracking-result'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { Pedido } from '@/lib/types'
import { ChefHat } from 'lucide-react' // Import ChefHat

export default function TrackingPage() {
  const [pedido, setPedido] = useState<Pedido | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleResult = (result: Pedido | null, errorMessage?: string) => {
    setHasSearched(true)
    if (errorMessage) {
      setError(errorMessage)
      setPedido(null)
    } else {
      setError(null)
      setPedido(result)
    }
  }

  const handleReset = () => {
    setPedido(null)
    setError(null)
    setHasSearched(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          {/* Hero Section */}
          {!pedido && (
            <div className="text-center mb-10 max-w-2xl">
              <Image
                src="https://mk6n6kinhajxg1fp.public.blob.vercel-storage.com/kat/logo_titanchef%201.png"
                alt="TitanChef Logo"
                width={80}
                height={80}
                className="mx-auto mb-6"
              />
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
                Rastreie seu Pedido
              </h1>
              <p className="text-muted-foreground text-lg">
                Acompanhe a entrega dos seus utensílios de cozinha TitanChef em tempo real
              </p>
            </div>
          )}

          {/* Search Form or Result */}
          {pedido ? (
            <TrackingResult pedido={pedido} onReset={handleReset} />
          ) : (
            <>
              <TrackingSearchForm onResult={handleResult} />
              
              {error && hasSearched && (
                <Alert variant="destructive" className="mt-6 max-w-xl">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </>
          )}

          {/* Features Section */}
          {!pedido && (
            <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Embalagem Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Seus produtos são embalados com cuidado especial para chegar perfeitos
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Entrega Rastreada</h3>
                <p className="text-sm text-muted-foreground">
                  Acompanhe cada etapa do seu pedido até a entrega final
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Garantia TitanChef</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os produtos possuem garantia de qualidade e satisfação
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            TitanChef - Utensílios de Cozinha Premium
          </p>
        </div>
      </footer>
    </div>
  )
}
