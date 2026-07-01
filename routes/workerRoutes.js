const express = require("express");

const router = express.Router();

const Worker = require("../models/worker");



// ===============================
// CREATE WORKER (POST)
// ===============================

 router.post("/", async(req,res)=>{

try{

console.log("REQUEST BODY:", req.body);


const worker = new Worker(req.body);


const savedWorker = await worker.save();


console.log("WORKER SAVED:", savedWorker);


res.status(201).json(savedWorker);


}
catch(error){


console.log("CREATE WORKER ERROR:", error.message);



res.status(500).json({

error:error.message

});


}

});




// ===============================
// GET ALL WORKERS
// ===============================


router.get("/", async(req,res)=>{


try{


const workers = await Worker.find();


res.json(workers);



}
catch(error){


res.status(500).json({

error:error.message

});


}


});






// ===============================
// GET SINGLE WORKER
// ===============================


router.get("/:id", async(req,res)=>{


try{


const worker = await Worker.findById(req.params.id);



res.json(worker);



}
catch(error){


res.status(500).json({

error:error.message

});


}


});






// ===============================
// DELETE WORKER
// ===============================


router.delete("/:id", async(req,res)=>{


try{


await Worker.findByIdAndDelete(req.params.id);



res.json({

message:"Worker Deleted Successfully"

});



}
catch(error){


res.status(500).json({

error:error.message

});


}


});







// ===============================
// UPDATE WORKER
// ===============================


router.put("/:id", async(req,res)=>{


try{


const updatedWorker = await Worker.findByIdAndUpdate(


req.params.id,


req.body,


{
new:true
}


);



res.json(updatedWorker);



}
catch(error){


res.status(500).json({

error:error.message

});


}


});





module.exports = router;