const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const DashboardTypeSchema = new Schema({
   type: {type:String, required:true},
});

export let DashboardType = mongoose.model('DashboardType', DashboardTypeSchema);