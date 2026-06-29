require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const WorkerRoutes = require("./routes/workerRoutes");


const app = express();


app.use(cors());
app.use(express.json());



// Routes

app.use("/api/Worker", WorkerRoutes);



// Test

app.get("/",(req,res)=>{

    res.send("Backend Running Successfully");

});




// Start server after MongoDB connection

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected Successfully");


    const PORT = process.env.PORT || 5000;


    app.listen(PORT,()=>{

        console.log(`Server running on port ${PORT}`);

    });


})


.catch((error)=>{

    console.log("MongoDB Connection Error");
    console.log(error);

});