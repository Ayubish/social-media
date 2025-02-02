import Profile from "@/app/components/Profile";
import { findUser } from "@/lib/api"
import { notFound } from "next/navigation";

export default async function Page({
    params,
  }: {
    params: Promise<{ username: string }>
  }) {
    const username = (await params).username
    const wantedUser = await findUser(username);
    
    if(wantedUser.username){
      return(<div><Profile user={wantedUser} /></div>) 
    } else {
      return notFound();
    }
  }
















// 'use client'
// import { use, useContext, useEffect, useState } from "react";
// import Auth from "@/app/components/Auth"
// import Profile from "../../components/Profile";
// import { AuthContext } from "@/context/AuthCotext";
// import Image from "next/image";
// import { findUser } from "@/lib/api";

// const ProfilePage = ({ username } : any) => {
//     const {user, logout} = useContext(AuthContext);
//     const [wantedUser, setWantedUser] = useState({})
//     useEffect(()=>{
//         findUser({username}).then((foundUser)=>{
//             console.log(foundUser);
//             setWantedUser(foundUser);
//     }).catch((err)=>console.log("user not found"));
//     }, [])
//     return (
//         <div>
//             <Profile user={wantedUser}/>
//         </div>
//     )

// }

// export default ProfilePage;