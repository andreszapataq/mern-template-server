const asyncHandler = require('express-async-handler')

const Data = require('../models/dataModel')

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
    const data = await Data.find()

    res.status(200).json(data)
})

// @desc    Set data
// @route   POST /api/data
// @access  Private
const setData = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const data = await Data.create({
        text: req.body.text
    })

    res.status(200).json(data)
})

// @desc    Update data
// @route   PUT /api/data/:id
// @access  Private
const updateData = asyncHandler(async (req, res) => {
    const data = await Data.findById(req.params.id)

    if(!data) {
        res.status(400)
        throw new Error('Data not found')
    }

    const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedData)
})

// @desc    Delete data
// @route   DELETE /api/data/:id
// @access  Private
const deleteData = asyncHandler(async (req, res) => {
    const data = await Data.findById(req.params.id)

    if(!data) {
        res.status(400)
        throw new Error('Data not found')
    }

    await data.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getData,
    setData,
    updateData,
    deleteData
}