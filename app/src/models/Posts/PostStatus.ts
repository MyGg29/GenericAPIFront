const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const PostStatusSchema = new Schema({
   priority: {type:String, required:true},
});

export let PostStatus = mongoose.model('PostStatus', PostStatusSchema);