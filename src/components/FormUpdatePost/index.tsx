import { useForm } from "react-hook-form";
import { ContainerForm, Form } from "./style";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../screens/LoginScreen/style";
import axios from "axios";
import { useState } from "react";

interface props {
    description:string
    id:string
    isLosted:boolean
    location:string
    name:string
    objectImage:string
    owner:string

    setModalIsOpen(value:boolean):void
}


export function FormUpdatePost (postInformation:props) {
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
   

   
    async function handleCreatePost(props:FormProps) {   
        const token = localStorage.getItem('auth.token');
        try {
            const formData = new FormData()
            formData.append('name', props.name)
            formData.append('description', props.description)
            formData.append('location', props.location)
            formData.append('owner', postInformation.owner)
            formData.append('isLosted', true)
            formData.append('objectImage', img)
            formData.append('id', postInformation.id)
            let response = await axios.put("http://localhost:3030/lostObject", formData, {
                headers:{
                    'Authorization':token,
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(response)
            if(!response.data.has_error) postInformation.setModalIsOpen(false)
    
        } catch (error) {
            console.log(error)
        }
    }
    const [img, setImg] = useState('')
    return(
        <ContainerForm>
            <Form onSubmit={handleSubmit(handleCreatePost)}>
                <input type="text" placeholder={postInformation.name} {...register("name")}/>
                <ErrorMessage>{formState.errors.name?.message}</ErrorMessage>
                <input type="text" placeholder={postInformation.description} {...register("description")}/>
                <ErrorMessage>{formState.errors.description?.message}</ErrorMessage>
                <input type="text" placeholder={postInformation.location} {...register("location")}/>
                <ErrorMessage>{formState.errors.location?.message}</ErrorMessage>
                <input onChange={e=> setImg(e.target.files[0])} type="file" accept="image/*" placeholder="Imagem do Objeto" />

                <button type="submit">Salvar</button>
            </Form>
        </ContainerForm>
    )


}