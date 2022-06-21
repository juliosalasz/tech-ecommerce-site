import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebaseUtil/firebaseUtil";
import { createUserFromAuth } from "../../api/Api";
import { Fragment, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import "./signInForm.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  //reset inputs after submission
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  //For creating user with google
  const logGoogleUser = async () => {
    //extract user from the sign in auth
    const { user } = await signInWithGooglePopup();
    //send user data to server function
    createUserFromAuth(user);
  };

  //for sending the data to the log in a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    //send user to server
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      //For types of errors
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password For Email");
          break;
        case "auth/user-not-found":
          alert("No user Associated with this email");
          break;
        default:
          console.log("User login encountered an error", error);
      }
    }
  };

  //set the form input info into the state
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const changeSignHandler = () => {
    props.onInOrUpHandler();
  };

  return (
    <Fragment>
      <h2>LOG IN</h2>

      <div className="signIn">
        <form onSubmit={handleSubmit} className="signInForm">
          <FormInput
            onIcon={faUser}
            placeholder="Email"
            label="email"
            type="text"
            required
            onChange={changeHandler}
            name="email"
            value={email}
          />
          <FormInput
            onIcon={faLock}
            placeholder="Password"
            label="password"
            type="password"
            required
            onChange={changeHandler}
            name="password"
            value={password}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="googleSignIne">
        <Button type="button" buttonType="google" onClick={logGoogleUser}>
          <FontAwesomeIcon icon={faGoogle} /> <p>Sign In with google</p>
        </Button>
      </div>
      <div className="signUpLink">
        Not a member?
        <Button buttonType="signUpLink" onClick={changeSignHandler}>
          Sign Up
        </Button>
      </div>
    </Fragment>
  );
};

export default SignInForm;
