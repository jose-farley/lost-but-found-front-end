import axios from "axios"
import { PostInfo } from "../../screens/FeedScreen"
import { ContainerAdress } from "../../screens/ProfileScreen/style"
import { ContainerInfo } from "./style"
import { useEffect, useState } from "react"

interface props {
  owner:string
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
export function OwnerInformation({owner}:props){
    const [userInfo, setUserInfo] = useState<UserInfo>()
    useEffect(()=>{
        async function getUserInfo(){
            const token = localStorage.getItem('auth.token');
            try {
                let response = await axios.get(`http://localhost:3030/user/${owner}`, { headers: {"Authorization":token}}) 
                if(response.data.has_erorr) return console.log("houve um erro ao se comunicar com o servidor")
                setUserInfo(response.data.data)
            } catch (error) {
                console.log("Houve um erro ao buscar os dados do usuário: ", error)
            }
            
        }
        getUserInfo()
    
    },[])
    

    return(
        <ContainerInfo>
            <ContainerAdress>
                <strong>Endereço</strong>
                <span>Estado: {userInfo?.state}</span>
                <span>Rua: {userInfo?.street}</span>
                <span>Número da casa: {userInfo?.homeNumber}</span>
            </ContainerAdress>
            <ContainerAdress>
                <strong>Contato</strong>
                <span>Telefone: {userInfo?.phoneNumber}</span>
                <a href={`mailto:${userInfo?.email}`}>{userInfo?.email}</a>
            </ContainerAdress>
           

        </ContainerInfo>
    )
}