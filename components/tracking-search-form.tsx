'use client'

import React from "react"

import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createClient } from '@/lib/supabase/client'
import type { Pedido } from '@/lib/types'

interface TrackingSearchFormProps {
  onResult: (pedido: Pedido | null, error?: string) => void
}

export function TrackingSearchForm({ onResult }: TrackingSearchFormProps) {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!query.trim()) return
    
    setIsLoading(true)
    
    try {
      const supabase = createClient()
      
      // Check if query is an email or tracking code
      const isEmail = query.includes('@')
      
      const { data, error } = await supabase
        .from('pedidos')
        .select('*')
        .eq(isEmail ? 'email_cliente' : 'codigo_rastreio', query.trim())
        .order('data_compra', { ascending: false })
        .limit(1)
        .single()
      
      if (error) {
        if (error.code === 'PGRST116') {
          onResult(null, 'Pedido não encontrado. Verifique o código de rastreio ou e-mail informado.')
        } else {
          onResult(null, 'Erro ao buscar pedido. Tente novamente.')
        }
        return
      }
      
      onResult(data as Pedido)
    } catch {
      onResult(null, 'Erro ao buscar pedido. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Código de rastreio ou e-mail"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 pl-12 text-base"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Buscando...
            </>
          ) : (
            'Rastrear Pedido'
          )}
        </Button>
      </div>
    </form>
  )
}
