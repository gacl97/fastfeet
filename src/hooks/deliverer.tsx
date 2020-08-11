import React, { createContext, useContext, useState, useCallback } from 'react';

interface DelivererData {
  avatar_url: string;
  name: string;
  email: string;
}

interface DelivererContextData {
  deliverer: DelivererData;
  loadDeliverer(order: DelivererData): void;
}

const DelivererContext = createContext<DelivererContextData>(
  {} as DelivererContextData,
);

const DelivererProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DelivererData>({} as DelivererData);

  const loadDeliverer = useCallback((deliverer: DelivererData) => {
    setData(deliverer);
  }, []);

  return (
    <>
      <DelivererContext.Provider value={{ deliverer: data, loadDeliverer }}>
        {children}
      </DelivererContext.Provider>
    </>
  );
};

function useDeliverer(): DelivererContextData {
  const context = useContext(DelivererContext);

  if (!context) {
    throw new Error('useDeliverer must be used within an DelivererProvider.');
  }

  return context;
}

export { DelivererProvider, useDeliverer };
