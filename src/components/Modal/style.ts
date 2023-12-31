import styled from "styled-components"


export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.6);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

`
interface ModalProps {
    size: 'default' | 'large'
}
export const ModalContent = styled.div<ModalProps>`

    
    flex-direction: column;
    display: flex;
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;
    
    height: ${props => (props.size=='default')?'20rem':'32rem' };
    width: 40rem;
    background-color: white;
    box-shadow: 1px 0.4px 10px black;
    border-radius: 8px;
    z-index: 80;
    padding: 1rem;
`
export const ContainerModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    span {
        
        color: ${props => props.theme["gray-700"]};
    }
    button {
        cursor: pointer;
        border: none;
        background-color: white;
    }
`