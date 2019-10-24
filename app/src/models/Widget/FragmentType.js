const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const FragmentType = new Schema({
   fragment_id: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
   type: {type:String, required: true}
});

module.exports = mongoose.model('FragmentType', FragmentType);
