import styled from "styled-components";


export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
 
`

export const Menu = styled.nav`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    span{
        font-weight: bold;
    }
`
export const HighLight = styled.span`
    color: ${props => props.theme["blue-400"]};
`

export const SearchContainer = styled.div`
    display: flex;
    background-color: white;
    border-radius: 20px;
    padding: 0.2rem;
    width: 30rem;
    align-items: center;
    border: 0.2px solid ${props => props.theme["gray-400"]};

    input {
        font-size: 1.2rem;
        margin-left: 1rem;
        color: ${props => props.theme["gray-600"]};
        width: 24rem;
        height: 2.4rem;
        border: none;
        outline: none;
    }
`

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    
    span{
        font-weight: bold;
        color: ${props => props.theme["gray-700"]};
    }
    
    img {
        border-radius: 100%;
        width: 3rem;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;

`
export const ContainerButtons = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: 100vh;
    width: 20rem;
    padding: 1rem;

`

export const Button = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    flex-direction: row;
    gap: 0.4rem;
    font-weight: bold;
    background-color: white;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme["blue-400"]};
        color: white;
    }

`
