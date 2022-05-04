import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import Login from "../components/views/Login";
import Profile from "../components/views/Profile";
import Admin from "../components/views/Admin";
import Registration from "../components/views/Registration";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
    )
}