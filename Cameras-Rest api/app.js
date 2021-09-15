const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Database
mongoose.connect('mongodb://localhost/camerasServer', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
	console.log("Connected to MongoDB database...");
});

// Middleware
app.use(bodyParser.json()); //wtf

// Routes
app.get('/', (req, res) => {
	res.send("Hello, World!");
});

const CamerasRoute = require('./routes/CamerasCURD');

app.use('/cameras', CamerasRoute);

// Starting server
app.listen(3000, console.log("Listening on port 3000"));