const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const DashboardLayout = new Schema({
   dashboard: {type:Schema.Types.ObjectId, ref: "Dashboard"},
   type: {type:Schema.Types.ObjectId, ref:"LayoutType"}
});

module.exports = mongoose.model('DashboardLayout', DashboardLayout);