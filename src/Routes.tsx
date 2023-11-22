import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import {LoginScreen} from "./screens/LoginScreen/index";
import { useContext } from "react"; 
import { AuthContext } from "./context/authentication";


export function Router(){
    const {email} = useContext(AuthContext)
    return (
        <Routes>
            {
                (email.length<=0)?
                    <>
                        <Route path="/" element={<HomeScreen />}/>
                        <Route path="/login" element={<LoginScreen />}/>
                    </>
                :  <>
                        <Route path="/inicio" element={<HomeScreen />}/>    
                    </>
            } 
        </Routes>
       
      

    )
    
}