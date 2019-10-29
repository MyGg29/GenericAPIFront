const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const LayoutTypeSchema = new Schema({
   type: {type: String, required:true},
});

export let LayoutType = mongoose.model('LayoutType', LayoutTypeSchema);