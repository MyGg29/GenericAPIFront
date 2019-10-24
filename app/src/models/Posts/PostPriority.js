const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const PostPriority = new Schema({
   priority: {type:String, required:true},
});

module.exports = mongoose.model('PostPriority', PostPriority);