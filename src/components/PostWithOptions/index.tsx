import { useContext, useEffect, useState } from "react";
import { PostInfo } from "../../screens/FeedScreen";
import axios from "axios";
import { Button, ContainerIcons, ContainerImagePerfil, ContainerPost, ContainerText, Menu, ObjectImg } from "./style";
import { FormCreatePost } from "../FormCreatePost";
import { Modal } from "../Modal/Modal";
import { OwnerInformation } from "../OwnerInformation";
import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'
import { FormUpdatePost } from "../FormUpdatePost";
import { AuthContext } from "../../context/authentication";

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
interface props {
    description:string
    id:string
    isLosted:boolean
    location:string
    name:string
    objectImage:string
    owner:string

    getUserPost():Promise<void>
}


export function PostWithOptions(data:props){

    const {userInfo, getUserInfo} = useContext(AuthContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalEdit, setModalEditIsOpen] = useState(false)
    useEffect(()=>{
        getUserInfo()
    },[])

    function handleClickItsMine(){
        setModalIsOpen(true);
    }
    async function handleDeletePost(){
        try {
            const token = localStorage.getItem('auth.token');
            let content = {
                id:data.id
            }

            let response = await axios.delete("http://localhost:3030/lostObject", {
                headers:{
                    'authorization':token,
                },
               data:{
                id:data.id
               }
            })
            if(response.data.has_error) return alert('Houve um problema ao remover')
            await data.getUserPost()
        } catch (error) {
            console.log('houve um error ao remover o post: ', error)
        }
    }
    function handleEditPost(){
        setModalEditIsOpen(true);
    }
    return (
        <ContainerPost>
            <Menu>
                <ContainerImagePerfil>
                    <img src={`http://localhost:3030/${userInfo?.perfilImage}`} />
                    <span>{userInfo?.name}</span>
                </ContainerImagePerfil>
                <ContainerIcons>
                    <img onClick={handleEditPost} src={pencil}/>
                    <img onClick={handleDeletePost} src={trash}/>
                </ContainerIcons>
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
              {
                (modalEdit)?
                <Modal
                    content={<FormUpdatePost {...data} key={data.id} setModalIsOpen={setModalEditIsOpen} />}
                    size='large'
                    setModalIsOpen={setModalEditIsOpen}
                />
                :null
            } 
        </ContainerPost>
        
    )
}