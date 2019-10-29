const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;

const SensorsModel = new Schema({
   id: {type: Number, required: true},
   key: {type:String, required: true},
   value: {type:String, required: true},
   statements: {type: Array}
});

export let Sensors = mongoose.model('Sensors', SensorsModel);