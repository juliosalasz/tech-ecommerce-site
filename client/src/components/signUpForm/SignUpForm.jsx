import { useState } from "react";
import { createUserFromAuth } from "../../api/Api";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebaseUtil/firebaseUtil";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  //this handler send the data to the server to create a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    //password must be check if equal to confirm password
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //send user to server
    try {
      await createAuthUserWithEmailAndPassword(email, password);
      const userObject = {
        displayName,
        email,
      };
      await createUserFromAuth(userObject);
      //   await createUserFromAuth(user);
      resetFormFields();
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name & LastName</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={changeHandler}
          value={displayName}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={changeHandler}
          value={email}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={changeHandler}
          value={password}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={changeHandler}
          value={confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
