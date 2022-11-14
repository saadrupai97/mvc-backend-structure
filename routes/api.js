const express = require("express");
const helloController = require("../controllers/helloController");
const router = express.Router();
const studentController = require("../controllers/studentController");


// get routing
router.get("/hello-get", helloController.helloGet);
router.post("/hello-post", helloController.helloPost);

// api using mongoose
router.post("/insertStudent", studentController.insertStudent);

module.exports=router;