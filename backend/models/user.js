const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Scheme methods
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 10
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  this.password = bcrypt.hashSync(password, salt);

  next();
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
