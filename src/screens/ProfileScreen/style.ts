import styled from "styled-components";

export const ContainerPost = styled.div`
    background-color: #ECECEC;
    display: flex;
    width: 55rem;
    height: 30rem;
    overflow-x: scroll;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
   
    align-items: center;
   
    strong {
        color:${props => props.theme["gray-700"]} ;  
    
      
    }

`
export const EditIconAdress = styled.span`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`
export const EditIconPhone = styled.span`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`
export const ContainerUserInfo = styled.div`
    background-color: white;
    display: flex;
    height: 12rem;
    gap: 2rem;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    box-shadow: 1px 1px 9px 1px ${props => props.theme["gray-700"]};
`


export const ContainerProfileImg = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    img {
        cursor: pointer;
        border-radius: 100%;
        width: 9rem;
        height: 9rem;
    }
    span {
        font-weight: bold;
        color:  ${props => props.theme["gray-700"]};
    }
`


export const ContainerAdress = styled.div`

    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 1px 1px 9px 1px ${props => props.theme["gray-700"]};
    gap: 0.4rem;
    

    strong {
        color:${props => props.theme["gray-700"]} ;
    }
    span {
        color:${props => props.theme["gray-600"]} ;
    }
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 1px 1px 9px 1px ${props => props.theme["gray-700"]};
    gap: 0.4rem;

    strong {
        color:${props => props.theme["gray-700"]} ;
    }
    span {
        color:${props => props.theme["gray-600"]} ;
    }
`