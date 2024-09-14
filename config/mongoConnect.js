const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("open",()=>{
    console.log(`${new Date().toLocaleString()} - Database connected!`)
});

mongoose.connection.on("error",(error)=>{
    console.log(error);
})

module.exports = mongoose.connection;