import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { Button, ContainerButtons, ContainerLogo, ContainerPage, ContentContainer, HighLight, Menu, SearchContainer, UserInfoContainer } from "./style";
import searchIcon from '../../assets/magnifying-glass.svg'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {List, User, PlusCircle, SignOut} from '@phosphor-icons/react'
import { Modal } from "../../components/Modal/Modal";
import { FormCreatePost } from "../../components/FormCreatePost";
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
}


export function DefaultLayout(){


    const [modalIsOpen, setModalIsOpen] = useState(false)

    const {userInfo, getUserInfo} = useContext(AuthContext)
    function openModal(){
        setModalIsOpen(true);
    }
    useEffect(()=>{
        getUserInfo()   
    },[])
    



    function handleSignOut(){
        window.location.href="http://localhost:5173"
    }
	return (
		<div>
			<Menu>
                <ContainerLogo>
                    <img src={logo} />
                    <span><HighLight>L</HighLight>OST <HighLight>B</HighLight>UT <HighLight>F</HighLight>OUND</span>
                </ContainerLogo>

                <SearchContainer>
                    <input type="text" />
                    <img src={searchIcon}  />
                </SearchContainer>
                <UserInfoContainer>
                    <span>{userInfo?.name}</span>
                    <img src={`http://localhost:3030/${ userInfo?.perfilImage}`}/>
                </UserInfoContainer>
            </Menu>
            <ContentContainer>
                <ContainerButtons>
                    <NavLink to='/inicio'><Button><List size={30} />Feed</Button></NavLink>
                    <NavLink to="/profile"><Button><User size={30}/>My profile</Button></NavLink>
                    <Button onClick={openModal}><PlusCircle size={30}/>Create post</Button>
                    <Button onClick={handleSignOut}><SignOut size={30}/>Log out</Button>
                </ContainerButtons>

                
                <Outlet />
            </ContentContainer>
            {
                (modalIsOpen)?
                <Modal
                    content={<FormCreatePost userId={userInfo!.id} setModalIsOpen={setModalIsOpen}/>}
                    size='large'
                    setModalIsOpen={setModalIsOpen}
                />
                :null
            } 
        </div>
	);
}