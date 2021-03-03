const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
    type: String,
    unique: true,
    required: true
    },
    rooms: [{
        number:{
            type: Number,
        },
        occupied:{
            type: Boolean,
        },
        guests:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" 
        }]
    }],
    hotelManager:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" ,
        required: true
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;