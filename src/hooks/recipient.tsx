import React, { createContext, useContext, useState, useCallback } from 'react';

interface Recipient {
  id: string;
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
  formattedStreet: string;
  formattedCity: string;
}

interface RecipientContextData {
  recipient: Recipient;
  loadRecipient(recipient: Recipient): void;
}

const RecipientContext = createContext<RecipientContextData>(
  {} as RecipientContextData,
);

const RecipientProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Recipient>({} as Recipient);

  const loadRecipient = useCallback((recipient: Recipient) => {
    setData(recipient);
  }, []);

  return (
    <>
      <RecipientContext.Provider value={{ recipient: data, loadRecipient }}>
        {children}
      </RecipientContext.Provider>
    </>
  );
};

function useRecipient(): RecipientContextData {
  const context = useContext(RecipientContext);

  if (!context) {
    throw new Error('useRecipient must be used within an RecipientProvider.');
  }

  return context;
}

export { RecipientProvider, useRecipient };
