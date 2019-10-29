const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
   role: {type: String, required: true}
});

export let Role = mongoose.model('Role', RoleSchema);
