
import styled from "styled-components";


export const ContainerLogin = styled.div`
    
    display:flex;
    flex-direction: row;
    margin-top: 15rem;
    justify-content: space-between;
    align-items: center;
    width: 60rem;
    margin-left: auto;
    margin-right: auto;
    img {
        width: 25rem;
        height: 25em;
    }
`

export const ContainerContentLogin = styled.div`
    display:flex;
    flex-direction: column;
    text-align: center;

    strong {
        font-size: 1.25rem;
        color: ${props => props.theme["gray-500"]};
        margin-bottom: 0.4rem;
    }
`

export const Subtitle = styled.span`
  color: ${props => props.theme["gray-600"]};
`
export const ErrorMessage = styled.span`
    font-size: 0.8rem;
    color: ${props => props.theme["red"]};
    height: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: -0.8rem;
    margin-bottom: 0.2rem;

`
export const FormLogin = styled.form`
    display:flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    margin-top: 3rem;
    input {
        border: none;
        outline: none;
        border: 2px solid ${props => props.theme["gray-400"]};
        padding: 1rem;
        border-radius: 8px;
    }
    a{
        color: ${props => props.theme["blue-100"]}; 
    }
    button {
        background-color:${props => props.theme["blue-100"]};
        height: 3.125rem;
        border: none;
        border-radius: 8px;
        color: ${props => props.theme.white};
        transition: 0.4s;
        cursor: pointer;

        &:hover{
            background-color:${props => props.theme["blue-400"]};
        }
    }
`