import { useForm } from "react-hook-form";
import { ContainerForm, Form } from "./style";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../screens/LoginScreen/style";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authentication";

interface props {
    userId:string
    setModalIsOpen(value:boolean):void
    setUpdate():void
}

export function FormUpdatePhone ({userId, setUpdate,setModalIsOpen}:props) {

    const {userInfo, getUserInfo} = useContext(AuthContext)
    useEffect(()=>{
        getUserInfo()
    }, [])
    const newAdress = zod.object({
        phoneNumber:zod.string().min(8, "Você precisa informar um número de telefone."),
    })
    
    type FormProps = zod.infer<typeof newAdress>

    const {register, formState, handleSubmit} = useForm<FormProps>({
        resolver:zodResolver(newAdress)
    })

    async function handleCreatePost(data:FormProps) {      
        let contentToSend= {
            name: userInfo?.name,
            email: userInfo?.email,
            id: userInfo?.id,
            perfilImage: userInfo?.perfilImage,
            phoneNumber: data.phoneNumber,
           state:userInfo.state,
           street:userInfo.street,
           homeNumber:userInfo.homeNumber,
        }
        
        const token = localStorage.getItem('auth.token');

        try {
            let response = await axios.put("http://localhost:3030/user/pic/", contentToSend, {
                headers:{
                    'Authorization':token,
                    'Content-Type':'multipart/form-data'
                }
            })
            if(!response.data.has_error){
                setModalIsOpen(false)
                setUpdate()
            }
        
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ContainerForm>
            <Form onSubmit={handleSubmit(handleCreatePost)}>
                <input type="text" placeholder={userInfo?.phoneNumber} {...register("phoneNumber")}/>
                <ErrorMessage>{formState.errors.phoneNumber?.message}</ErrorMessage>
                <button type="submit">Salvar</button>
            </Form>
        </ContainerForm>
    )


}


