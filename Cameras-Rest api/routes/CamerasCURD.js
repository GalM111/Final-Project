const express = require('express');
const router = express.Router();
const Camera = require('../models/Camera');

// Get all routes
router.get('/', async (req, res) => {
	const camera = await Camera.find();

	res.json(camera);
});

// Create new camera
router.post('/new', async (req, res) => {
	const newCamera = new Camera(req.body);
	
	const savedCamera = await newCamera.save();

	res.json(savedCamera);
});

// Get specific camera
router.get('/get/:id', async (req, res) => {
	const q = await Camera.findById({ _id: req.params.id });

	res.json(q);
});

// Delete a camera
router.delete('/delete/:id', async (req, res) => {
	const result = await Camera.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a camera
router.patch('/update/:id', async (req, res) => {
	const q = await Camera.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(q);
});


module.exports = router;