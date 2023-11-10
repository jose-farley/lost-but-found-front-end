import { Apresentation, ButtonHighLight, ContainerButtonsLogin, ContainerLogin, ContainerLoginContent, ContainerLogo, ContainerMenuLogin, Title, Text} from "./style";
import logo from  '../../assets/logo.svg'
import peopleFigure from '../../assets/peopleQuestion.png'
import { NavLink } from "react-router-dom";

export function HomeScreen(){
    
    return (
        <ContainerLogin>
            <ContainerMenuLogin>
                <ContainerLogo>
                    <img src={logo} />
                    <strong>Lost But <span>F</span>ound</strong>
                </ContainerLogo>

                <ContainerButtonsLogin>
                    <NavLink to="/cadastrar">
                        <ButtonHighLight highlight={false}>Cadastre-se</ButtonHighLight>
                    </NavLink>
                    
                    <NavLink to="/login">
                        <ButtonHighLight highlight>Entrar</ButtonHighLight>
                    </NavLink>
                </ContainerButtonsLogin>
            </ContainerMenuLogin>

            <ContainerLoginContent>
              <img src={peopleFigure}/>
               <Apresentation>
                    <Title>Bem-vindo ao Lost but Found!</Title>  
                    <Text>
                        Aqui, conectamos objetos perdidos aos seus legítimos donos, tornando reencontros possíveis. Compreendemos a aflição de perder algo valioso e a alegria de tê-lo de volta. Nossa plataforma de uso intuitivo permite relatar itens perdidos ou encontrar posses achadas com facilidade. Nosso objetivo é ser ponte que une itens perdidos e seus donos. Junte-se a nós na missão de reunir tesouros perdidos aos seus lares verdadeiros. Comece a explorar e reunir hoje mesmo. 
                    </Text>  
               </Apresentation>
            </ContainerLoginContent>
        </ContainerLogin>
       
    )
}