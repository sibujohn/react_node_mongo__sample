var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
	id: { type: Number, unique: true, index: true },
	name: String,
	scientificName: String,
	species: String,
	category: String,
	lifespan: Number,
	weight: Number,
	height: Number,
	// img: String
});

module.exports = mongoose.model('Data', dataSchema);