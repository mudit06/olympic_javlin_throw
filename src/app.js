const express =require('express')
require('../src/db/conn')

const router= require('./router/routers')
const MensRanking= require('../src/models/men')

const app = express()

const port= process.env.PORT || 3000


app.use(express.json())

app.use(router)

app.listen(port, ()=> console.log("SERVER RUNNIG"))