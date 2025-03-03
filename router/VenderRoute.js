const express = require("express")
const route = express.Router();
const {addNewVender,getVender,deleteVender} = require("../controller/venderController.js")

route.post("/addNewVender",addNewVender);
route.get("/addNewVender",getVender)
route.delete("/DeleteVender:id",deleteVender)
module.exports=route;





  

  