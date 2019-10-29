const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
   owner_id: {type:Schema.Types.ObjectId, ref: "User"},
   type: {type:Schema.Types.ObjectId, ref: "DashboardType"}
});

export let Dashboard = mongoose.model('Dashboard', DashboardSchema);