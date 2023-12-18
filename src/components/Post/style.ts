import styled from "styled-components";



export const ContainerPost = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    width: 25rem;
    height: 23rem;
    gap: 1rem;

    img {
        width: 10rem;
        height: 2.5;
    }

`
export const ObjectImg = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 4rem;
    height: 8rem;
`
export const Menu = styled.nav`

    display: flex;
    gap: 0.4rem;
    align-items: center;
    span {
        color: ${props => props.theme["gray-700"]};
    }
    img {
        width: 2.5rem;
        border-radius: 100%;
    }
    

`

export const ContainerText = styled.nav`

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: 5rem;
    strong {
        color: ${props => props.theme["gray-700"]};
    }
    p {
        color: ${props => props.theme["gray-700"]};
    }
    img {
        width: 10rem;
    }
    span {
        font-size: 0.9rem;
        color: ${props => props.theme["gray-700"]};
    }
    

`

export const Button = styled.button`
    display: flex;
    background-color: ${props => props.theme["blue-400"]};
    color:white;
    transition: 0.2s;
    cursor: pointer;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    width: 6rem;
    height: 3rem;
    margin-left: 72%;

    &:hover {
        background-color: ${props => props.theme["blue-100"]};
    }

`