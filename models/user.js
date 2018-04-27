const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    Business: String
});

const user = mongoose.model('user',userSchema);
module.exports = user; 