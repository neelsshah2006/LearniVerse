import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "provide name"]
    },
    email: {
        type: String,
        required: [true, "provide email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "provide password"]
    },
  
    coins: {
        leftCoins: {
            type: Number,
            default: 100,  
        },
        usedCoins: {
            type: Number,
            default: 0, 
        },
        earnedCoins: { 
            type: Number,
            default: 0, 
        }
    }
    

    ,


    mentoredClasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor"
    }],
    attendingClasses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Learner"
    }],


    access_token: {
        type: String,
        default: ""
    },
    refresh_token: {
        type: String,
        default: ""
    },
    verify_email: {
        type: Boolean,
        default: false
    },


    educational_details: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Educational'
        }
    ],
    skills: 
        {
            type: Array,
            default: []
        }
    ,
    bio: {
        type: String,
        default: ""
    },

    forgot_password_otp: {
        type: String,
        default: null
    },
    forgot_password_expiry: {
        type: Date,
        default: ""
    },
    Gender: {
        type: String,
        enum: ['male', "female", ""],
        default: ""
    }
},
    {
        timestamps: true
    })

    const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel