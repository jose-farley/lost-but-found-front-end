import { useForm } from "react-hook-form";
import { ContainerForm, Form } from "./style";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../screens/LoginScreen/style";
import axios from "axios";
import { useState } from "react";

interface props {
    userId:string
    setModalIsOpen(value:boolean):void
}


export function FormCreatePost ({userId, setModalIsOpen}:props) {
    const newPost = zod.object({
        name: zod.string().min(1, "Você precisa informar um nome para o item."),
        description:zod.string().min(1, "Você precisa informar uma descrição para o item perdido."),
        location:zod.string().min(1, "Você precisa informar onde encontrou o item."),
        objectImage:zod.any(),
    })
    
    type FormProps = zod.infer<typeof newPost>


    const {register, formState, handleSubmit} = useForm<FormProps>({
        resolver:zodResolver(newPost)
    })

    interface archetypeToSend {
         name:string
        isLosted:boolean
        description:string
        location:string
        owner:string
        objectImage:string
    }
   

   
    async function handleCreatePost(data:FormProps) {
        let contentToSend= {
            name:data.name,
            isLosted:true,
            description:data.description,
            location:data.location,
            owner:userId,
            objectImage:data.objectImage
        }
        
        const token = localStorage.getItem('auth.token');
        console.log("Esse é o token", img)
        try {
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('description', data.description)
            formData.append('location', data.location)
            formData.append('owner', userId)
            formData.append('isLosted', true)
            formData.append('objectImage', img)
            let response = await axios.post("http://localhost:3030/lostObject", formData, {
                headers:{
                    'Authorization':token,
                    'Content-Type':'multipart/form-data'
                }
            })
            if(!response.data.has_error) setModalIsOpen(false)
        
        } catch (error) {
            console.log(error)
        }
    }
    const [img, setImg] = useState('')
    return(
        <ContainerForm>
            <Form onSubmit={handleSubmit(handleCreatePost)}>
                <input type="text" placeholder="Nome" {...register("name")}/>
                <ErrorMessage>{formState.errors.name?.message}</ErrorMessage>
                <input type="text" placeholder="Descrição"{...register("description")}/>
                <ErrorMessage>{formState.errors.description?.message}</ErrorMessage>
                <input type="text" placeholder="localização" {...register("location")}/>
                <ErrorMessage>{formState.errors.location?.message}</ErrorMessage>
                <input onChange={e=> setImg(e.target.files[0])} type="file" accept="image/*" placeholder="Imagem do Objeto" />

                <button type="submit">Salvar</button>
            </Form>
        </ContainerForm>
    )


}