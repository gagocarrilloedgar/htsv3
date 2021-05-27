const User = require("../models/user");

exports.add = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Error: " + err));
};
