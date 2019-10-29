const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const PostPrioritySchema = new Schema({
   priority: {type:String, required:true},
});

export let PostPriority = mongoose.model('PostPriority', PostPrioritySchema);