const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const Dashboard = new Schema({
   owner_id: {type:Schema.Types.ObjectId, ref: "User"},
   type: {type:Schema.Types.ObjectId, ref: "DashboardType"}
});

module.exports = mongoose.model('Dashboard', Dashboard);