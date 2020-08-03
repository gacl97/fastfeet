import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import api from '../services/api';

interface Recipient {
  id: string;
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
  formattedAddress: string;
}

interface RecipientContextData {
  // recipients: Recipient[];
  // loadRecipients(): void;
}

const RecipientContext = createContext<RecipientContextData>(
  {} as RecipientContextData,
);

const RecipientProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Recipient[]>([] as Recipient[]);

  const loadRecipients = useCallback(async () => {
    // const response = await api.get<Recipient[]>('/recipients');
    // console.log(response.data);
    // const formmatedRecipient = response.data.map(recipient => {
    //   return {
    //     ...recipient,
    //     formattedAddress: `${recipient.street}, ${recipient.number}, ${recipient.city}-${recipient.state}`,
    //   };
    // });
    // console.log(formmatedRecipient);
    // setData(formmatedRecipient);
  }, []);

  return (
    <>
      <RecipientContext.Provider value={{}}>
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
