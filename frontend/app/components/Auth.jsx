import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () =>{
    const [registered, setRegistered] = useState(false);

    return registered ? <SignIn setRegistered={setRegistered} /> : <SignUp setRegistered={setRegistered} />;
}

export default Auth;