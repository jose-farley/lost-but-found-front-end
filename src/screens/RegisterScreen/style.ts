import styled from "styled-components";


export const Information = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.theme["gray-700"]};
    }
`
export const SelectContainer = styled.select`
    height: 3.4rem;
    border-radius: 8px;
    padding-right: 2rem;
    padding-left: 1rem;
    border: 2px solid ${props => props.theme["gray-400"]};
    color: ${props => props.theme["gray-700"]};
  
`
export const ErrorMessage = styled.span`
    color:red;
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;
    text-align: center;

    strong {
        font-size: 2rem;
        color: ${props => props.theme["gray-700"]};
    }
    button {
        background-color:${props => props.theme["blue-100"]};
        height: 3.125rem;
        border: none;
        width: 12rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 8px;
        color: ${props => props.theme.white};
        transition: 0.4s;
        cursor: pointer;

        &:hover{
            background-color:${props => props.theme["blue-400"]};
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    
`

export const ColumnInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    input {
        border: none;
        outline: none;
        width: 20rem;
        border: 2px solid ${props => props.theme["gray-400"]};
        padding: 1rem;
        border-radius: 8px;
    }
`
