const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const WidgetConfig = new Schema({
   widget_id: {type: Schema.Types.ObjectId, ref: "Widget"},
   key: {type: String, required : true},
   value: {type: String, required: true}
});

module.exports = mongoose.model('WidgetConfig', WidgetConfig);
