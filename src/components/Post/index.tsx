import { useEffect, useState } from "react";
import { PostInfo } from "../../screens/FeedScreen";
import axios from "axios";
import { Button, ContainerPost, ContainerText, Menu, ObjectImg } from "./style";
import { FormCreatePost } from "../FormCreatePost";
import { Modal } from "../Modal/Modal";
import { OwnerInformation } from "../OwnerInformation";


interface UserInfo {
    email:string
    homeNumber:string
    id:string
    name:string
    perfilImage:string
    phoneNumber:string
    state:string
    street:string
    setPosts(data:Array<PostInfo>):void
}



export function Post(data:PostInfo){

    const [userInfo, setUserInfo] = useState<UserInfo>()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    useEffect(()=>{
        async function getUserInfo(){
            const email = localStorage.getItem('user.email');
            const token = localStorage.getItem('auth.token');
            try {
                let response = await axios.get(`http://localhost:3030/user/${data.owner}`, { headers: {"Authorization":token}}) 
                if(response.data.has_erorr) return console.log("houve um erro ao se comunicar com o servidor")
                console.log(response.data)
                setUserInfo(response.data.data)
            } catch (error) {
                console.log("Houve um erro ao buscar os dados do usuário: ", error)
            }
            
        }
        getUserInfo()
    },[])

    function handleClickItsMine(){
        setModalIsOpen(true);
    }
    return (
        <ContainerPost>
            <Menu>
                <img src={`http://localhost:3030/${userInfo?.perfilImage}`} />
                <span>{userInfo?.name}</span>
            </Menu>
            <ContainerText>
                <strong>{data.name}</strong>
                <span>Local: {data.location}</span>
                <p>{data.description}</p>
            </ContainerText>
            <ObjectImg src={`http://localhost:3030/${data.objectImage}`} />

            <Button onClick={handleClickItsMine}>It's mine!</Button>
            {
            (modalIsOpen)?
            <Modal
                content={<OwnerInformation owner={data.owner} />}
                size='default'
                setModalIsOpen={setModalIsOpen}
            />
            :null
        } 
        </ContainerPost>
        
    )
}