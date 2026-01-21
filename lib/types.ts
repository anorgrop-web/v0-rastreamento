export interface Pedido {
  id: number
  codigo_rastreio: string
  nome_cliente: string
  email_cliente: string
  cidade_destino: string
  uf_destino: string
  data_compra: string
  status: string
  created_at: string
}

export interface TrackingStep {
  id: number
  title: string
  description: string
  dayRange: [number, number]
  icon: string
}

export type TrackingStatus = 
  | 'pagamento_aprovado'
  | 'pedido_enviado'
  | 'em_transito'
  | 'entregue'
