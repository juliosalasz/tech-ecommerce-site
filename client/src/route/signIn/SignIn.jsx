import { signInWithGooglePopup } from "../../utils/firebaseUtil/firebaseUtil";
import Axios from "axios";

const SignIn = () => {
  const logGoogleUser = async () => {
    //ersponse will have the uid and we destructure user from the response
    const { user } = await signInWithGooglePopup();
    console.log(user);
    //here we must pass a function that will mix the uid and info from firebase and then send it into our own server
    //user into here
    const createUserFromAuth = async ({ user }) => {
      if (user.uid) {
        //already have user
      } else {
        Axios.post("http://localhost:5000/user/postUser", {
          uid: user.uid,
          name: user.name,
          email: user.email,
        }).then((Response) => {
          alert("USER CREATED");
        });
      }
      /*
      
      This functio must do two things.
      1. Searh if user already exists in the mongo db
      Maybe a axios.find that searches with the uid for the user in the whole database

      1. extract the uid from users and place an await search function that filters for the ui in all users result must be true of false
      
      2. If not create user with info
      Function for posting a body onto the database.
      
      
      
      */
      /*

      Axios.post("http://localhost:5000/user/postUser", {
        uid: user.uid,
        name: user.name,
        email: user.email,
      }).then((Response) => {
        alert("USER CREATED");
      });
      
      */
    };
    createUserFromAuth(user);
  };

  return (
    <div>
      This is the Sign In page
      <button onClick={logGoogleUser}>Sign In with google</button>
    </div>
  );
};

export default SignIn;
