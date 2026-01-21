import type { Pedido, TrackingStep } from './types'

export function getTrackingSteps(pedido: Pedido): TrackingStep[] {
  return [
    {
      id: 1,
      title: 'Pagamento Aprovado',
      description: 'Seu pagamento foi confirmado com sucesso.',
      dayRange: [0, 2],
      icon: 'check-circle',
    },
    {
      id: 2,
      title: 'Pedido Enviado',
      description: 'Seu pedido foi despachado do centro de distribuição.',
      dayRange: [3, 5],
      icon: 'package',
    },
    {
      id: 3,
      title: 'Pedido em Trânsito',
      description: `A caminho de ${pedido.cidade_destino}/${pedido.uf_destino}.`,
      dayRange: [6, 14],
      icon: 'truck',
    },
    {
      id: 4,
      title: 'Pedido Entregue',
      description: 'Entregue no endereço cadastrado.',
      dayRange: [15, Infinity],
      icon: 'home',
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

export function getCurrentStepIndex(days: number, status?: string): number {
  // Se o status do banco for 'entregue', marca todas as etapas como concluídas
  if (status?.toLowerCase() === 'entregue') {
    return 4 // Índice após o último (todas concluídas)
  }
  
  if (days < 3) return 0  // Pagamento Aprovado (Dia 0-2)
  if (days < 6) return 1  // Pedido Enviado (Dia 3-5)
  if (days < 15) return 2 // Pedido em Trânsito (Dia 6-14)
  return 3                // Pedido Entregue (Dia 15+)
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
