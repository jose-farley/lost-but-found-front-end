import { useForm } from "react-hook-form";
import { ContainerForm, Form } from "./style";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../screens/LoginScreen/style";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authentication";

interface props {
    setUpdate():void
    setModalIsOpen(value:boolean):void
}


export function EditProfileImage (userData:props) {
    const {userInfo, getUserInfo} = useContext(AuthContext)
   
    async function handleCreatePost(event:any) {
        event.preventDefault()
        const token = localStorage.getItem('auth.token');
        try {
            const formData = new FormData()
            formData.append('name', userInfo.name)
            formData.append('email', userInfo.email)
            formData.append('id', userInfo.id)
            formData.append('state', userInfo.state)
            formData.append('street', userInfo.street)
            formData.append('userImage', img)
            formData.append('homeNumber', userInfo.homeNumber)
            formData.append('phoneNumber', userInfo.phoneNumber)
            let response = await axios.put("http://localhost:3030/user", formData, {
                headers:{
                    'Authorization':token,
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(response.data)
            if(!response.data.has_error) {
                userData.setModalIsOpen(false)
                getUserInfo()
            }
            
    
        } catch (error) {
            console.log(error)
        }
    }
    const [img, setImg] = useState('')
    return(
        <ContainerForm>
            <Form onSubmit={handleCreatePost}>
                <input onChange={e=> {setImg(e.target.files[0])}} type="file" accept="image/*" placeholder="Imagem do Objeto" />

                <button type="submit">Salvar</button>
            </Form>
        </ContainerForm>
    )


}