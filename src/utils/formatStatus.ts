interface StatusTypeVariation {
  status: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
}

export default function ({ status }: StatusTypeVariation): string {
  const types = {
    delivered: 'Entregue',
    pending: 'Pendente',
    withdrawal: 'Retirada',
    canceled: 'Cancelada',
  };

  return types[status];
}
