const bcrypt = require("bcryptjs");

// Generates a secured hash of the password
exports.genPassword = (password) => {
  //Hash the password
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
  
};