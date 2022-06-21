import { signInWithGooglePopup } from "../../utils/firebaseUtil/firebaseUtil";
import { createUserFromAuth } from "../../api/Api";
import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import "./signInForm.css";

const SignInForm = (props) => {
  const logGoogleUser = async () => {
    //extract user from the sign in auth
    const { user } = await signInWithGooglePopup();

    //send user data to server function
    createUserFromAuth(user);
  };
  const changeHandler = () => {
    props.onInOrUpHandler();
  };
  return (
    <Fragment>
      <h2>LOG IN</h2>

      <div className="signIn">
        <form action="" className="signInForm">
          <FormInput
            onIcon={faUser}
            type="text"
            placeholder="Username"
            required
          />
          <FormInput
            onIcon={faLock}
            type="password"
            placeholder="Password"
            required
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="googleSignIne">
        <Button buttonType="google" onClick={logGoogleUser}>
          <FontAwesomeIcon icon={faGoogle} /> <p>Sign In with google</p>
        </Button>
      </div>
      <div className="signUpLink">
        Not a member?
        <Button buttonType="signUpLink" onClick={changeHandler}>
          Sign Up
        </Button>
      </div>
    </Fragment>
  );
};

export default SignInForm;

/*

<div className="inputField">
            <div className="inputFieldI">
              <FontAwesomeIcon icon={faUser} className="" />
            </div>
            <input type="text" placeholder="Username" required />
          </div>



            <div className="inputField">
            <div className="inputFieldI">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input type="password" placeholder="Password" required />
          </div>

*/
