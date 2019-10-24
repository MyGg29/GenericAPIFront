
const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const UserRole = new Schema({
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('UserRole', UserRole);
