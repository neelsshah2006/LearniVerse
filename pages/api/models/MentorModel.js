import mongoose from 'mongoose'

const MentorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", required: true
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    schedule: {
        type: Date,
        required: true
    },
    coines : {
        type: Number,
        default: 0 ,
    },
    subject: {
        type: String,
        required: true
    },

})

const MentorModel = mongoose.model("Mentor", MentorSchema)

export default MentorModel