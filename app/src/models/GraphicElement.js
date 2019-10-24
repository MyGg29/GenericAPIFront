const mongoose = require('mongoose'); // Import de la librairie mongoose
const Schema = mongoose.Schema;


// Définition du schéma
const GraphicElement = new Schema({
    name: {type: String, required: true},
    author: {type: String},
    content: {type: String},
    type: {type: String},
  }, 
  {strict: false},
  {timestamps: true} // Pour avoir les dates de création et de modification automatiquement gérés par mongoose
);

module.exports = GraphicElement; // Export du schéma