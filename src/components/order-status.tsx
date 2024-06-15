export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatusType
}

const orderStatusLabelMap: Record<OrderStatusType, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

const orderStatusColorMap: Record<OrderStatusType, string> = {
  pending: 'bg-slate-400',
  canceled: 'bg-rose-500',
  delivered: 'bg-emerald-500',
  delivering: 'bg-amber-500',
  processing: 'bg-amber-500',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusLabelMap[status]}
      </span>
    </div>
  )
}
