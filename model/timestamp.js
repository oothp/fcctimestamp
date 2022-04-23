const mongoose = require('mongoose')

const TimestampSchema = new mongoose.Schema({
    unix: Number,
    utc: String
})

const Timestamp = mongoose.model('Timestamp', TimestampSchema)
module.exports = Timestamp