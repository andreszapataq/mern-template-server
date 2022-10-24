const asyncHandler = require('express-async-handler')

const Data = require('../models/dataModel')
const User = require('../models/userModel')

// @desc    Get data
// @route   GET /api/data
// @access  Private
const getData = asyncHandler(async (req, res) => {
    const data = await Data.find({ user: req.user.id })

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
        text: req.body.text,
        user: req.user.id
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

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the data user
    if(data.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the data user
    if(data.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
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