const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
},{
    versionKey : false
})

const userModel = mongoose.model("user",userSchema)


const marvelSchema = mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    actor_name:{type:String,required:true},
    posted_by : {type:String,required:true},
    user_id : {type:String,required:true}
},{versionKey:false})

const MarvelModel = mongoose.model("marvel",marvelSchema)



module.exports = {userModel,MarvelModel}