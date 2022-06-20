import { signInWithGooglePopup } from "../../utils/firebaseUtil/firebaseUtil";
import { createUserFromAuth } from "../../api/Api";

import "./signIn.css";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    //extract user from the sign in auth
    const { user } = await signInWithGooglePopup();

    //send user data to server function
    createUserFromAuth(user);
  };

  return (
    <div className="test">
      This is the Sign In page
      <button onClick={logGoogleUser}>Sign In with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
