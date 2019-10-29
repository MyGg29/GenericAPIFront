const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const NewsPostSchema = new Schema({
   author: {type:Schema.Types.ObjectId, ref:"User"},
   priority: {type:Schema.Types.ObjectId, ref:"PostPriority"},
   status: {type:Schema.Types.ObjectId, ref:"PostStatus"},
   creation_date: {type:Date, required:true},
   publication_date: {type:Date, required:true},
   expiration_date: {type:Date, required:true},
   content: {type:String, required:false},
});

export let NewsPost = mongoose.model('NewsPost', NewsPostSchema);