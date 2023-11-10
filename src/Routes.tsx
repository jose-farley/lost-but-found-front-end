import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import {LoginScreen} from "./screens/LoginScreen/index";



export function Router(){

    return (
        <Routes>    
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/login" element={<LoginScreen />}/>
        </Routes>


    )
}