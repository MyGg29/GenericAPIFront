const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const FragmentContent = new Schema({
   fragment_id: {type: Schema.Types.ObjectId, ref: "WidgetFragment"},
   key: {type:String, required: true},
   value: {type:String, required: true}
});

module.exports = mongoose.model('FragmentFamilies', FragmentContent);