const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const WorkerRoutes = require("./routes/workerRoutes");


const app = express();


app.use(cors());
app.use(express.json());


// test

app.get("/",(req,res)=>{

res.send("Backend Running Successfully");

});


// routes

app.use("/api/Worker",WorkerRoutes);



mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected Successfully");

})
.catch(err=>{

console.log(err);

});



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log("Server running on port",PORT);

});