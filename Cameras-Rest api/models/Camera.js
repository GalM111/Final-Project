const mongoose = require('mongoose');

const CameraSchema = new mongoose.Schema({
	name: String,
	locationName: String,
	longitude: Number,
	latitude: Number,

	

});

module.exports = mongoose.model('Camera', CameraSchema);