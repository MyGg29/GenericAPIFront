const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const FragmentFamilies = new Schema({
   parent_fragment: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
   child_fragment: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
});

module.exports = mongoose.model('FragmentFamilies', FragmentFamilies);
