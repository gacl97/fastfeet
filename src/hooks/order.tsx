import React, { createContext, useContext, useState, useCallback } from 'react';

interface Order {
  recipient: {
    name: string;
  };
  deliveryman: {
    name: string;
  };
  product: string;
}

interface OrderDataState {
  recipient: string;
  deliveryman: string;
  product: string;
}

interface OrderContextData {
  order: OrderDataState;
  loadOrder(order: Order): void;
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData);

const OrderProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<OrderDataState>({} as OrderDataState);

  const loadOrder = useCallback((order: Order) => {
    setData({
      deliveryman: order.deliveryman.name,
      recipient: order.recipient.name,
      product: order.product,
    });
  }, []);

  return (
    <>
      <OrderContext.Provider value={{ order: data, loadOrder }}>
        {children}
      </OrderContext.Provider>
    </>
  );
};

function useOrder(): OrderContextData {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider.');
  }

  return context;
}

export { OrderProvider, useOrder };
