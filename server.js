 const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Worker = require("./models/Worker");
const workerRoutes = require("./routes/workerRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Connection

mongoose.connect(
"mongodb://Saurabh:Saurabh1234@ac-snwqrh1-shard-00-00.rsucllf.mongodb.net:27017,ac-snwqrh1-shard-00-01.rsucllf.mongodb.net:27017,ac-snwqrh1-shard-00-02.rsucllf.mongodb.net:27017/?ssl=true&replicaSet=atlas-5klect-shard-0&authSource=admin&appName=Cluster0 "
)
.then(() => {

    console.log("MongoDB Connected Successfully");


    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });


})
.catch((error)=>{

    console.log("MongoDB Connection Error");
    console.log(error);

});


// Routes

app.use("/api/workers", workerRoutes);


// Test route

app.get("/", (req,res)=>{

    res.send("Backend Running Successfully");

});

 app.get("/api/workers/:id", async(req,res)=>{

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

 
 

 