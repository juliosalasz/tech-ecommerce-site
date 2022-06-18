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
  //pass infro through the model
  const newUser = new UserDisplay(user);
  //save into database
  await newUser.save();

  //send user created
  res.json(user);
};
