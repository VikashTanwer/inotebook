const connectToMongo = require("./db");
const express = require('express');
const cors = require("cors");
// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise
connectToMongo();

const app = express()
const port = 5000

app.use(cors());

app.use(express.json());


//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/api/signup', (req, res) => {
//     res.send('signup')
//   })

//   app.get('/api/login', (req, res) => {
//     res.send('login')
//   })

app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`)
})

