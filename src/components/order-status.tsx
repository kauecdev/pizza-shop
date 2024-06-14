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
  canceled: 'bg-rose-400',
  delivered: 'bg-emerald-400',
  delivering: 'bg-amber-400',
  processing: 'bg-amber-400',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`}
      ></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusLabelMap[status]}
      </span>
    </div>
  )
}
