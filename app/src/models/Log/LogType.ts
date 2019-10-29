const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const LogTypeSchema = new Schema({
   type: {type: String, required:false}
});

export let LogType = mongoose.model('LogType', LogTypeSchema);