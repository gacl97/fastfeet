import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface VerifyToken {
  error: object;
}

interface AuthenticateDataState {
  user: object;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
  role: 'admin' | 'deliverer';
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [isAdminData, setIsAdminData] = useState<boolean>(() => {
    const adminBack = localStorage.getItem('@Fastfeet:admin');

    if (adminBack) {
      return JSON.parse(adminBack);
    }
    return true;
  });
  const [data, setData] = useState<AuthenticateDataState>(() => {
    const token = localStorage.getItem('@Fastfeet:token');

    // const response = await api.get<VerifyToken>('/api/account');

    // const { error } = response.data;

    // if (error) {
    //   signOut();
    //   return;
    // }

    const user = localStorage.getItem('@Fastfeet:user');
    const adminBack = localStorage.getItem('@Fastfeet:admin');

    if (token && user && adminBack) {
      api.defaults.headers.authorization = `Bearer ${token}`; // Setar token de forma global nos headers para todas requisicoes verem o token

      setIsAdminData(JSON.parse(adminBack));
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthenticateDataState;
  });

  const history = useHistory();

  const signOut = useCallback(() => {
    localStorage.removeItem('@Fastfeet:token');
    localStorage.removeItem('@Fastfeet:user');
    localStorage.removeItem('@Fastfeet:admin');

    setData({} as AuthenticateDataState);
    history.push('/');
  }, [history]);

  // useEffect(() => {
  //   async function loadUser() {
  //     const token = localStorage.getItem('@Fastfeet:token');

  //     // const response = await api.get<VerifyToken>('/api/account');

  //     // const { error } = response.data;

  //     // if (error) {
  //     //   signOut();
  //     //   return;
  //     // }

  //     const user = localStorage.getItem('@Fastfeet:user');
  //     const adminBack = localStorage.getItem('@Fastfeet:admin');

  //     if (token && user && adminBack) {
  //       api.defaults.headers.authorization = `Bearer ${token}`; // Setar token de forma global nos headers para todas requisicoes verem o token

  //       setData({
  //         token,
  //         user: JSON.parse(user),
  //       });

  //       setIsAdminData(JSON.parse(adminBack));
  //     }
  //   }

  //   loadUser();
  // }, []);

  window.addEventListener(
    'storage',
    async function teste() {
      const token = localStorage.getItem('@Fastfeet:token');
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.get('/api/account');

      localStorage.removeItem('@Fastfeet:token');
      localStorage.removeItem('@Fastfeet:user');
      localStorage.removeItem('@Fastfeet:admin');
      setData({} as AuthenticateDataState);
    },
    false,
  );

  const signIn = useCallback(
    async ({ email, password, role }: SignInCredentials) => {
      const response = await api.post('sessions', {
        email,
        password,
        role,
      });

      const { token, user, isAdmin: adminBack } = response.data;

      localStorage.setItem('@Fastfeet:token', token);
      localStorage.setItem('@Fastfeet:user', JSON.stringify(user));
      localStorage.setItem('@Fastfeet:admin', JSON.stringify(adminBack));

      api.defaults.headers.authorization = `Bearer ${token}`; // Setar token de forma global nos headers para todas requisicoes verem o token

      setData({ token, user });
      setIsAdminData(role === 'admin');

      if (role === 'admin') {
        history.push('orders');
      } else {
        history.push('availableOrders');
      }
    },
    [history],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        isAdmin: isAdminData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
