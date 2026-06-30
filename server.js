 require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const WorkerRoutes = require("./routes/workerRoutes");


const app = express();


app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{

res.send("Backend Running Successfully");

});



app.use("/api/Worker",WorkerRoutes);



console.log("MONGO CHECK:",process.env.MONGO_URI);



mongoose.connect(process.env.MONGO_URI)

.then(()=>{


console.log("MongoDB Connected Successfully");


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log("Server running on port",PORT);

});


})

.catch((error)=>{


console.log("MongoDB ERROR");

console.log(error);


});