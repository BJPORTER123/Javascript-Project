const express = require('express')
const app = express()
const cors = require('cors')
// const MongoClient = require('mongodb').MongoClient


app.use(cors())
app.use(express.json())

app.listen(9000, ()=>{
    console.log('This app is listening on port 9000')
})

