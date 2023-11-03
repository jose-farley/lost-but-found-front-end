import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";



export function Router(){

    return (
        <Routes>    
            <Route path="/" element={<LoginScreen />}/>
        </Routes>


    )
}