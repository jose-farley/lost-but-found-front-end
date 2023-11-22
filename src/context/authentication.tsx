import {createContext, useEffect, useState} from 'react';

import { api } from '../api';

interface propsLogin {
  email:string  
  password:string
}
interface IUser{
  id:string;
  name:string;
  perfilImage:string;
}
interface IContextAuth{
  email:string
  logar: (props:propsLogin) => Promise<void>;
  deslogar: ()=> Promise<void>;
}

export const AuthContext = createContext({} as IContextAuth);

type Props ={
  children:React.ReactNode;
}

export function AuthFornecedor({children}:Props){

  const [email, setEmail] = useState('')

  async function logar(props:propsLogin):Promise<void>{

    try {
      let {data} = await api.post("user/login", props)
      if(data.has_error) throw new Error("Invalid Password or E-mail")
      const token = data.data as string;
      console.log('token',token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('auth.token', token);
      localStorage.setItem('user.email', props.email);
      setEmail(props.email)
    } catch (error) {
      console.log(error);
    }
      
  }
  async function deslogar():Promise<void>{
    localStorage.removeItem('auth.token');
    localStorage.removeItem('user.email');
    setEmail('')
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('auth.token');
    const email = localStorage.getItem('user.email');
   
    if(token || email){
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    
  },[]);
  return (
    <AuthContext.Provider value={{email,logar, deslogar}}>
       {children}
    </AuthContext.Provider>

  )
}