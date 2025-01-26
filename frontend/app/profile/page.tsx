'use client'
import { useContext } from "react";
import Auth from "@/app/components/Auth"
import Profile from "../components/Profile";
import { AuthContext } from "@/context/AuthCotext";

const ProfilePage = () => {
    const {user} = useContext(AuthContext);
    return (user? <Profile user={user}/>:<Auth />)
}

export default ProfilePage;