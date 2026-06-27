require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const WorkerRoutes = require("./routes/workerRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req,res)=>{
    res.send("Backend Running Successfully");
});


// Routes
app.use("/api/Worker", WorkerRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    console.log("MongoDB Connected Successfully");

})
.catch((error)=>{

    console.log("MongoDB Error:");
    console.log(error);

});


// IMPORTANT FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(`Server running on port ${PORT}`);

});