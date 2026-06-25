const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

 const WorkerRoutes = require("./routes/workerRoutes");


const app = express();


app.use(cors());
app.use(express.json());


// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("MongoDB Connected Successfully");


app.listen(process.env.PORT || 5000, ()=>{

console.log("Server running");

});


})

.catch((error)=>{

console.log("MongoDB Connection Error");
console.log(error);

});



// Routes

app.use("/api/Worker", WorkerRoutes);



// Test route

app.get("/",(req,res)=>{

res.send("Backend Running Successfully");

});  