import { useContext, useEffect, useState } from "react";
import { ContainerAdress, ContainerContact, ContainerPost, ContainerProfileImg, ContainerUserInfo, EditIconAdress, EditIconPhone } from "./style";
import axios from "axios";
import { PostInfo } from "../FeedScreen";
import { Post } from "../../components/Post";
import { PencilLine } from '@phosphor-icons/react'
import { Modal } from "../../components/Modal/Modal";
import { FormCreatePost } from "../../components/FormCreatePost";
import { FormUpdateAdress } from "../../components/FormUpdateAdress";
import { PostWithOptions } from "../../components/PostWithOptions";
import { EditProfileImage } from "../../components/EditProfileImage";
import { AuthContext } from "../../context/authentication";
import { FormUpdatePhone } from "../../components/FormUpdatePhone";


export function ProfileScreen() {

    const {userInfo, getUserInfo} = useContext(AuthContext)
    
    const [posts, setPosts] = useState<Array<PostInfo>>([])
    const [update, setUpdate] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalEditContact, setModalEditContact] = useState(false)
    const [modalEditImageProfile, setModalEditProfileImage] = useState(false)
    

    function openModal(){
        setModalIsOpen(true);
    }
    useEffect(() => {  
        getUserInfo()
    }, [])
    async function getUserPosts() {
        const token = localStorage.getItem('auth.token');
        try {
            let response = await axios.get(`http://localhost:3030/lostObject/${userInfo!.id}`, { headers: { "Authorization": token } })
            if (response.data.has_erorr) return console.log("houve um erro ao se comunicar com o servidor")
            setPosts(response.data.data)
        } catch (error) {
            console.log("Houve um erro ao buscar os dados do usuário: ", error)
        }
    }
    useEffect(() => {
        // Verifica se userInfo está definido e se update ainda não foi acionado
        if (userInfo && !update) { 
            getUserPosts();
            setUpdate(true); // Atualiza o estado para evitar execução futura
        }
    }, [userInfo, update])

    function handleClickEditAdress() {
        alert('clickou')
    }
    function handleEditImagePerfil(){
        setModalEditProfileImage(true)
    }
    function handleEditContact(){
        setModalEditContact(true)
    }

    return (
        <ContainerPost>
            <ContainerUserInfo>
                <ContainerProfileImg>
                    <img onClick={handleEditImagePerfil} src={`http://localhost:3030/${userInfo?.perfilImage}`} />
                    <span>{userInfo?.name}</span>
                </ContainerProfileImg>

                <ContainerAdress>
                    <EditIconAdress><PencilLine size={28} onClick={openModal} /></EditIconAdress>
                    <strong>Endereço</strong>
                    <span>Estado: {userInfo?.state}</span>
                    <span>Rua: {userInfo?.street}</span>
                    <span>Número da casa: {userInfo?.homeNumber}</span>
                </ContainerAdress>

                <ContainerContact>
                    <EditIconPhone><PencilLine onClick={handleEditContact} size={28} /></EditIconPhone>
                    <strong>Informações para contato</strong>
                    <span>Telefone: {userInfo?.phoneNumber}</span>
                    <span>E-mail: {userInfo?.email}</span>
                </ContainerContact>
            </ContainerUserInfo>
            <strong>Posts</strong>
            {
                posts.map(el => {
                    return <PostWithOptions {...el} key={el.id} getUserPost={getUserPosts()} />
                })
            }
             {
                (modalIsOpen)?
                <Modal
                    content={<FormUpdateAdress userId={userInfo!.id} setModalIsOpen={setModalIsOpen} setUpdate={getUserInfo}/>}
                    size='large'
                    setModalIsOpen={setModalIsOpen}
                />
                :null
            }
             {
                (modalEditImageProfile)?
                <Modal
                    content={<EditProfileImage  setModalIsOpen={setModalEditProfileImage} setUpdate={getUserInfo}/>}
                    size='default'
                    setModalIsOpen={setModalEditProfileImage}
                />
                :null
            }
             {
                (modalEditContact)?
                <Modal
                    content={<FormUpdatePhone  setModalIsOpen={setModalEditContact} setUpdate={getUserInfo} userId={""}/>}
                    size='default'
                    setModalIsOpen={setModalEditContact}
                />
                :null
            }
        </ContainerPost>
    )
}