var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Talk = new Schema({
    name: String,
    stuff: Array
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model("talks", Talk);
