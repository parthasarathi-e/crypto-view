const { MongoOIDCError } = require("mongodb");
const mongoose = require("mongoose");

const tickerSchema = mongoose.Schema({
    name:String,
    last:String,
    buy:String,
    sell:String,
    volume:String,
    base_unit:String,
})

module.exports = mongoose.model("ticker",tickerSchema);