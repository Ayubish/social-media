import { useState } from "react";
import SignIn from "../(auth)/signin/page";
import SignUp from "../(auth)/signup/page";


const Auth = () =>{
    const [registered, setRegistered] = useState(false);

    return registered ? <SignIn setRegistered={setRegistered} /> : <SignUp setRegistered={setRegistered} />;
}

export default Auth;