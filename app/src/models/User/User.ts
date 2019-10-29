const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   login: {type: String, required: true},
   password: {type: String, required: true},
   mail: {type: String, required : true},
   first_name: {type: String, required : true},
   last_name: {type: String, required : true},
   last_login: {type: Date, required: false},
});

export let User = mongoose.model('User', UserSchema);
