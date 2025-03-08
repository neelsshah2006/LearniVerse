import mongoose from 'mongoose'

const LearnerSchema = new mongoose.Schema({
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
    coines: {
        type: Number,
        default: 0,
    },
    subject: {
        type: String,
        required: true
    },

})

const LearnerModel = mongoose.model("Learner", LearnerSchema)

export default LearnerModel