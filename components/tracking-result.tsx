'use client'

import { Calendar, MapPin, User, Mail, Hash } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { TrackingTimeline } from './tracking-timeline'
import type { Pedido } from '@/lib/types'
import { 
  getTrackingSteps, 
  calculateDaysSincePurchase, 
  getCurrentStepIndex,
  getEstimatedDeliveryDate,
  formatDate
} from '@/lib/tracking'

interface TrackingResultProps {
  pedido: Pedido
  onReset: () => void
}

export function TrackingResult({ pedido, onReset }: TrackingResultProps) {
  const steps = getTrackingSteps(pedido)
  const daysSincePurchase = calculateDaysSincePurchase(pedido.data_compra)
  const currentStepIndex = getCurrentStepIndex(daysSincePurchase)
  const estimatedDelivery = getEstimatedDeliveryDate(pedido.data_compra)
  const isDelivered = daysSincePurchase >= 15
  
  return (
    <div className="w-full max-w-2xl space-y-6">
      <button
        onClick={onReset}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Fazer nova busca
      </button>
      
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-foreground text-background rounded-t-lg pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Código de Rastreio</p>
              <p className="text-xl font-mono font-bold tracking-wider">
                {pedido.codigo_rastreio}
              </p>
            </div>
            <Badge 
              variant={isDelivered ? "default" : "secondary"}
              className={isDelivered 
                ? "bg-emerald-500 hover:bg-emerald-600 text-white" 
                : "bg-background/20 text-background hover:bg-background/30"
              }
            >
              {isDelivered ? 'Entregue' : 'Em andamento'}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Customer Info */}
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Cliente</p>
                <p className="font-medium">{pedido.nome_cliente}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">E-mail</p>
                <p className="font-medium text-sm">{pedido.email_cliente}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Destino</p>
                <p className="font-medium">{pedido.cidade_destino}/{pedido.uf_destino}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Data da Compra</p>
                <p className="font-medium">{formatDate(pedido.data_compra)}</p>
              </div>
            </div>
          </div>
          
          {/* Estimated Delivery */}
          <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 mb-6">
            <div className="flex items-center gap-3">
              <Hash className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm text-emerald-800">
                  {isDelivered ? 'Pedido entregue!' : 'Previsão de Entrega'}
                </p>
                <p className="font-semibold text-emerald-900">
                  {isDelivered 
                    ? `Entregue em ${formatDate(estimatedDelivery)}`
                    : formatDate(estimatedDelivery)
                  }
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          {/* Timeline */}
          <div>
            <h3 className="font-semibold mb-4">Histórico do Pedido</h3>
            <TrackingTimeline steps={steps} currentStepIndex={currentStepIndex} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
