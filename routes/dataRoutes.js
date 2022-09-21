const express = require('express')
const router = express.Router()

// Get data
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get data' })
})

// Create data
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set data' })
})

// Update data
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update data ${req.params.id}` })
})

// Delete data
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete data ${req.params.id}` })
})

module.exports = router