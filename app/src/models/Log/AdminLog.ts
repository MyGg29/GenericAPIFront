const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const AdminLogSchema = new Schema({
   date: {type:Date, required:true},
   user_id: {type:String, required:true},
   type: {type:Schema.Types.ObjectId, ref:"LogType"},
   action: {type: String, required:false}
});

export let AdminLog = mongoose.model('AdminLog', AdminLogSchema);