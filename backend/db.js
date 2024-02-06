const mongoose = require("mongoose")
const { date } = require("zod")

mongoose.connect("mongodb://localhost:27017/acemEvents")
console.log("successfully connect to the db")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model("Users", userSchema)

const eventsSchema = new mongoose.Schema({
    eventType:{
        type: String,
        required: true,
    },
    events:{
        type:[{
            eventId: Number,
            title: {type: String, required: true},
            subtitle:String,
            description: String,
            uploadDate: String,
            eventDate: String,
            eventLocation: String,
            eventTime: String,
            imgUrl: String,
            moreData: String,
            posterUrl: String,
            dateString:String,
            // img:{
            //         data: Buffer,
            //         contentType: String
            //     },
                extlinks: String
        }],
        default: undefined
    }
})
const Events = mongoose.model("Events", eventsSchema)

module.exports = {
    User, Events
}