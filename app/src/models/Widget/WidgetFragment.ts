const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const WidgetFragmentSchema = new Schema({
   type: {type: Schema.Types.ObjectId, ref: "FragmentType"},
   widget_id: {type: Schema.Types.ObjectId, ref: "Widget"},
   start_column: {type: Number, required : true},
   start_row: {type: Number, required : true},
   width: {type: Number, required : true},
   height: {type: Number, required: true},
   configuration: {type: String, required: true}
});

export let WidgetFragment = mongoose.model('WidgetFragment', WidgetFragmentSchema);
