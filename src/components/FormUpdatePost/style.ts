import styled from "styled-components"

export const ContainerForm = styled.div`

    display: flex;
    flex-direction: column;

`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid ${props => props.theme["gray-700"]};
    }
    button {
        cursor: pointer;
        background-color: ${props => props.theme["blue-400"]};
        color: white;
        border:none;
        padding: 1rem;
        border-radius: 8px;
    }
    
`