import { NavLink, useNavigate } from "react-router-dom";
import { ColumnInputs, ErrorMessage, FormContainer, Information, InputContainer, SelectContainer } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api";


interface Estado {
    id: string
    sigla:string
    nome:string
    regiao:any
}

const phoneNumberRegex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)

const newRegisterUser = zod.object({
    email: zod.string().min(1, "Você precisa informar um E-mail.")
    .email("E-mail inválido"),
    password:zod.string().min(8, "A senha deve ter ao menos 8 caracteres."),
    state:zod.string().min(3, "Você deve informar o seu estado"),
    name:zod.string().min(5, "Você precisa informar o seu nome."),
    street:zod.string().min(12, "Você deve informar sua rua."),
    phoneNumber:zod.string(),
    homeNumber:zod.string().min(1,"Você deve informar seu número de telefone."),
    userImage:zod.any(),
})

type FormProps = zod.infer<typeof newRegisterUser>





export function RegisterScreen(){

    const [states, setStates]= useState<Array<Estado>>([])
    const [img, setImg] = useState('')
    const {register, handleSubmit, formState} = useForm<FormProps>({
        resolver:zodResolver(newRegisterUser)
    })
    const navigate = useNavigate()
    async function getStates(){
        try {
            let result = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            setStates(result.data)
            
        } catch (error) {
            alert("Houve um erro ao se comunicar com o servidor!")
        }
    }
    useEffect(()=>{
        getStates() 
        

    }, [])
    async function handleRegisterUser(data:FormProps){

        try {
            const token = localStorage.getItem('auth.token');
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('password', data.password)
            formData.append('email', data.email)
            formData.append('state', data.state)
            formData.append('street', data.street)
            formData.append('homeNumber', data.homeNumber)
            formData.append('phoneNumber', data.phoneNumber)
            formData.append('userImage', img)

            let response = await axios.post("http://localhost:3030/user", formData, {
                headers:{
                    'Authorization':token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            if(response.data.has_error) return alert("Houve um problema ao se cadastrar")
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    

    }
    return(
        <FormContainer onSubmit={handleSubmit(handleRegisterUser)}>
            <Information>
                <strong>Cadastre-se</strong>
                <span>Você pode fazer o seu login clicando <NavLink to="/login">aqui.</NavLink></span>
            </Information>
        
            <InputContainer>
                <ColumnInputs>
                    <input type="text"  placeholder="Nome" {...register("name")}/>
                    <ErrorMessage>{formState.errors.name?.message}</ErrorMessage>
                    <input type="email" placeholder="E-mail"  {...register("email")} />
                    <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
                    <input type="text" placeholder="Senha"  {...register("password")} />
                    <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
                    <SelectContainer name="Estado">
                        {
                            
                            states.map(el=>{
                                return (
                                    <option  {...register("state")} value={el.nome}>{el.nome}</option>
                                )
                            })
                        }
                    </SelectContainer>
                    <ErrorMessage>{formState.errors.state?.message}</ErrorMessage>
                </ColumnInputs>
                <ColumnInputs>
                    <input type="text" placeholder="Rua" {...register("street")}/>
                    <ErrorMessage>{formState.errors.street?.message}</ErrorMessage>
                    <input type="number" placeholder="Número da casa"  {...register("homeNumber")}/>
                    <ErrorMessage>{formState.errors.homeNumber?.message}</ErrorMessage>
                    <input type="file"
                    onChange={e=> setImg(e.target.files[0])}
                    accept="image/*"
                    />
                    
                    <input type="text" placeholder="Número de celular"{...register("phoneNumber")} />
                    <ErrorMessage>{formState.errors.homeNumber?.message}</ErrorMessage>
                </ColumnInputs>         
            </InputContainer>
            <button>Cadastrar</button> 
        </FormContainer>
    )
}