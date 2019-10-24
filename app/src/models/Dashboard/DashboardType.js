const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const DashboardType = new Schema({
   type: {type:String, required:true},
});

module.exports = mongoose.model('DashboardType', DashboardType);