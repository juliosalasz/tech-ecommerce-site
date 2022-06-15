import { signInWithGooglePopup } from "../../utils/firebaseUtil/firebaseUtil";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      This is the Sign In page
      <button onClick={logGoogleUser}>Sign In with google</button>
    </div>
  );
};

export default SignIn;
