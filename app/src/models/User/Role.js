const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const Role = new Schema({
   role: {type: string, required: true}
});

module.exports = mongoose.model('Role', Role);
