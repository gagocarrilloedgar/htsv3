const User = require("../models/user");
const catchAsync = require("../helpers/catchAsync");

/**
 * Finds an object and returns the data associated Using
 * the _id property
 * @param {*}
 */
exports.find = () => async (req, res) => {
  const data = await User.findById(req.params.id);
  res.status(200).json(data);
};

/**
 * Adds an object with the User shchema to the MongoDB
 * @param {*}
 * @returns
 */
exports.add = () =>
  catchAsync(async (req, res) => {
    const data = await User.create(req.body);
    res.status(200).json(data);
  });

/**
 * Finds and udates an object using the standar _id parameter
 * @param {*}
 * @returns
 */
exports.update = () =>
  catchAsync(async (req, res) => {
    const data = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(data);
  });

/**
 *  Finds and deletes an object using the standar _id parameter
 * @param {*}
 * @returns
 */

exports.delete = () =>
  catchAsync(async (req, res) => {
    await USER.findOneAndDelete({ _id: req.params.id }, req.body);
    res.status(200).json({ message: "Model deleted correctly" });
  });
