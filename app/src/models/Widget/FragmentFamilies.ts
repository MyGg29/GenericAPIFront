const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const FragmentFamiliesSchema = new Schema({
   parent_fragment: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
   child_fragment: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
});

export let FragmentFamilies = mongoose.model('FragmentFamilies', FragmentFamiliesSchema);
