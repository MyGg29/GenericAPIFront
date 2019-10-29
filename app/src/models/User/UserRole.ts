
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
    user: {type: Number, required: true},
    role: {type: Number, required: true}
});

export let UserRole = mongoose.model('UserRole', UserRoleSchema);
