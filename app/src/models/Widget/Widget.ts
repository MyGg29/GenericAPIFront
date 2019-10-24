const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const Widget = new Schema({
   owner: {type: Schema.Types.ObjectId, ref: "User"},
   title: {type: String, required : true},
   description: {type: String, required : true},
   grid_width: {type: Number, required : false},
   grid_height: {type: Number, required: false},
});

export default mongoose.model('Widget', Widget);
