import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.util";

const SignIn = () => {
    const signInWithGoogle = async () =>{
        const response = await signInWithGooglePopUp();
        console.log(response);
    }
return (
    <div>
        <h1>Sign In</h1>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
);
}

export default SignIn;