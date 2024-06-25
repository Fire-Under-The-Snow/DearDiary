import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "provide the username bro"],
  },
  email: {
    type: String,
    required: [true, "provide the email man"],
  },
  password: {
    type: String,
    required: [true, "provide the password acho"],
  },
});

//so while using next make sure u write the mongoose.models.User
// what mistake i made was the naming of User, i wrote it directly users(which mongo does) but for Next give the
//same name that u save
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
