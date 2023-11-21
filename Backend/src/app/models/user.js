const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    phone: String,
    city: String,
    address: String
},
    {
        collection: 'users'
    }
);

module.exports = mongoose.model('Users', UserSchema);


