const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");


userRouter.post("/signup" , async(req,res)=>{

    const {password} = req.body

    try{
        bcrypt.hash(password,5,async (err,hash)=>{
            if(hash){
                const user = new userModel({...req.body , password:hash})
                await user.save()
                res.status(200).send({"msg":"user register successfull"})
            }
        })
    }catch(err){
        res.status(400).send({"Error":err})

    }

})



userRouter.post("/signin", async(req,res)=>{
    const {email,password} = req.body
    const user = await  userModel.findOne({email})

    try{
        bcrypt.compare(password,user.password, (err,result)=>{
            if(result){
                var token = jwt.sign({ foo: 'bar' }, 'sarim');
                res.status(200).send({"msg":"Login Successfull","token":token})
            }else{
                res.status(400).send({"Error":err})
            }
        })
    }catch(err){
        res.status(400).send({"Error":err})
    }
})


module.exports = {userRouter}