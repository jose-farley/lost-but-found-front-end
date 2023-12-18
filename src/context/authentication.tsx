import {createContext, useEffect, useState} from 'react';

import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  userInfo:UserInfo
  logar: (props:propsLogin) => Promise<void>;
  deslogar: ()=> Promise<void>;
  getUserInfo:()=> Promise<void>;
}

export const AuthContext = createContext({} as IContextAuth);

type Props ={
  children:React.ReactNode;
}
interface UserInfo {
  email:string
  homeNumber:string
  id:string
  name:string
  perfilImage:string
  phoneNumber:string
  state:string
  street:string
}
export function AuthFornecedor({children}:Props){

  const [email, setEmail] = useState('')
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const navigate = useNavigate()

    async function getUserInfo(){
      const email = localStorage.getItem('user.email');
      const token = localStorage.getItem('auth.token');
      try {
          let response = await axios.get(`http://localhost:3030/uniqueUser/${email}`, { headers: {"Authorization":token}}) 
          if(response.data.has_erorr) return console.log("houve um erro ao se comunicar com o servidor")
          setUserInfo(response.data.data)
      } catch (error) {
          console.log("Houve um erro ao buscar os dados do usuário: ", error)
      }
      
  }

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
      navigate("/inicio")
    } catch (error) {
     alert("E-mail ou senha inválidos!")
     navigate("/login")
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
    <AuthContext.Provider value={{email, userInfo,logar, deslogar, getUserInfo}}>
       {children}
    </AuthContext.Provider>

  )
}