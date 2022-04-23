const res = require('express/lib/response');
const mongoose = require('mongoose')
const path = require('path')

const TimeStampModel = require('../model/timestamp')

const getTimestamp = (req, res) => {
    var utcString;
    var unixTimestamp;
    
    console.log('INPUT >>', req.params.input)
    
    let input = req.params.input

    // not a number. valid date?
    if (isNaN(input) && !Date.parse(input)) {
        return res.json({
            Error: "Invalid Date"
        })
    }

    unixTimestamp = isNaN(Number(input)) 
    ? new Date(input).getTime() 
    : Number(input)

    utcString = new Date(unixTimestamp).toUTCString()

    res.json({
        unix: unixTimestamp,
        utc: utcString
    })
}

const getCurrentTime = (req, res) => {

    var timeStamp = new Date()
    
    res.json({
        unix: timeStamp.getTime(),
        utc: timeStamp.toUTCString()
    })
}

const getHome = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}

module.exports = {
    getTimestamp,
    getCurrentTime,
    getHome
}