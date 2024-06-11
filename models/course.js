const mongoose = require("mongoose")
const schema = mongoose.Schema(
{
    "title":{type:String,require:true},
    "description":{type:String,require:true},
    "date":{type:String,require:true},
    "duration":{type:String,require:true},
    "venue":{type:String,require:true},
    "tname":{type:String,require:true}
}
)

let coursemodel = mongoose.model("courses",schema)
module.exports = {coursemodel}