var mongoose = require("mongoose");
require("dotenv").config();

// Mongoose object conection opstions
const connectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

exports.connect = async () => await mongoose.connect(process.env.ATLAS_URI, connectionOptions);

/**
 * Drop database, close the connection and stop mongod.
 */

exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

/**
 * Remove all the data for all db collections.
 */
exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

const resp = process.env.NODE_ENV === "test" ? 1 : 0;

if (resp) {
  console.log("Using testing environment");
} else {
  // Loading the mongo db uri to a constat for easier access
  const connectionString = process.env.ATLAS_URI;
  mongoose
    .connect(connectionString, connectionOptions)
    .then(() => console.log("Connection stabilished successfully"))
    .catch((err) => console.log(err));
}

exports.close = () => mongoose.disconnect();
