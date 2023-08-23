const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://sarim:sarimkhan@cluster0.madduog.mongodb.net/mentor?retryWrites=true&w=majority")

module.exports = {connection}
