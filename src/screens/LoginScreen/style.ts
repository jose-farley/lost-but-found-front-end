import styled from "styled-components";



export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
   
`

export const ContainerMenuLogin = styled.div`
    display: flex;
  
    width: 100vw;
    height: 5rem;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    
    strong {
        font-size: 1.2rem;
        color: ${props => props.theme["gray-600"]};
    }
    img {
       margin-right: 1rem;
    }
    span {
        color: ${props => props.theme.blue};
    }

`
interface propsButton {
    highlight:boolean
}
export const ContainerButtonsLogin = styled.div`
    display: flex;
    gap: 1rem;
    
`
export const ButtonHighLight = styled.button<propsButton>`
    cursor: pointer;
    background-color: ${props => (props.highlight)?props.theme["blue-100"]:props.theme.white};
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    color: ${props => (props.highlight)?props.theme.white:props.theme["gray-600"]};
    width: 8rem;
    transition: 0.4s;

    &:hover {
        background-color: ${props => (props.highlight)?props.theme["blue-400"]:props.theme.white};

    }
`

export const ContainerLoginContent = styled.div`
    display: flex;
    margin-top: 4rem;
    justify-content: center;
    gap: 10rem;
   
    img {
        width: 25rem;
        height: 25rem;
    }
`

export const Apresentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    margin-top: 4rem;
    
`
export const Title = styled.h1`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme["gray-700"]};
`
export const Text = styled.p`
    line-height: 1.6;
     color: ${props => props.theme["gray-600"]};
`


