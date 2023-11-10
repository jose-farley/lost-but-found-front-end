import { NavLink } from "react-router-dom"
import wellcomeImage from '../../assets/wellcome.png'
import { ContainerLogin } from "./style"
export function LoginScreen(){
    return (
        <ContainerLogin>
           <div>
            <strong>Bem-vindo!</strong>
            <span>Entre na sua conta e aproveite a nossa plataforma.</span>
            <form action="">
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button>Entrar</button>
                <span>Não possui uma conta?<NavLink to="/cadastrar">Cadastre-se</NavLink> </span>
            </form>
           </div>
           <img src={wellcomeImage} />
        </ContainerLogin>
    )
}