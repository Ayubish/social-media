'use client'
import { AuthContext } from "@/context/AuthCotext";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default function ProfilePage(){
    const {user} = useContext(AuthContext);
    if(user){
        redirect(`/u/${user.username}`);
    }else{
        redirect("/signup");
    }
}