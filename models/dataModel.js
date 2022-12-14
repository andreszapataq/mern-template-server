const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Datas', dataSchema)