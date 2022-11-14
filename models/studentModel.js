const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
});

const studentModel = mongoose.model("student", dataSchema);
module.exports=studentModel;