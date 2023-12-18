import axios from "axios";
import { useEffect, useState } from "react"
import { ContainerPost } from "./style";
import { Post } from "../../components/Post";

export interface PostInfo {
    description:string
    id:string
    isLosted:boolean
    location:string
    name:string
    objectImage:string
    owner:string
   
}



export function FeedScreen(){
     const [posts, setPosts] = useState<Array<PostInfo>>([])
    
    useEffect(()=>{
        async function getPosts(){
            const token = localStorage.getItem('auth.token');
            try {
                let response = await axios.get(`http://localhost:3030/lostObject/`, { headers: {"Authorization":token}}) 
                if(response.data.has_erorr) return console.log("houve um erro ao se comunicar com o servidor")
                setPosts(response.data.data)
            } catch (error) {
                console.log("Houve um erro ao buscar os dados do usuário: ", error)
            }
            
        }
        getPosts()
    })

    return (
        <ContainerPost>
            {
                posts.map(el => {
                    return <Post {...el} key={el.id}/>
                })
            }
        </ContainerPost>
    )
}