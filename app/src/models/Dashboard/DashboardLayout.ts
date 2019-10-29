const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const DashboardLayoutSchema = new Schema({
   dashboard: {type:Schema.Types.ObjectId, ref: "Dashboard"},
   type: {type:Schema.Types.ObjectId, ref:"LayoutType"}
});

export let DashboardLayout = mongoose.model('DashboardLayout', DashboardLayoutSchema);