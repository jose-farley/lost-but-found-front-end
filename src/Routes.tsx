import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import {LoginScreen} from "./screens/LoginScreen/index";
import { useContext } from "react"; 
import { AuthContext } from "./context/authentication";
import { RegisterScreen } from "./screens/RegisterScreen";
import { FeedScreen } from "./screens/FeedScreen";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ProfileScreen } from "./screens/ProfileScreen";


export function Router(){
    const {email} = useContext(AuthContext)
    return (
        <Routes>
            {
                (email.length<=0)?
                    <>
                        <Route path="/" element={<HomeScreen />}/>
                        <Route path="/login" element={<LoginScreen />}/>
                        <Route path="/cadastrar" element={<RegisterScreen />}/>
                    </>
                :  <>
                        <Route path="/" element={<DefaultLayout/>}>
                            <Route path="/inicio" element={<FeedScreen />}/>  
                            <Route path="/profile" element={<ProfileScreen />}/> 
                        </Route>
                          
                    </>
            } 
        </Routes>
       
      

    )
    
}