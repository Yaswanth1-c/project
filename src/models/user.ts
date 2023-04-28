import mongoose from "mongoose";

// define UserSchema using mongoose.Schema constructor
const UserSchema = new mongoose.Schema({
  name: String, // name of the user, string data type
  email: String, // email of the user, string data type
  password: String, // password of the user, string data type
});

// create a model named User using UserSchema
const User = mongoose.model("User", UserSchema);

// export the User model
export { User };
