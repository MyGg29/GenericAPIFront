const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const User = new Schema({
   login: {type: String, required: true},
   password: {type: String, required: true},
   mail: {type: String, required : true},
   first_name: {type: String, required : true},
   last_name: {type: String, required : true},
   last_login: {type: Date, required: true},
   role: { type: Schema.Types.ObjectId, ref: 'UserRole' }
});

module.exports = mongoose.model('User', User);
