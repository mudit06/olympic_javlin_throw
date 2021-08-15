const mongoose= require('mongoose')

const menSchema = new mongoose.Schema({
    Place:{
        type:Number,
        required:true,
        unique:true
    },
    Competitor:{
        type:String,
        required:true,
        trim:true
    },
    DOB:{
        type:String,
        required:true,
        trim:true
    },
    Nat:{
        type:String,
        required:true,
        trim:true
    },
    Score:{
        type:Number,
        required:true,
        trim:true
    },
    Event:{
        type:String,
        default:"Javelin Throw",
        required:true
        
    },


})

const MensRanking = new mongoose.model("MenRanking",menSchema)

module.exports= MensRanking