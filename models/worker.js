const mongoose = require("mongoose");


const WorkerSchema = new mongoose.Schema({

name:{
type:String,
required:true
},


phone:{
type:String,
required:true
},


workType:{
type:String,
required:true
},


experience:{
type:String,
required:true
},


availability:{
type:String,
default:"Available"
},


wage:{
type:Number,
required:true
},


address:{
type:String,
required:true
}


});


module.exports = mongoose.model("Worker",WorkerSchema);