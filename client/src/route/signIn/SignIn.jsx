import { signInWithGooglePopup } from "../../utils/firebaseUtil/firebaseUtil";
import Axios from "axios";

import "./signIn.css";

const SignIn = () => {
  const logGoogleUser = async () => {
    //extract user from the sign in auth
    const { user } = await signInWithGooglePopup();

    //function that send the data of google user to the mongo db server
    //will check if user exist by the server side
    const createUserFromAuth = async (user) => {
      try {
        await Axios.post("http://localhost:5000/user/postUser", {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        }).then((Response) => {
          alert("USER CREATED");
        });
      } catch (err) {
        console.log(err);
      }
    };
    createUserFromAuth(user);
  };

  return (
    <div className="test">
      This is the Sign In page
      <button onClick={logGoogleUser}>Sign In with google</button>
    </div>
  );
};

export default SignIn;
