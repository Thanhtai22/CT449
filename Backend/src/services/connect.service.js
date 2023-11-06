const mongoose = require("mongoose");
const dbUrl = 'mongodb://localhost/Project_CT449';
const connect = async () => {
  return await mongoose
    .connect(dbUrl)
    .then(() => {
      console.log(`mongoose is connected`);
    })
    .catch((err) => console.error(err));
};

module.exports = connect;
