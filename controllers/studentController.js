const studentModel = require("../models/studentModel");

exports.insertStudent=(req,res)=>{
    let bodyRequest = req.body;
    console.log(bodyRequest);

    studentModel.create(bodyRequest, (err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data:err});
        }
        else{
            res.status(201).json({status:"Success", data:data});
        }
    });
}