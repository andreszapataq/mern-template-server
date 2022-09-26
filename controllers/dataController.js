const asyncHandler = require('express-async-handler')

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get data' })
})

// @desc    Set data
// @route   POST /api/data
// @access  Private
const setData = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set data' })
})

// @desc    Update data
// @route   PUT /api/data/:id
// @access  Private
const updateData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update data ${req.params.id}` })
})

// @desc    Delete data
// @route   DELETE /api/data/:id
// @access  Private
const deleteData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete data ${req.params.id}` })
})

module.exports = {
    getData,
    setData,
    updateData,
    deleteData
}