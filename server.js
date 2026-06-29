require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const WorkerRoutes = require("./routes/workerRoutes");

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/Worker", WorkerRoutes);


app.get("/", (req,res)=>{
    res.send("Backend Running Successfully");
});


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
        console.log("Server running on port", process.env.PORT || 5000);
    });

})
.catch((error) => {
    console.log("MongoDB Error:");
    console.log(error);
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
    console.log("Database Ready ✅");
})
.catch((error) => {
    console.log("MongoDB Error:");
    console.log(error);
});