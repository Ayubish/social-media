'use client'
import { use, useContext, useEffect, useState } from "react";
import Auth from "@/app/components/Auth"
import Profile from "../../components/Profile";
import { AuthContext } from "@/context/AuthCotext";
import Image from "next/image";
import { findUser } from "@/lib/api";

const ProfilePage = ({ username } : any) => {
    const {user, logout} = useContext(AuthContext);
    const [wantedUser, setWantedUser] = useState({})
    useEffect(()=>{
        findUser({username}).then((foundUser)=>{
            console.log(foundUser);
            setWantedUser(foundUser);
    }).catch((err)=>console.log("user not found"));
    }, [])
    return (
        <div>
            <Profile user={wantedUser}/>
        </div>
    )

}

export default ProfilePage;