import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthenticateDataState {
  user: object;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthenticateDataState>(() => {
    const token = localStorage.getItem('@Fastfeet:token');
    const user = localStorage.getItem('@Fastfeet:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`; // Setar token de forma global nos headers para todas requisicoes verem o token

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthenticateDataState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Fastfeet:token', token);
    localStorage.setItem('@Fastfeet:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`; // Setar token de forma global nos headers para todas requisicoes verem o token

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Fastfeet:token');
    localStorage.removeItem('@Fastfeet:user');

    setData({} as AuthenticateDataState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
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
