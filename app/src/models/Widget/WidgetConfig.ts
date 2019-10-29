const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const WidgetConfigSchema = new Schema({
   widget_id: {type: Number, required:true},
   key: {type: String, required : true},
   value: {type: String, required: true}
});

export let WidgetConfig = mongoose.model('WidgetConfig', WidgetConfigSchema);
