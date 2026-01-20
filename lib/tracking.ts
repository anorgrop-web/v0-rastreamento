import type { Pedido, TrackingStep } from './types'

export function getTrackingSteps(pedido: Pedido): TrackingStep[] {
  return [
    {
      id: 1,
      title: 'Pagamento Aprovado',
      description: 'Seu pagamento foi confirmado com sucesso',
      dayRange: [0, 0],
      icon: 'credit-card',
    },
    {
      id: 2,
      title: 'Pedido em Separação',
      description: 'Seu pedido está sendo preparado em nosso estoque',
      dayRange: [1, 2],
      icon: 'package',
    },
    {
      id: 3,
      title: 'Nota Fiscal Emitida',
      description: 'Documentação fiscal gerada e pronta para envio',
      dayRange: [3, 3],
      icon: 'file-text',
    },
    {
      id: 4,
      title: `Em Trânsito para ${pedido.cidade_destino}`,
      description: `Seu pedido está a caminho de ${pedido.cidade_destino}/${pedido.uf_destino}`,
      dayRange: [4, 9],
      icon: 'truck',
    },
    {
      id: 5,
      title: 'Chegou na Base Local',
      description: 'Pedido chegou na unidade de distribuição da sua região',
      dayRange: [10, 14],
      icon: 'warehouse',
    },
    {
      id: 6,
      title: 'Saiu para Entrega',
      description: 'Seu pedido está com o entregador e será entregue em breve',
      dayRange: [15, Infinity],
      icon: 'package-check',
    },
  ]
}

export function calculateDaysSincePurchase(dataCompra: string): number {
  const purchaseDate = new Date(dataCompra)
  const today = new Date()
  
  // Reset time to compare only dates
  purchaseDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)
  
  const diffTime = today.getTime() - purchaseDate.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  return Math.max(0, diffDays)
}

export function getCurrentStepIndex(days: number): number {
  if (days === 0) return 0
  if (days <= 2) return 1
  if (days === 3) return 2
  if (days <= 9) return 3
  if (days <= 14) return 4
  return 5
}

export function getEstimatedDeliveryDate(dataCompra: string): Date {
  const purchaseDate = new Date(dataCompra)
  const deliveryDate = new Date(purchaseDate)
  deliveryDate.setDate(deliveryDate.getDate() + 15)
  return deliveryDate
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
