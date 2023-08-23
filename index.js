const express = require("express")
const { userRouter } = require("./routes/user.routes")
const { MarvelModel } = require("./model/user.model")
const { connection } = require("./db")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())


app.use("/user",userRouter)

app.listen(8080, async ()=>{
    try{
        await connection
        console.log("connected to mongoDB")
    }catch (err){
        console.log("Some error occured",err)
    }
})