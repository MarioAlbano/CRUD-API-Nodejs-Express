//Using mongoose module
const mongoose = require("mongoose");

//Creating a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

//Creating 'User' collection
const User = mongoose.model("User", userSchema);

//Exporting 'User'. Now we can use to interact with the MongoDB database
module.exports = User;
