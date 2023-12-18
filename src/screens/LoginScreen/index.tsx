import { NavLink, useNavigate } from "react-router-dom"
import wellcomeImage from '../../assets/wellcome.png'
import * as zod from 'zod'
import { ContainerContentLogin, ContainerLogin, ErrorMessage, FormLogin, Subtitle } from "./style"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react"; 
import { AuthContext } from "../../context/authentication";



const newLoginSchema = zod.object({
    email: zod.string().min(1, "Você precisa informar um E-mail.")
    .email("E-mail inválido"),
    password:zod.string().min(8, "A senha deve ter ao menos 8 caracteres."),
})

type FormProps = zod.infer<typeof newLoginSchema>




export function LoginScreen(){
    const {logar} = useContext(AuthContext)
    const navigate = useNavigate()
    const {register, handleSubmit, formState} = useForm<FormProps>({
        resolver:zodResolver(newLoginSchema)
    })

    async function handleLogin(data:FormProps){
        logar(data)
    }
    return (
        <ContainerLogin>
           <ContainerContentLogin>
            <strong>Bem-vindo!</strong>
            <Subtitle>Entre na sua conta e aproveite a nossa plataforma.</Subtitle>

            <FormLogin onSubmit={handleSubmit(handleLogin)}>
                <input type="email" placeholder="E-mail"  {...register("email")}/>
                <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
                <input type="password" placeholder="Senha" {...register("password")} />
                <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
                <button type="submit">Entrar</button>
                <span>Não possui uma conta? <NavLink to="/cadastrar">Cadastre-se</NavLink> </span>
            </FormLogin>

           </ContainerContentLogin>
           <img src={wellcomeImage} />
        </ContainerLogin>
    )
}