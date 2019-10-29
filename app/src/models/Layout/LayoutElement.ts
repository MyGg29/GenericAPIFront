const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const LayoutElementSchema = new Schema({
   layout_id: {type:Schema.Types.ObjectId, ref: "DashboardLayout"},
   widget_id: {type:Schema.Types.ObjectId, ref: "Widget"},
   width: {type:Number, required: true},
   height: {type:Number, required: true},
   column: {type:Number, required: true},
   row: {type: Number, required:true},
   min_width: {type: Number, required:true},
   min_height: {type: Number, required: true},
   max_width: {type:Number, required: true}
});

export let LayoutElement = mongoose.model('LayoutElement', LayoutElementSchema);