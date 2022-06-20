import Axios from "axios";

//function that send the data of google user to the mongo db server
//will check if user exist by the server side
export const createUserFromAuth = async (user) => {
  console.log(user);
  try {
    await Axios.post("http://localhost:5000/user/postUser", {
      name: user.displayName,
      email: user.email,
    }).then((Response) => {
      alert("USER CREATED");
    });
  } catch (err) {
    console.log(err);
  }
};
