require('dotenv').config()

const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken');
const app = express()

const port = 2000

app.use(express.json())
app.use(cors())

// get events/eventType

// post event



app.get("/", (req,res)=>{
    res.json({})
})

app.listen(port, ()=>console.log("Events Server running on port: ", port))


