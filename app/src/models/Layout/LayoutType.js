const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const LayoutType = new Schema({
   type: {type: String, required:true},
});

module.exports = mongoose.model('LayoutType', LayoutType);