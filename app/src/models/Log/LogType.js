const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const LogType = new Schema({
   type: {type: String, required:false}
});

module.exports = mongoose.model('LogType', LogType);