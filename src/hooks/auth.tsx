import { stringify } from 'querystring';
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

interface AuthState {
  token: string;
}

interface IProps {
  children: React.ReactNode;
}

interface SignInCredentials {
  usuario: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const [data, setData] = useState<AuthState>(() => {
    const dataAtual = String(new Date().toLocaleString().substr(0, 10));
    const tokenDataAtual = localStorage.getItem('@Democrata:Date')

    if (dataAtual !== tokenDataAtual) {
      localStorage.removeItem('@Democrata:Token')
      localStorage.removeItem('@Democrata:user')
      localStorage.removeItem('@Democrata:Date')
    }

    const token = localStorage.getItem('@Democrata:Token')
    const user = localStorage.getItem('@Democrata:user')
    const tokenData = localStorage.getItem('@Democrata:Date')

    if (token && user) {
      if (dataAtual === tokenData) {
        //  console.log(`dataAtual ${dataAtual}`)
        //  console.log(`datatoken ${tokenData}`)
        return { token, user }
      }
    }



    return {} as AuthState
  });

  const signIn = useCallback(async ({ usuario, senha }: { usuario: any, senha: any }) => {
    console.log('dentro do auth')
    let dataDia = String(new Date().toLocaleString().substr(0, 10));
    const response = await api.post('auth', {
      usuario,
      senha
    })

    console.log(response)

    const { token, usuarioAPI } = response.data[0];

    localStorage.setItem('@Democrata:Token', token);
    localStorage.setItem('@Democrata:user', usuario);
    localStorage.setItem('@Democrata:Date', dataDia);
    console.log('Teste chegada aqui' + usuarioAPI);
    setData({ token });



  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Democrata:Token')
    localStorage.removeItem('@Democrata:user')
    localStorage.removeItem('@Democrata:Date')
    navigate('/')
    setData({} as AuthState)

  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth é necessário usar por volta o AuthProvider')
  }

  return context;
}

export { AuthProvider, useAuth }
