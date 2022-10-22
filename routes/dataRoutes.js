const express = require('express')
const router = express.Router()
const { getData, setData, updateData, deleteData } = require('../controllers/dataController')
const { protect } = require('../middleware/authMiddleware')

// Get & Create Data
router.route('/').get(protect, getData).post(protect, setData)

// Update & Delete Data
router.route('/:id').delete(protect, deleteData).put(protect, updateData)

module.exports = router
