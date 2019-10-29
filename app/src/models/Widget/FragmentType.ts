const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const FragmentTypeSchema = new Schema({
   fragment_id: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
   type: {type:String, required: true}
});

export let FragmentType = mongoose.model('FragmentType', FragmentTypeSchema);
