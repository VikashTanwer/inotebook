const mongoose = require("mongoose");
// mongoose.Promise = global.Promise
// mongoose.Promise = require('bluebird');
const mongoUri = "mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&ssl=false";
// mongoUri = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoUri, {
        useNewUrlParser:true, useUnifiedTopology: true
    },()=>{
        console.log("ram ram ji");
    })
    // .then(() => {console.log("Connected to MongoDB")})
    // .catch((err) => console.log(err));
}

module.exports = connectToMongo;