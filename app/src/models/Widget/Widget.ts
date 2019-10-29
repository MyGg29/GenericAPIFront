const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const WidgetSchema = new Schema({
   owner_id: {type: Number, required: true},
   title: {type: String, required : true},
   description: {type: String, required : true},
   grid_width: {type: Number, required : false},
   grid_height: {type: Number, required: false},
});

export let Widget = mongoose.model('Widget', WidgetSchema);
