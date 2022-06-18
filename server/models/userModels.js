import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  uid: { type: String, requied: true },
  name: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    requied: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const UserDisplay = mongoose.model("users", UserSchema);

export default UserDisplay;
