require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Backend Running Successfully");
});


const WorkerRoutes = require("./routes/workerRoutes");

app.use("/api/Worker", WorkerRoutes);



mongoose.connect(process.env.MONGO_URI,{
    serverSelectionTimeoutMS:30000
})
.then(()=>{

console.log("MongoDB Connected Successfully");


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
console.log("Server running on port",PORT);
});


})
.catch((err)=>{

console.log("MongoDB ERROR");
console.log(err.message);

});