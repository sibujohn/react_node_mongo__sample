var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	id: { type: Number, unique: true, index: true },
	name: String,
	password: String,
});

module.exports = mongoose.model('User', userSchema);