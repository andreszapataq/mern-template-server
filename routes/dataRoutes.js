const express = require('express')
const router = express.Router()
const { getData, setData, updateData, deleteData } = require('../controllers/dataController')

// Get & Create Data
router.route('/').get(getData).post(setData)

// Update & Delete Data
router.route('/:id').delete(deleteData).put(updateData)

module.exports = router
