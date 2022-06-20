import UserDisplay from "../models/userModels.js";

//function for finding all users
export const getUser = async (req, res) => {
  UserDisplay.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

export const postUser = async (req, res) => {
  //extract info from reques
  const user = req.body;
  console.log(user.email);
  //must check if email in body its already in the data base
  //pass infro through the model
  const newUser = new UserDisplay(user);
  //save into database
  await newUser.save();

  //send user created
  res.json(user);
};
